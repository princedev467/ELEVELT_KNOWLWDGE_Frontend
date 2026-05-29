import React, { useEffect, useState } from 'react';
import { useGetCourseQuery } from '../../../Redux/Api/Course.Api';
import { useGetSectionQuery } from '../../../Redux/Api/Section.Api';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { object, string } from 'yup';
import { Form, Formik, useFormikContext } from 'formik';
import TextForm from '../../Component/TextForm/TextForm';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import { useAddcontentMutation, useDeletecontentMutation, useGetcontentQuery, useUpdatecontentMutation } from '../../../Redux/Api/Content.Api';
import FileUpload from '../../Component/FileUpload/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from '../../../Redux/slice/auth.slice';
import RadioButton from '../../Component/RadioButton/RadioButton';
import { useGetPaymentQuery } from '../../../Redux/Api/Payment.Api';
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogQuery, useUpdateBlogMutation } from '../../../Redux/Api/blog.Api';


function Blog(props) {

    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({});


    const dispatch = useDispatch();
    //contentData
    const display = () => {

        dispatch(userCheck())
    }

    const { data: blog } = useGetBlogQuery();
    console.log(blog);

    let blogData = blog?.data

    const [addData] = useAddBlogMutation();

    const [updateData] = useUpdateBlogMutation();

    const [deleteData] = useDeleteBlogMutation();


    useEffect(() => {
        display()
    }, [])



    const handleClickOpen = () => {
        setOpen(true);
    };


    const auth = useSelector(state => state.auth)
    console.log("auth", auth);



    const handleClose = () => {
        setOpen(false);
    };



    const handledelete = async (id) => {
        console.log(id);

        deleteData(id);
    }


    const handleedit = (val) => {


        handleClickOpen();

        setUpdateData(val);
       
    }

    const paginationModel = { pae: 0, pageSize: 5 };
    const columns = [
       
        { field: 'title', headerName: 'Name', width: 130 },
        { field: 'subtitle', headerName: 'Order', width: 80 },
         { field: 'instructor', headerName: 'Instructor', width: 240 },
        {
            field: 'content',
            headerName: 'Blog',
            width: 150,

            renderCell: (param) => (
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {param.row.content?.map((v, i) => {
                       
                            
                             return( 
                                  <img
                                    key={i}
                                    src={v.url}
                                    alt="preview"
                                    style={{
                                        objectFit: 'cover',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '5px'
                                    }}
                                />)
                        
                    })}
                </div>
            )
        },
        // { field: 'description', headerName: 'description', width: 200 },


        {
            field: 'action', headerName: 'Action', width: 170, renderCell: (parem) => (
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => handledelete(parem.row._id)}>
                        <DeleteIcon style={{ color: 'red' }} />
                    </IconButton>
                    <IconButton onClick={() => handleedit(parem.row)} >
                        <EditIcon style={{ color: 'orange' }} />

                    </IconButton>
                </Stack>
            )
        },


    ];



    let BlogSchema = object({
        title: string()
            // .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
            .required('name field is required'),
        // description: string()
        //     // .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
        //     .required('Description field is required'),

    })


   
    const handlesubmit = async (val) => {
        console.log("submit", val);
        console.log('updatedata:', updatedata);


        let formData = new FormData();

        formData.append('title', val.title);
        formData.append('subtitle', val.subtitle);
        val.content.forEach((v) => {
            if (v instanceof File) {

                formData.append('content', v);
            } else {
                formData.append('content', v.url);
            }
        });


        const data = localStorage.getItem("user");

        let storeuser = null;

        if (data) {
            storeuser = JSON.parse(data);
        }

        let Instructor_id = storeuser?.role === 'Instructor' ? storeuser._id : null

        console.log(Instructor_id);

        formData.append('instructor', Instructor_id);

        if (Object.keys(updatedata).length > 0) {

            // if (auth.auth?.role === 'Instructor') {
            //     formData.append('Instructor_id', auth.auth._id);

            // }
            formData.append('_id', updatedata._id);

            updateData(formData)
            setUpdateData({});

        } else {
            // let data=Object.fromEntries(formData) 
            // console.log(data);
            addData(formData);
         
        }




    }



    return (
        <>
            <h1>Blog</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Quiz</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                title: '',
                                subtitle: '',
                                date: '',
                                instructor: null,
                                content: [],
                            }}
                            enableReinitialize
                            validationSchema={BlogSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                handlesubmit(values)

                                resetForm()
                                handleClose()
                            }}

                        >
                            <Form id="subscription-form">
                                <TextForm name='title' id='title' label='Title' />
                                <TextForm name='subtitle' id='subtitle' label='SubTitle' />
                                <FileUpload name='content' />
                            </Form>
                        </Formik>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="subscription-form">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
                <br /><br />
                <DataGrid
                    rows={blogData}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                    getRowId={(row) => row ? row._id : ''}
                />


            </React.Fragment>
        </>
    );
}

export default Blog;






