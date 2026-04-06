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


function FileUpload({type,...props}) {
    const [field, meta, helper] = useField(props)

    const { setValue } = helper;

    let filepath

    if (field?.value) {
        filepath = Array.from(field?.value);
    }
    console.log("filepath:",filepath);

    const ImageData = filepath?.map((v) => {
        console.log(v);

        if (typeof v === 'string') {
            return (filepath = v)
        } else if (typeof v === 'object' && v !== null) {
            return (filepath = URL.createObjectURL(v))
        }
    })
    
    console.log("ImageData:", ImageData);


        
        console.log("filepath",filepath);

        // // console.log(field);
        

    
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
                    onChange={(event) =>{
                        const files = Array.from(event.target.files || []);
                        setValue(files);
                            event.target.value = null;

                    }
                    
                    }
                    multiple
                // onBlur={handleBlur}
                />
            </Button>


             {type==='image'?( ImageData?.map((v) => (
                    <img src={v} width={'50px'} height={'50px'} />
                ))):( ImageData?.map((v) => (
                    <video >
                         <source src={v} type="video/mp4" />
                    </video>
                )))
               
            }
            {
                <p style={{ color: 'red' }}>{meta.error && meta.touched ? meta.error : null}</p>
            }
           </>
    );
}

export default FileUpload;