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

    let filepath

    let filepaths
    if (field?.value) {
        filepaths = Array.from(field?.value);
    }
    console.log("filepath:",filepath);

    const ImageData = filepaths?.map((v) => {
        console.log(v);

        if(v?.url){
            return{ 
                url:v.url,
                type: v?.resource_type,
            
            }
        } else {
            return {
                url:URL.createObjectURL(v),
                type: v?.type,
                //  firstName : type.split("/")[0]
            }
        }
        // if (typeof v === 'string') {
        //     return (filepath = v)
        
        // } else if (typeof v === 'object' && v !== null) {
            
        //     return (filepath = URL.createObjectURL(v))
        // }
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
                        const files = Array.from(event.target.files|| []);
                        setValue(files);
                        event.target.value = null;

                    }
                    
                    }
                    multiple
                // onBlur={handleBlur}
                />
            </Button>


             {ImageData.map((v, i) => {
       
        if (v?.type==='image' ||  v?.type?.startsWith('image')) {
          return (
            <img
             
              src={v.url}
              width="50"
              height="50"
              alt="preview"
            />
          );
        }else if (v?.type==='video'|| v?.type?.startsWith('video')) {
          return (
            <video  width="80" height="50" controls autoPlay>
              <source src={v.url} />
            </video>
          );
        }else if (v?.type==='row' ||  v?.type?.startsWith('application')) {
          return (
            <a  href={v.url} target="_blank" rel="noreferrer">
              View PDF
            </a>
          );
        }

        return null;
      })}

            {
                <p style={{ color: 'red' }}>{meta.error && meta.touched ? meta.error : null}</p>
            }
           </>
    );
}

export default FileUpload;