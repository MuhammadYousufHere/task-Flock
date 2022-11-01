import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader/Loader";
import logo from "../../assets/logo.png";
import UiButton from "../../components/Button";
import { styles } from "./style";
import Wrapper from "../../components/Wrapper";

const Connected = ({}) => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 2000);
  }, []);

  const connectAnotherWallethandler = () => {
    navigate("/connected");
  };
  if (loading) return <Loader />;
  return (
    <Wrapper>
      <Box component="div" sx={styles.container}>
        <Avatar src={logo} alt="logo" sx={styles.logo} />
        <Typography sx={styles.text}>
          wallet(s) already connected to an account.
        </Typography>

        <UiButton
          title="Connect this account instead"
          width={"30%"}
          minWidth="270px"
          onClick={connectAnotherWallethandler}
        />
      </Box>
    </Wrapper>
  );
};

export default Connected;
