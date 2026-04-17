import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Button, Stack, IconButton } from '@mui/material';
import TextForm from '../../Component/TextForm/TextForm';
import { useAddquizContentMutation, useDeletequizContentMutation, useGetquizContentQuery, useUpdatequizContentMutation } from '../../../Redux/Api/QuizContent.Api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function QuizPage() {
    const { id } = useParams();
    
     const [updatedata, setUpdateData] = useState({});

    const { data } = useGetquizContentQuery();

    const [addData] = useAddquizContentMutation();
    const [updateData] = useUpdatequizContentMutation();
    const [deleteData] = useDeletequizContentMutation();

  const handledelete = async (id) => {
        console.log(id);
        deleteData(id);
    }


    const handleedit = (val) => {

        console.log(val);
        
        setUpdateData(val);
    }

    const handlesubmit = async (values) => {

         console.log('updatedata:', updatedata);


        if (Object.keys(updatedata).length > 0) {
            await updateData({ _id: updatedata._id,quiz: id, question: values.question,
                            options: [
                            values.option1,
                            values.option2,
                            values.option3,
                            values.option4
                            ],
                            correctAnswer: values.correctAnswer
                         })
            setUpdateData({});

        } else {
              // addData
             await addData({quiz: id,question: values.question,
                            options: [
                            values.option1,
                            values.option2,
                            values.option3,
                            values.option4
                            ],
                            correctAnswer: values.correctAnswer
                            });
    }
    };

let finalQuestionContentData=data?.data?.filter((v)=>v.quiz=== id)
    //     try {
    //         await deleteData(qid);
    //         refetch();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const handleUpdate = async (item) => {
    //     const updatedQuestion = prompt("Enter new question", item.question);

    //     if (!updatedQuestion) return;

    //     try {
    //         await updateData({
    //             id: item._id,
    //             question: updatedQuestion,
    //             options: item.options,
    //             correctAnswer: item.correctAnswer
    //         });


    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div style={{ padding: '20px' }}>

            <h2>Add Questions</h2>

            {/* FORM */}
            <Formik
                 initialValues={Object.keys(updatedata).length > 0 ? updatedata :{
                    question: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    correctAnswer: ''
                }}
                enableReinitialize
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    handlesubmit(values)

                    resetForm();
                }}
            >
                <Form>
                    <TextForm name="question" label="Question" />

                    <TextForm name="option1" label="Option 1"  />
                    <TextForm name="option2" label="Option 2"  />
                    <TextForm name="option3" label="Option 3"  />
                    <TextForm name="option4" label="Option 4"  />

                    <TextForm name="correctAnswer" label="Correct Answer"  />

                    <Stack direction="row" spacing={2} mt={2}>
                        <Button type="submit" variant="contained">
                            Save Question
                        </Button>
                    </Stack>
                </Form>
            </Formik>

           
            <div style={{ marginTop: '30px' }}>
                <h3>Questions List</h3>

                {finalQuestionContentData?.map((q, index) => (
                    <div
                        key={q._id}
                        style={{
                            marginBottom: '15px',
                            padding: '10px',
                            border: '1px solid #ccc'
                        }}
                    >
                        <p><strong>Q{index + 1}:</strong> {q.question}</p>

                        <ul>
                            {q.options?.map((v, i) => (
                                <p key={i}>
                                    {String.fromCharCode(65 + i)}. {v}
                                </p>
                            ))}
                        </ul>

                        <p><strong>Answer:</strong> {q.correctAnswer}</p>

                        <Stack direction="row" spacing={2} mt={1}>
                            <IconButton onClick={() => handleedit(q)} >
                                <EditIcon style={{ color: 'orange' }} />

                            </IconButton>

                            <IconButton onClick={() => handledelete(q._id)}>
                                <DeleteIcon style={{ color: 'red' }} />
                            </IconButton>
                        </Stack>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default QuizPage;