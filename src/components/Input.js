import React from "react";
import { TextField } from "@mui/material";
const UiInput = ({ name, label, type, id, autoComplete, value, onChange }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      value={value}
      id={id}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};

export default UiInput;
