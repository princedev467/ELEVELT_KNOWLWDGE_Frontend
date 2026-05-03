import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextForm from '../../Component/TextForm/TextForm';
import FileUpload from '../../Component/FileUpload/FileUpload';
import { Form, Formik } from 'formik';
import { mixed, number, object, string } from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import { FormControlLabel, FormGroup, IconButton, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../../Redux/slice/CategorySlice';
import { useActiveCourseMutation, useAddCourseMutation, useDeleteCourseMutation, useGetCourseQuery, useUpdateCourseMutation } from '../../../Redux/Api/Course.Api';
import { IMAGE_URL } from '../../../utility/url';
import SwitchBtn from '../../Component/SwitchBtn/SwitchBtn';
import { userCheck } from '../../../Redux/slice/auth.slice';


function Course() {
    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({})

    const dispatch = useDispatch()

    const display = () => {
        dispatch(getCategory())
        dispatch(userCheck())
    }


    const auth = useSelector(state => state.auth)
    console.log("auth", auth);



    useEffect(() => {
        display()
    }, [])

    const { data } = useGetCourseQuery(); //get Data
    console.log("data:", data);


    const [adddata] = useAddCourseMutation() // add Data

    const [updata] = useUpdateCourseMutation() // update Data

    const [delData] = useDeleteCourseMutation()  //delete Data

    const [actData] = useActiveCourseMutation()  // switch btn Data

    console.log("courseData", data?.data);

    const handleClickOpen = () => {

        setOpen(true);
    };

    const Categorydata = useSelector(state => state.category)
    console.log(Categorydata.category);


    let catData = [
        { value: null, label: 'Select Course' }
    ]

    const handleClose = () => {
        setOpen(false);
    };



    const handledelete = async (id) => {
        console.log("handle delete_id:", id);
        delData(id)
    }


    const handleedit = (val) => {


        handleClickOpen();

        setUpdateData(val);
        console.log(val);


    }

    const handleSwitch = (check, data) => {

        console.log(data);

        actData({ ...data, isActive: check });
    }

    const paginationModel = { page: 0, pageSize: 5 };

    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 200 },

        { field: 'price', headerName: 'price', width: 80 },
        { field: 'week', headerName: 'week', width: 80 },

        { field: 'Instructor_id', headerName: 'Instructor_id', width: 260 },
        // {
        //     field: 'category_id', headerName: 'parentCategory', width: 200,
        //     renderCell: (params) => {

        //         const parent_category = Categorydata.category.find(
        //             (v) => v._id === params.row.category_id
        //         );


        //         return parent_category ? parent_category.name : null;
        //     }
        // },
        {
            field: 'course_img', headerName: 'Category_image', width: 130,
            renderCell: (param) => (

                <div>
                    {
                        param.row.course_img.map((v) => (
                            <img src={v.url} style={{ objectFit: 'cover', width: "50px", height: "50px" }} />
                        ))
                    }


                </div>
                // <img src={param.row.course_img.includes('blob') ?
                //     param.row.course_img :
                //     IMAGE_URL + param.row.course_img}
                //     style={{ objectFit: 'cover', width: "50px", height: "50px" }} />



            )
        },
        // {
        //     field: 'course_video', headerName: 'course_video', width: 130,
        //     renderCell: (param) => (

        //         // <img src={param.row.course_img.includes('blob') ?
        //         //     param.row.course_img :
        //         //     IMAGE_URL + param.row.course_img}
        //         //     style={{ objectFit: 'cover', width: "50px", height: "50px" }} />
        //         // <video src={param.row.course_video?.url}
        //         //     width="50"
        //         //     height="50" 
        //         //     controls
        //         //     />


        //     )
        // },
        {
            field: '', headerName: 'Action', width: 170, renderCell: (parem) => (
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
            field: 'isActive', headerName: 'Active/Inactive', width: 200,
            renderCell: (params) => {
                return (
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={params.row?.isActive} onChange={(e) => handleSwitch(e.target.checked, params.row)} />} style={{ margin: '0 0 0 25px' }} />
                    </FormGroup>
                )

            }
        }
    ];


    let categorySchema = object({
        name: string()
            // .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
            .required('name field is required'),
        description: string()
            // .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
            .required('Description field is required'),

        category_id: string().required('please select category'),

        price: number().required('please enter price'),

        week: number().required('please enter week'),
        // course_video: mixed().test("profile_pic", "only allowed png and jpeg formate", function (val) {
        //     console.log(val);
        //     if (typeof val?.url === 'string') {
        //         return true;
        //     }

        //     let filetype = ['video/mp4']

        //     return filetype.includes(val?.type?.toLowerCase());
        // })
        //     .required('photo is required'),
        course_img: mixed().required()
        // .test("profile_pic", "only allowed png and jpeg formate", function (val) {
        //     console.log(val);
        //     if (typeof val?.url === 'string') {
        //         return true;
        //     }

        //     let filetype = ['image/jpeg', 'image/png', 'image/jpg']

        //     return filetype.includes(val?.type?.toLowerCase());
        // })
        // .required('photo is required')

    })
    // .test("profile_pic", "less than 2 MB file is allowed", function (val) {
    //     console.log(val?.size);

    //     if (typeof val === 'string') {
    //         return true;
    //     }

    //     return val?.size <= 2 * 1024 * 1024
    // })



    const handlesubmit = async (val) => {
        console.log(val);
        // console.log('updatedata:', updatedata);

        let formData = new FormData();

        formData.append('name', val.name);
        formData.append('description', val.description);
        formData.append('category_id', val.category_id);
        val.course_img.forEach((v) => {
            if (v instanceof File) {
                formData.append('course_img', v);
            } else {
                formData.append('course_img', v.url);
            }
        });
        // formData.append('course_img', val.course_img);
        formData.append('week', val.week);
        formData.append('price', val.price);
        // formData.append('Preview_url', val.Preview_url);


          const data = localStorage.getItem("user");

        let storeuser = null;

        if (data) {
            storeuser = JSON.parse(data);
        }

        let Instructor_id = storeuser?.role === 'Instructor' ? storeuser._id : null

        console.log(Instructor_id);
         
        
            formData.append('Instructor_id', Instructor_id);



        if (Object.keys(updatedata).length > 0) {
            formData.append('_id', val._id);
            // console.log(val.course_img);

            updata(formData)
            console.log("updatedata", formData);


            if (typeof val.course_img === 'object') {
                console.log("formData", formData);
               

                updata(formData)
            } else {
                // dispatch(updateCategory(val));
                updata(formData)
                console.log(formData);

            }

            } else {
           

            // dispatch(addCategory(val));
            adddata(formData)
        }



    }

    let subData = [
        { value: '', label: '--select Category--' }
    ]


    Categorydata.category.map((v) => (
        subData.push({ value: v._id, label: v.name })
    ));

    console.log("subData:", subData);

    return (
        <>
            <h1>Course</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Course</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                name: '',
                                description: '',
                                category_id: '',
                                course_img: [],
                                Instructor_id: null,
                                week: '',
                                price: '',
                                // Preview_url: []

                            }}
                            enableReinitialize={true}
                            validationSchema={categorySchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                handlesubmit(values)

                                resetForm()
                                handleClose()
                            }}

                        >
                            <Form id="subscription-form">
                                <TextForm
                                    name='category_id'
                                    id="category_id"
                                    type="select"
                                    data={subData}
                                    label="Select"
                                    style={{ margin: '0', padding: '0' }}
                                />
                                <TextForm name='name' id='name' label='Name' />

                                <TextForm name='description' id='Description' label='Description' />

                                <TextForm name='price' id='price' label='price' />

                                <TextForm name='week' id='week' label='week' />



                                <FileUpload name='course_img' />


                                {/* <FileUpload name='Preview_url'  type='video' /> */}



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
                    rows={data?.data}
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

export default Course;