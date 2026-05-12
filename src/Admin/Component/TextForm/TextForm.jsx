import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useField } from "formik";

function TextForm({ type = "text", data = [], ...props }) {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      type={type}
      fullWidth
      margin="dense"
      variant="standard"
      select={type === "select"}   
       InputLabelProps={
        type === "date"
          ? { shrink: true }
          : undefined
      }
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ""}
    >
      {type === "select" &&
        data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
}

export default TextForm;