import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { QRCodeSVG } from "qrcode.react";
import { Box, Typography, Avatar } from "@mui/material";

import logo from "../../assets/logo.png";
import { styles } from "./style";
import Wrapper from "../../components/Wrapper";
import { setLoggedIn } from "../../features/userSlice";

const QR = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth0();
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    setTimeout(() => {
      if (timer <= 60 && timer !== 0) setTimer(timer - 1);
    }, 1000);
  }, [timer]);
  const onNext = () => {
    navigate("/success");
  };

  useEffect(() => {
    dispatch(setLoggedIn(user));
  }, [dispatch, user]);
  return (
    <Wrapper>
      {timer === 0 ? (
        <Navigate to="/success" />
      ) : (
        <Box component="div" sx={styles.container}>
          <Avatar src={logo} alt="logo" sx={styles.logo} onClick={onNext} />

          <Box component="div" sx={styles.qr}>
            <QRCodeSVG value="https://www.Flock.xyz" />
          </Box>
          <Typography component="p" sx={styles.timeoutText}>
            {timer}s
          </Typography>
          <Typography sx={styles.text}>
            Scan with the Flock.xyz mobile app
          </Typography>
        </Box>
      )}
    </Wrapper>
  );
};

QR.propTypes = {
  onNext: PropTypes.func,
};
export default QR;
