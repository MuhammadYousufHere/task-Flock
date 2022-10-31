import React from "react";
import { Box, Button } from "@mui/material";

const styles = {
  width: "100%",
  outline: "1px solid #D2D2CF",
  display: "flex",
  gap: "0.5rem",
  padding: "0.9rem 0.8rem",
  borderRadius: "4px",
  justifyContent: "flex-start",
  color: "#000",
  textTransform: "capitalize",
  fontSize: "1rem",
};
const Option = ({ desc, src, onClick }) => {
  return (
    <Button onClick={onClick} component="div" sx={styles}>
      <img src={src} style={{ width: "20px" }} />
      {desc}
    </Button>
  );
};

export default Option;
