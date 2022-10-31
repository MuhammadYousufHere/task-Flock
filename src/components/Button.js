import React from "react";
import Button from "@mui/material/Button";

const UiButton = ({
  title,
  type,
  bgcolor = "secondary.main",
  width,
  textShadow,
  onClick,
  restProps,
  minWidth = "220px",
  color = "secondary.btnText",
}) => {
  return (
    <Button
      type={type}
      fullWidth
      variant="contained"
      sx={{
        mt: 3,
        mb: 2,
        bgcolor,
        padding: "0.9rem",
        fontSize: "1rem",
        textTransform: "capitalize",
        width,
        minWidth,
        color,
        textShadow,
      }}
      onClick={onClick}
      {...restProps}
    >
      {title}
    </Button>
  );
};

export default UiButton;
