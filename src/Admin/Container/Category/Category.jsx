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
import { IconButton, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getCategory, updateCategory } from '../../../Redux/slice/CategorySlice';
import { IMAGE_URL } from '../../../utility/url';


function Category(props) {

    // const id=useParams()
    // console.log(id);

    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({})
   
    const dispatch = useDispatch()

    const display = () => {
        dispatch(getCategory())
    }

    useEffect(() => {
        display()
    }, [])


    const handleClickOpen = () => {
        setUpdateData({});
        setOpen(true);
    };

    const Categorydata = useSelector(state => state.category)
    console.log(Categorydata.category);
  

    let catData = [
        { value: null, label: 'Select Category' }
    ]

    const handleClose = () => {
        setOpen(false);
    };

    // console.log(data);

    const handledelete = async (id) => {
        console.log(id);

        dispatch(deleteCategory(id));
    }


    const handleedit = (val) => {


        handleClickOpen();

        setUpdateData(val);

    }

    const paginationModel = { page: 0, pageSize: 5 };
    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 200 },
        {
            field: 'parent_category_id', headerName: 'parentCategory', width: 200,
            renderCell: (params) => {

                const parent_category = Categorydata.category.find(
                    (v) => v._id === params.row.parent_category_id
                );


                return parent_category ? parent_category.name : null;
            }
        },
        {
            field: 'category_img', headerName: 'Category_image', width: 130,
            renderCell: (param) => (

                // <img src={`${IMAGE_URL}${param.row.category_img}`} style={{ objectFit: 'cover', width: "50px", height: "50px" }} />
                
                 <img src={`${param.row.category_img.url}`} style={{ objectFit: 'cover', width: "40px", height: "40px" }} />
            
            )
        },
        {
            headerName: 'Action', width: 170, renderCell: (parem) => (
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


    let categorySchema = object({
        name: string()
            .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
            .required('name field is required'),
        description: string()
            .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
            .required('Description field is required'),
        category_img: mixed()
            .test("profile_pic", "only allowed png and jpeg formate", function (val) {
                console.log(val);
                if (typeof val?.url === 'string') {
                    return true;
                }

                let filetype = ['image/jpeg', 'image/png', 'image/jpg']

                return filetype.includes(val?.type?.toLowerCase());
            })
            .required('photo is required')
    })
        .test("profile_pic", "less than 2 MB file is allowed", function (val) {
            console.log(val?.size);

            if (typeof val?.url === 'string') {
                return true;
            }

            return val?.size <= 2 * 1024 * 1024
        })



    const handlesubmit = async (val) => {
        console.log(val);
        console.log('updatedata:', updatedata);

        if (Object.keys(updatedata).length > 0) {
            if (typeof val.category_img === 'object') {
                dispatch(updateCategory(val));
            } else {
                dispatch(updateCategory(val));
            }
        } else {
            dispatch(addCategory(val));
        }



    }

    let subData=[
        {value:'',label:'--select Category--'}
    ]

    
    Categorydata.category.map((v)=>(
            subData.push({value:v._id,label:v.name})
    ));

    console.log("subData:",subData);
    
    return (
        <>
            <h1>Category</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Category</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                name: '',
                                description: '',
                                parent_category_id:null,
                                category_img: null,

                            }}
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
                                name='parent_category_id'
                                    id="parent_category_id"
                                    select
                                    data={subData}
                                    label="Select"
                                    style={{ margin: '0', padding: '0' }}
                                />
                                <FileUpload name='category_img' />



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
                    rows={Categorydata.category}
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

export default Category;