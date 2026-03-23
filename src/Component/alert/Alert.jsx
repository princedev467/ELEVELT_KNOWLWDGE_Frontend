import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../Redux/slice/alert.Slice';

function Alert(props) {

    const dispatch=useDispatch()
    const alert = useSelector(state => state.alert)
    console.log("alert:", alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text,{
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                     variant: alert.variant
                }


            )

            dispatch(resetAlert());
        }
    }, [alert.text]);
    return (
        <>

        </>
    );
}

export default Alert;