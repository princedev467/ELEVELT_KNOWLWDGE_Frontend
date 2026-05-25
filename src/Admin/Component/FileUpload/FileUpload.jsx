import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useField } from 'formik';

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
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;

    // Always make it an array
    const filepaths = Array.from(field?.value || []);

    // Prepare preview data
    const ImageData = filepaths.map((v) => {
        if (v?.url) {
            // Existing file from API/database
            return {
                url: v.url,
                type: v.type,
            };
        }

        // Newly uploaded file
        return {
            url: URL.createObjectURL(v),
            type: v.type,
        };
    });

    return (
        <>
            <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload File

                <VisuallyHiddenInput
                    type="file"
                    multiple
                    onChange={(event) => {
                        const files = Array.from(event.target.files || []);

                        setValue(files);

                        // Reset input so same file can be selected again
                        event.target.value = null;
                    }}
                />
            </Button>

            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                    flexWrap: 'wrap',
                }}
            >
                {ImageData.map((v, i) => {
                    // IMAGE
                    if (v?.type?.startsWith('image')) {
                        return (
                            <img
                                key={i}
                                src={v.url}
                                alt="preview"
                                width="80"
                                height="50"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        );
                    }

                    // VIDEO
                    if (v?.type === 'video/mp4') {
                        return (
                            <video
                                key={i}
                                src={v.url}
                                width="120"
                                height="80"
                                controls
                                style={{
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        );
                    }

                    // PDF
                    if (v?.type === 'application/pdf') {
                        return (
                            <a
                                key={i}
                                href={v.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                }}
                            >
                                📄 Open PDF
                            </a>
                        );
                    }

                    // OTHER FILES
                    return (
                        <a
                            key={i}
                            href={v.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                textDecoration: 'none',
                            }}
                        >
                            Open File
                        </a>
                    );
                })}
            </div>

            {meta.error && meta.touched && (
                <p style={{ color: 'red', marginTop: '5px' }}>
                    {meta.error}
                </p>
            )}
        </>
    );
}

export default FileUpload;