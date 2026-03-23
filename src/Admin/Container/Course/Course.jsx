import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextForm from '../../Component/TextForm/TextForm';
import FileUpload from '../../Component/FileUpload/FileUpload';
import { Form, Formik } from 'formik';
import { mixed, object, string } from 'yup';
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


function Course(props) {
    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({})

    const dispatch = useDispatch()

    const display = () => {
        dispatch(getCategory())
    }

    useEffect(() => {
        display()
    }, [])

    const { data } = useGetCourseQuery(); //get Data

    const [adddata] = useAddCourseMutation() // add Data

    const [updata] = useUpdateCourseMutation() // update Data

    const [delData] = useDeleteCourseMutation()  //delete Data

    const [actData]= useActiveCourseMutation()  // switch btn Data

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
        console.log(id);
        delData(id)
    }


    const handleedit = (val) => {


        handleClickOpen();

        setUpdateData(val);

    }

    const handleSwitch =(check,data)=>{

        console.log(data);
        
        actData({...data,isActive:check});
    }

    const paginationModel = { page: 0, pageSize: 5 };

    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 200 },
        {
            field: 'category_id', headerName: 'parentCategory', width: 200,
            renderCell: (params) => {

                const parent_category = Categorydata.category.find(
                    (v) => v._id === params.row.category_id
                );


                return parent_category ? parent_category.name : null;
            }
        },
        {
            field: 'course_img', headerName: 'Category_image', width: 130,
            renderCell: (param) => (

                <img src={param.row.course_img.includes('blob') ?
                    param.row.course_img :
                    IMAGE_URL + param.row.course_img}
                    style={{ objectFit: 'cover', width: "50px", height: "50px" }} />

            )
        },
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
           field:'isActive', headerName: 'Active/Inactive', width: 200,
            renderCell: (params) => {
                return (
                    <FormGroup>
                        <FormControlLabel control={<Switch  checked={params.row?.isActive} onChange={(e)=>handleSwitch(e.target.checked,params.row)} />} style={{margin:'0 0 0 25px'}} />
                    </FormGroup>
                )

            }
        }
    ];


    let categorySchema = object({
        name: string()
            .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
            .required('name field is required'),
        description: string()
            .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
            .required('Description field is required'),
        category_id: string().required('please select category'),
        course_img: mixed()
            .test("profile_pic", "only allowed png and jpeg formate", function (val) {
                console.log(val);
                if (typeof val === 'string') {
                    return true;
                }

                let filetype = ['image/jpeg', 'image/png', 'image/jpg']

                return filetype.includes(val?.type?.toLowerCase());
            })
            .required('photo is required')

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
        formData.append('course_img', val.course_img);

        if (Object.keys(updatedata).length > 0) {
            formData.append('_id', val._id);
            updata(formData)
            if (typeof val.course_img === 'object') {
                // console.log("formData",formData);
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
                                course_img: null,

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
                                <TextForm name='name' id='name' label='Name' />

                                <TextForm name='description' id='Description' label='Description' />

                                <TextForm
                                    name='category_id'
                                    id="category_id"
                                    select
                                    data={subData}
                                    label="Select"
                                    style={{ margin: '0', padding: '0' }}
                                />
                                <FileUpload name='course_img' />



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