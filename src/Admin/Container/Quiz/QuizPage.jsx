import React, { useState } from "react";
import { Button, TextField, Radio, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TextForm from "../../Component/TextForm/TextForm";
import { Form, Formik } from "formik";
import { useAddquizContentMutation, useGetquizContentQuery } from "../../../Redux/Api/QuizContent.Api";
import { useParams } from "react-router-dom";

export default function QuizContent() {
  const { id } = useParams()

  const [questions, setQuestions] = useState([
    { question: "", options: [""], Answer: "" }
  ]);
  const [updatedata, setUpdateData] = useState({});

 const {data} = useGetquizContentQuery()
  const [addData] = useAddquizContentMutation()


  console.log(data);
  
  
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [""], Answer: "" }
    ]);
  };


  const updateQuestion = (i, value) => {
    const updated = [...questions];
    updated[i].question = value;
    setQuestions(updated);
  };


  const deleteQuestion = (i) => {
    if (questions.length === 1) return;
    const updated = [...questions];
    updated.splice(i, 1);
    setQuestions(updated);
  };




  const addOption = (i) => {
    const updated = [...questions];
    updated[i].options.push("");
    setQuestions(updated);
  };

  const updateOption = (i, j, value) => {
    const updated = [...questions];
    updated[i].options[j] = value;
    setQuestions(updated);
  };


  const removeOption = (i, j) => {
    const updated = [...questions];
    updated[i].options.splice(j, 1);

    if (updated[i].correctIndex === j) {
      updated[i].correctIndex = null;
    }

    setQuestions(updated);
  };


  //  const addAnswer = () => {
  //     setQuestions([
  //       ...questions,
  //       { question: "", options: [""], Answer: "" }
  //     ]);
  //   };

  //update Answer
  const updateAnswer = (i, value) => {
    const updated = [...questions];
    updated[i].Answer = value;
    setQuestions(updated);
  };

  // //delete Question
  // const deleteAnswer = (i) => {
  //   if (questions.length === 1) return;
  //   const updated = [...questions];
  //   updated.splice(i, 1);
  //   setQuestions(updated);
  // };





  const handlesubmit = async (val) => {
    console.log("submit", val);
    console.log('updatedata:', updatedata);


    if (Object.keys(updatedata).length > 0) {
      await updateData({ _id: updatedata._id, course: courseid, ...val })
      setUpdateData({});

    } else {
      await addData({ questions:val, quiz: id });

    }




  }
  let filterData= data?.data?.filter((v)=>v.quiz=== id)

  // let finalData= data.data ? filterData : questions
  return (
    <>
      <React.Fragment>
        <Formik
          initialValues={Object.keys(updatedata).length > 0 ? updatedata : {
          
              
                question: "",
                options: [""],
                Answer: ""
              
           


          }}
          enableReinitialize
          onSubmit={(values) => {
            console.log(questions);
            handlesubmit(questions)

          }}
        >

          <Form id="subscription-form">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 > Create Quiz</h3>
              <Button
                variant="contained"
                type="submit" form="subscription-form"

              >
                Save Quiz
              </Button>
            </div>
            <div style={{ width: '43%' }}>
              {questions.map((q, i) => (

                <div
                  key={i}
                  style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    marginBottom: "20px",
                    borderRadius: "10px"
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <p style={{ marginTop: '34px' }}><strong>Q{i + 1}</strong></p>
                    <TextForm
                      label="Question"
                      value={q.question}
                      name="Question"
                      onChange={(e) => updateQuestion(i, e.target.value)}
                    />

                    <IconButton onClick={() => deleteQuestion(i)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>

                  {/* Options */}
                  {q.options.map((opt, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px"
                      }}
                    >

                      <p style={{ marginTop: '30px', paddingLeft: '20px', marginRight: "8px" }}><strong>{String.fromCharCode(65 + j)}.</strong></p>
                      <TextForm
                        value={opt}
                        onChange={(e) =>
                          updateOption(i, j, e.target.value)
                        }
                        name="options"
                        placeholder={`Option ${j + 1}`}
                        style={{ width: '50%' }}
                      />

                      <IconButton onClick={() => removeOption(i, j)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}

                  <Button
                    onClick={() => addOption(i)}
                    style={{ marginTop: "10px", marginLeft: '30px' }}
                  >
                    Add Option
                  </Button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <TextForm
                      name="Answer"
                      label="Answer"
                      value={q.Answer}
                      onChange={(e) =>
                        updateAnswer(i, e.target.value)
                      }

                      style={{ padding: 0, width: "90%" }}
                    />
                  </div>
                </div>
              ))}

              {/* Add Question */}
              <Button
                variant="contained"
                onClick={addQuestion}
                fullWidth
              >
                Add Question
              </Button>
            </div>
          </Form>

        </Formik>
      </React.Fragment>
    </>
  );
}