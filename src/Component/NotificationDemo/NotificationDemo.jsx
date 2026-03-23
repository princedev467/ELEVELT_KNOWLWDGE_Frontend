import { useSnackbar } from 'notistack';
import React from 'react';

function NotificationDemo(props) {

    const {enqueueSnackbar}=useSnackbar();

    const sucessNotification=()=>{
        enqueueSnackbar('user Created',{variant:'success'})
    }

    
const errorNotification=()=>{
        enqueueSnackbar('user error',{variant:'error'})
    }

const infoNotification=()=>{
        enqueueSnackbar('user info',{variant:'info'})
    }

const warningNotification=()=>{
        enqueueSnackbar('user warning',{variant:'warning'})
    }
    return (
        <div style={{margin:'100px'}}>
                <button onClick={sucessNotification}style={{margin:'10px',background:'#43a047',color:'white',border:'none',padding:'6px'}} >Success</button>
                <button onClick={infoNotification} style={{margin:'10px',background:'#2196f3',color:'white',border:'none',padding:'6px'}}>Info</button>
                <button onClick={errorNotification} style={{margin:'10px',background:'#d32f2f',color:'white',border:'none',padding:'6px'}}>Error</button>
                <button onClick={warningNotification} style={{margin:'10px',background:'#ff9800',color:'white',border:'none',padding:'6px'}}>Warning</button>
        </div>
    );
}

export default NotificationDemo;