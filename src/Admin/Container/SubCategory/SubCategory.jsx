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
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSubCategory, deleteSubCategory, getSubCategory, updateSubCategory } from '../../../Redux/slice/SubCategorySlice';
import { getCategory } from '../../../Redux/slice/CategorySlice';



function SubCategory(props) {
    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({})


    const dispatch = useDispatch()

    const display = () => {
        dispatch(getSubCategory())
    }

    useEffect(() => {
        display();

        dispatch(getCategory())
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const Categorydata = useSelector(state => state.category)

    const catdrop = [{ value:'', label: '---Select Category--' }];

     Categorydata.category.map((v) => {
        catdrop.push({ value: v.id , label: v.name })

    });

    console.log(catdrop);
    console.log(Categorydata.category);


    const subcategorydata = useSelector(state => state.SubCategory)
    console.log(subcategorydata.subCategory);
    console.log(subcategorydata);

    const handleClose = () => {
        setOpen(false);
    };



    const handledelete = async (id) => {
        console.log(id);

        dispatch(deleteSubCategory(id));
    }


    const handleedit = (val) => {


        handleClickOpen();

        setUpdateData(val);
    }

    const paginationModel = { pae: 0, pageSize: 5 };
    const columns = [
        { field: 'category', headerName: 'Category', width: 200 ,renderCell:(parem)=>{
              const c=  Categorydata.category.find((v)=>v.id===parem.row.category);

              console.log(c);
              
              return c?.name
        }},
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'Description', headerName: 'Description', width: 200 },
        
        {
            field: 'photo', headerName: 'SubCategory_image', width: 200,
            renderCell: (parem) => (

                <img src={`/public/assets/images/courses/4by3/${parem.row.photo}`} style={{ objectFit: 'cover', width: "50px", height: "50px" }} />

            )
        },
        {
            headerName: 'Action', width: 170, renderCell: (parem) => (
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => handledelete(parem.row.id)}>
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
            .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
            .required('name field is required'),
        Description: string()
            .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
            .required('Description field is required'),
        category: string().required('select is required'),
        photo: mixed()
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
        .test("profile_pic", "less than 2 MB file is allowed", function (val) {
            console.log(val?.size);

            if (typeof val === 'string') {
                return true;
            }

            return val?.size <= 2 * 1024 * 1024
        })


    const handlesubmit = async (val) => {
        console.log("submit",val);
        console.log('updatedata:', updatedata);


        if (Object.keys(updatedata).length > 0) {
            if (typeof val.photo === 'object') {
                dispatch(updateSubCategory({ ...val, photo: val.photo.name }));
            } else {
                dispatch(updateSubCategory(val));
            }
        } else {
            dispatch(addSubCategory({ ...val, photo: val.photo.name }));
        }




    }
    //  

    return (
        <>
            <h1>SubCategory</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add SubCategory</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                name: '',
                                Description: '',
                                category: '',
                                photo: null
                            }}
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
                                    name='category'
                                    data={catdrop}
                                    label='Category'
                                    
                                />
                                <TextForm name='name' id='name' label='Name' />

                                <TextForm name='Description' id='Description' label='Description' />

                                <FileUpload name='photo' />



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
                    rows={subcategorydata.subCategory}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />


            </React.Fragment>
        </>
    );
}

export default SubCategory;