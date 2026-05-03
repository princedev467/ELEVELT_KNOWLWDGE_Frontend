import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';



function Content(props) {


    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({});
    const [courseid, setCourseId] = useState('');


    // const { setFieldValue } = useFormikContext();

    // console.log("courseid", courseid);


    const { data: course, error: courseerror, isLoading: corseLoading } = useGetCourseQuery(); //get Data
    // console.log("course", course);

    const { data: section } = useGetSectionQuery();
    // console.log("section", section);

    // const { data: quiz } = useGetquizQuery()


    let SectionData = section?.data

    // quizContent
    // const { data: quizContent } = useGetquizContentQuery();
    // let QuizContentData = quizContent?.data
    // console.log(QuizContentData);


    // let QuizData = quiz?.data

    //contentData

    const { data: content } = useGetcontentQuery();
    console.log(content);

    let ContentData = content?.data

    const [addData] = useAddcontentMutation();

    const [updateData] = useUpdatecontentMutation();

    const [deleteData] = useDeletecontentMutation();


    console.log(SectionData);

    const handleClickOpen = () => {
        setOpen(true);
    };

    
        const auth = useSelector(state => state.auth)
        console.log("auth", auth);
    
    // const Categorydata = useSelector(state => state.category)

    const catdrop = [{ value: '', label: '---Select Course--' }];

    let sectionData = section?.data.filter((v) => v.course === courseid);

    //course DropDown
    course?.data?.map((v) => (

        catdrop.push({ value: v._id, label: v.name })

    ));


    const secdrop = [{ value: '', label: '---Select Section--' }];


    //  Section DropDown
    sectionData?.map((v) => (
        secdrop.push({ value: v._id, label: v.name })

    ));
    // let data
    // if (section?.data.length > 0) {
    //     data = section?.data
    // }

    console.log("catdrop", catdrop);
    console.log("secdrop", secdrop);


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
        {
            field: 'course', headerName: 'course', width: 200, renderCell: (parem) => {
                const c = course?.data?.find((v) => v._id === parem.row.course);

                console.log(c);

                return c?.name
            }
        },
        {
            field: 'section', headerName: 'section', width: 200, renderCell: (param) => {
                const sec = section?.data?.find(
                    (v) => v._id === param?.row?.section
                );

                return sec?.name;
            }


        },
        { field: 'name', headerName: 'Name', width: 130 },
        {field:'order' ,headerName: 'Order', width: 130 },
        
        { field: 'Instructor_id', headerName: 'Instructor_id', width: 260 },
        {
            field: 'contentFile', headerName: 'Source', width: 130,
            renderCell: (param) => (

                <div>
                    {
                        param.row.contentFile.map((v,i) => {
                            if (v.resource_type === 'image') {
                                return (
                                    <img src={v.url} style={{ objectFit: 'cover', width: "50px", height: "50px" }} />

                                )
                            } else if (v.resource_type === 'video') {
                                return (

                                    <video key={i} width="50" height="50" controls autoPlay>
                                        <source src={v.url} />
                                    </video>
                                )
                            } else if (v.url.toLowerCase().endsWith('.pdf')) {
                                return (

                                    <a key={i} href={v.url} target='_blank' rel="noreferrer" >
                                        View PDF
                                    </a>
                                )
                            }

                        })
                    }


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



    let subcategorySchema = object({
        name: string()
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

        formData.append('name', val.name);
        formData.append('section', val.section);
        formData.append('course', courseid);
         formData.append('order',val.order);

        val.contentFile.forEach((v) => {
            if (v instanceof File) {
                  formData.append('order',val.order);
                formData.append('contentFile', v);
            } else {
                formData.append('contentFile', v.url);
            }
        });


          const data = localStorage.getItem("user");

        let storeuser = null;

        if (data) {
            storeuser = JSON.parse(data);
        }

        let Instructor_id = storeuser?.role === 'Instructor' ? storeuser._id : null

        console.log(Instructor_id);
         
            formData.append('Instructor_id', Instructor_id);

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
            setCourseId('');
        }




    }

    return (
        <>
            <h1>Content</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Quiz</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                name: '',
                                section: '',
                                course: '',
                                Instructor_id: null,
                                contentFile: [],
                                order:''


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

                                <TextForm
                                    type="select"
                                    name='course'
                                    data={catdrop}
                                    label='course'
                                    value={courseid}
                                    onChange={(e) => {

                                        setCourseId(e.target.value)
                                        formik.setFieldValue("course", e.target.value);

                                    }}
                                />
                                <TextForm
                                    type="select"
                                    name='section'
                                    data={secdrop}
                                    label='section'

                                />



                                <TextForm name='name' id='name' label='Name' />

                                  <TextForm name='order' id='order' label='Order' />

                                <FileUpload name='contentFile' />


                                {/* <button>
                                    <NavLink to={`quizPage/${courseid}`}>
                                        Add Your Question
                                    </NavLink>
                                </button> */}

                                {/* <TextForm name='description' id='description' label='description' /> */}

                                {/* <FileUpload name='photo' /> */}



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
                    rows={ContentData}
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

export default Content;

