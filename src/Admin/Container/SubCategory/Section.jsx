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
// import { addSubCategory, deleteSubCategory, getSubCategory, updateSubCategory } from '../../../Redux/slice/SubCategorySlice';
import { getCategory } from '../../../Redux/slice/CategorySlice';
import { useAddSectionMutation, useDeleteSectionMutation, useGetSectionQuery, useUpdateSectionMutation } from '../../../Redux/Api/Section.Api';
import { useGetCourseQuery } from '../../../Redux/Api/Course.Api';



function Section(props) {

        const [open, setOpen] = useState(false);
        const [updatedata, setUpdateData] = useState({})

        const { data: course, error: courseerror, isLoading: corseLoading } = useGetCourseQuery(); //get Data
        console.log("course", course);

        const { data: section } = useGetSectionQuery();
        console.log("section", section);


        let SectionData = section?.data
        const [addData] = useAddSectionMutation();

        const [updateData] = useUpdateSectionMutation();

        const [deleteData] = useDeleteSectionMutation();

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

        course?.data?.map((v) => (
            catdrop.push({ value: v._id, label: v.name })

        ));

        let data
        if (section?.data.length > 0) {
            data = section?.data
        }

        console.log(catdrop);
        
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
            { field: 'name', headerName: 'Name', width: 130 },
            { field: 'description', headerName: 'description', width: 200 },


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



        let subcategorySchema = object({
            name: string()
                // .matches(/^[A-Za-z]{2,30}$/, "name can only contain alphabet")
                .required('name field is required'),
            description: string()
                // .matches(/^[A-Za-z]{2,90}$/, "Description can only contain alphabet")
                .required('Description field is required'),
            course: string().required('select is required'),
        })


        const handlesubmit = async (val) => {
            console.log("submit", val);
            console.log('updatedata:', updatedata);


            if (Object.keys(updatedata).length > 0) {
            await updateData({ _id: updatedata._id, ...val })
            setUpdateData({});

            } else {
            await addData(val)
                }




        }
    //  

    return (
        <>
            <h1>Section</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Section</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
                                name: '',
                                description: '',
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
                                   type="select"
                                    name='course'
                                    data={catdrop}
                                    label='course'

                                />
                                <TextForm name='name' id='name' label='Name' />

                                <TextForm name='description' id='description' label='description' />

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
                    rows={SectionData}
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

export default Section;