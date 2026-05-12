import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { object, string } from 'yup';
import { Form, Formik, useFormikContext } from 'formik';
import TextForm from '../../Component/TextForm/TextForm';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from '../../../Redux/slice/auth.slice';
import { useAddCouponMutation, useDeleteCouponMutation, useGetCouponQuery, useUpdateCouponMutation } from '../../../Redux/Api/coupon.Api';

function Coupon(props) {
    const [open, setOpen] = useState(false);
    const [updatedata, setUpdateData] = useState({});
    const [courseid, setCourseId] = useState('');



    const dispatch = useDispatch();

    const display = () => {

        dispatch(userCheck())
    }




    useEffect(() => {
        display()
    }, [])

    const { data: coupon } = useGetCouponQuery();
    console.log(coupon?.data);


    const [addData] = useAddCouponMutation();

    const [updateData] = useUpdateCouponMutation();

    const [deleteData] = useDeleteCouponMutation();


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

        setUpdateData({
            ...val,
            startDate: val.startDate?.split("T")[0],
            expiryDate: val.expiryDate?.split("T")[0]
        });
        console.log(val);


    }

    console.log(updatedata);



    const paginationModel = { pae: 0, pageSize: 5 };
    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'discount', headerName: 'Discount', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 260 },
        { field: 'expiryDate', headerName: 'Expiry Date', width: 260 },
        { field: 'userLimit', headerName: 'Limit', width: 260 },
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


        let Instructor_id = auth?.auth?.role === 'Instructor' ? auth?.auth?._id : null

        console.log(Instructor_id);

        if (Object.keys(updatedata).length > 0) {
            await updateData({
                ...val,
                _id: updatedata._id,
                startDate: val.startDate?.split("T")[0],
                expiryDate: val.expiryDate?.split("T")[0]
            })
            setUpdateData({});

        } else {
            await addData({
                ...val,
                startDate: val.startDate?.split("T")[0],
                expiryDate: val.expiryDate?.split("T")[0]
            })
        }




    }



    return (
        <>
            <h1>Coupon</h1>
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
                                discount: "",
                                startDate: "",
                                expiryDate: "",
                                userLimit: "",

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




                                <TextForm name='name' id='name' label='Name' />

                                <TextForm name='discount' id='discount' label='discount' />

                                <TextForm name='startDate' id='startDate' label='Start Date' type="date" />

                                <TextForm name='expiryDate' id='expiryDate' label='Expiry Date' type="date" />


                                <TextForm name='userLimit' id='userLimit' label='userLimit' />



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
                    rows={coupon?.data}
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

export default Coupon;