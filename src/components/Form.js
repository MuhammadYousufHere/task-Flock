import { Box } from "@mui/system";
import React from "react";

const Form = ({ onSubmit, children }) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      {children}
    </Box>
  );
};

export default Form;
