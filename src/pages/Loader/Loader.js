import { Box, Typography, Avatar } from "@mui/material";

import logo from "../../assets/logo.png";
import Spinner from "../../components/Spinner";
import LoaderGrad from "../../components/SpinnerGrad";
import Wrapper from "../../components/Wrapper";
import { styles } from "./style";

const Loader = () => {
  return (
    <Wrapper>
      <Box component="div" sx={styles.container}>
        <Avatar src={logo} alt="logo" sx={styles.logo} />
        <Box component="div">
          <LoaderGrad />
        </Box>

        <Typography sx={styles.text}>Connectiong to wallet</Typography>
      </Box>
    </Wrapper>
  );
};

export default Loader;
