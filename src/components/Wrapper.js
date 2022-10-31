import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "../pages/Navigation/Navbar";

import { styles } from "../pages/style";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container
        component="section"
        maxWidth="xxl"
        style={styles.container}
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Container>
    </>
  );
};

Wrapper.propsTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
