import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useField } from 'formik';
import { IMAGE_URL } from '../../../utility/url';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function FileUpload(props) {
    const [field, meta, helper] = useField(props)

    const { setValue } = helper;

    let filepath = '';

    //  filepath = '/public/assets/images/courses/4by3/' + field.value;

    if (typeof field.value?.url === 'string') {
        filepath = field.value?.url;
        
    } else if (typeof  field.value?.url === 'object' && field.value !== null) {
        filepath = URL.createObjectURL(field.value)
                
    }

    
    // console.log(filepath);

    // console.log(field);

    
    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                {...props}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                        setValue(event.target.files[0])
                    }
                // onBlur={handleBlur}
                />
            </Button>

            <img src={filepath} alt="" width={'50px'} height={'50px'} />
            {
                <p style={{ color: 'red' }}>{meta.error && meta.touched ? meta.error : null}</p>
            }
        </>
    );
}

export default FileUpload;