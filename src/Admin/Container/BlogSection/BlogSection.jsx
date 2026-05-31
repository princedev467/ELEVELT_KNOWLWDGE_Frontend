import React, { useEffect, useState } from 'react';
import { useAddBlogSectionMutation, useDeleteBlogSectionMutation, useGetBlogSectionQuery, useUpdateBlogSectionMutation } from '../../../Redux/Api/blogSection.Api';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBlogQuery } from '../../../Redux/Api/blog.Api';
import { userCheck } from '../../../Redux/slice/auth.slice';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { object, string } from 'yup';
import { Form, Formik, useFormikContext } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import FileUpload from '../../Component/FileUpload/FileUpload';
import TextForm from '../../Component/TextForm/TextForm';



function BlogSection(props) {

    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({});



    const dispatch = useDispatch();
    //contentData


    useEffect(() => {
        dispatch(userCheck())
    }, [dispatch])

    const { data: blog } = useGetBlogQuery();
    console.log(blog);

    let BlogData = blog?.data


    const { data: blogSection } = useGetBlogSectionQuery();

    let blogSectionData = blogSection?.data

    console.log(blogSectionData);
    

    const [addData] = useAddBlogSectionMutation();

    const [updateData] = useUpdateBlogSectionMutation();

    const [deleteData] = useDeleteBlogSectionMutation();



    const blogdrop = [{ value: '', label: '---Select blog--' }];


    //  Section DropDown
    BlogData?.map((v) => (
        blogdrop.push({ value: v._id, label: v.title })

    ));
    console.log(blogdrop);


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
        setCourseId(val.course);
    }

    const paginationModel = { pae: 0, pageSize: 5 };
    const columns = [
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'heading', headerName: 'Heading', width: 80 },
        {
            field: 'blog', headerName: 'Blog', width: 100,
            renderCell: (param) => (
                <p>{param?.row?.blog?.title}</p>
            )
        },
        {
            field: 'image',
            headerName: 'Source',
            width: 150,

            renderCell: (param) => (
                <img src={param?.row?.image[0]?.url} alt="" />
            )
        },
        { field: 'description', headerName: 'description', width: 200 },


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



    let subcategorySchema = object({
        title: string()
            .required('name field is required'),

    })



    const handlesubmit = async (val) => {
        console.log("submit", val);
        console.log('updatedata:', updatedata);


        let formData = new FormData();

        formData.append('blog', val.blog);
        formData.append('title', val.title);
        formData.append('heading', val.heading);
        formData.append('description', val.description);
        formData.append('order', String(val.order));

        val.image.forEach((v) => {
            if (v instanceof File) {

                formData.append('image', v);
            } else {
                formData.append('image', v.url);
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


            formData.append('_id', updatedata._id);
            updateData(formData)
            setUpdateData({});
        } else {

            addData(formData);

        }
    }

    return (
        <>
            <h1>Blog Section</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add BlogSection</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                blog: '',
                                title: '',
                                heading: '',
                                image: [],
                                order: '',
                                description: ''


                            }}
                            enableReinitialize
                            validationSchema={subcategorySchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                handlesubmit(values)

                                resetForm()
                                handleClose()
                            }}

                        >
                            <Form id="subscription-form">
                                <TextForm type="select" name='blog' data={blogdrop} label='blog' />
                                <TextForm name='title' id='title' label='Title' />
                                <TextForm name='heading' id='heading' label='heading' />
                                <TextForm name='description' id='description' label='Description' />
                                <TextForm name='order' id='order' label='Order' />
                                <FileUpload name='image' />
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
                    rows={blogSectionData}
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

export default BlogSection;