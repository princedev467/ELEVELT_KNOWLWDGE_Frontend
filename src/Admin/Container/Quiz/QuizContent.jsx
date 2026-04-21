import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import TextForm from "../../Component/TextForm/TextForm";

import {
  useAddquizContentMutation,
  useDeletequizContentMutation,
  useGetquizContentQuery,
  useUpdatequizContentMutation,
} from "../../../Redux/Api/QuizContent.Api";

function QuizContent() {
  const { id } = useParams();

  const [updatedata, setUpdateData] = useState({});
  const [loading, setLoading] = useState(false);

  const { data } = useGetquizContentQuery();

  const [addData] = useAddquizContentMutation();
  const [updateData] = useUpdatequizContentMutation();
  const [deleteData] = useDeletequizContentMutation();

  
  const finalData =
    data?.data?.filter((v) => v.quiz?.toString() === id) ;


  const handleDelete = async (id) => {
    await deleteData(id);
  };

  console.log(finalData?.length);
  
  const handleEdit = (val) => {
    setUpdateData({
      _id: val._id,
      question: val.question,
      option1: val.options?.[0] || "",
      option2: val.options?.[1] || "",
      option3: val.options?.[2] || "",
      option4: val.options?.[3] || "",
      Answer: val.Answer,
    });
  };


  const handleSubmit = async (values, resetForm) => {
    if (loading) return;
    setLoading(true);

    const payload = {
      quiz: id,
      question: values.question,
      options: [
        values.option1,
        values.option2,
        values.option3,
        values.option4,
      ],
      Answer: values.Answer,
    };

    try {
      if (updatedata._id) {
        await updateData({ _id: updatedata._id, ...payload });
        setUpdateData({});
      } else {
        await addData(payload);
      }

      resetForm();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const columns = [
    { field: "question", headerName: "Question",width: 300 },
     {
    field: "options",
    headerName: "Options",
    width: 500,
    renderCell: (params) => {
      const options = params.row.options 
   
      return (
        <div style={{ display:'flex'}}>
          {options.map((opt, i) => (
            <div style={{marginRight:'25px' }}>
              <strong>{String.fromCharCode(65 + i)}.</strong>{" "}
              <span>
                {opt}
              </span>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    field: "Answer", headerName: "Answer",width: 100
  },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Stack direction="row">
          <IconButton onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton onClick={() => handleEdit(params.row)}>
            <EditIcon color="warning" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center" }}>Quiz Questions</h3>

    
      <Formik
        enableReinitialize
        initialValues={
          updatedata._id
            ? updatedata
            : {
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                Answer: "",
              }
        }
        onSubmit={(values, { resetForm }) =>
          handleSubmit(values, resetForm)
        }
      >
        {() => (
          <Form
            style={{
              width: "40%",
              margin: "20px auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <TextForm name="question" label="Question" />

            <TextForm name="option1" label="Option 1" />
            <TextForm name="option2" label="Option 2" />
            <TextForm name="option3" label="Option 3" />
            <TextForm name="option4" label="Option 4" />

            <TextForm name="Answer" label="Answer" />

            <Stack mt={2}>
              <Button type="submit" variant="contained" disabled={loading}>
                Submit
                {/* {loading ? "Saving..." : updatedata._id ? "Update" : "Save"} */}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>

    
      <div style={{ marginTop: "30px" }}>
        <h3>Questions List</h3>

        <DataGrid
          rows={finalData}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          getRowId={(row) => row._id}
          autoHeight
        />
      </div>
    </div>
  );
}

export default QuizContent;