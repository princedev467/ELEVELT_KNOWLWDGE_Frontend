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
import { useAddquizMutation, useDeletequizMutation, useGetquizQuery, useUpdatequizMutation } from '../../../Redux/Api/Quiz.Api';

function Quiz(props) {

    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({});
    const [courseid, setCourseId] = useState('');


    // const { setFieldValue } = useFormikContext();

    console.log("courseid", courseid);


    const { data: course, error: courseerror, isLoading: corseLoading } = useGetCourseQuery(); //get Data
    console.log("course", course);

    const { data: section } = useGetSectionQuery();
    console.log("section", section);

    const { data: quiz } = useGetquizQuery()

    let SectionData = section?.data


    let QuizData = quiz?.data


    const [addData] = useAddquizMutation();

    const [updateData] = useUpdatequizMutation();

    const [deleteData] = useDeletequizMutation();

    // const dispatch = useDispatch()

    // const display = () => {
    //     dispatch(getSubCategory())
    // }

    // useEffect(() => {
    //     display();

    //     dispatch(getCategory())
    // }, [])

    console.log(SectionData);

    const handleClickOpen = () => {
        setOpen(true);
    };

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

        {
            headerName: 'Quiz Content', width: 170, renderCell: (parem) => (
                <div>
                    <button style={{ border: 'none' }}><NavLink style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px',
                        height: '40px',
                        marginTop: '4px',
                        textDecoration: 'none',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        marginLeft: '20px'
                    }} to={`/admin/quizPage/${parem.row._id}`}>Add Quiz</NavLink></button>
                </div>
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


        if (Object.keys(updatedata).length > 0) {
            await updateData({ _id: updatedata._id, course: courseid , ...val })
            setUpdateData({});

        } else {
            await addData({ ...val, course: courseid });
            setCourseId('');
        }




    }
    return (
        <>
            <h1>Quiz</h1>
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
                                description: '',
                                section: '',
                                course: '',

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
                                    select
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
                                    select
                                    name='section'
                                    data={secdrop}
                                    label='section'

                                />



                                <TextForm name='name' id='name' label='Name' />


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
                    rows={QuizData}
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

export default Quiz;