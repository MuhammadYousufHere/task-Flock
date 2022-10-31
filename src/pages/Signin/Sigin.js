import { useEffect, useState } from "react";

import {
  // Box,
  // Typography,
  // CssBaseline,
  Container,
  // Link,
  // Grid,
  // Avatar,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import { styles } from "./SiginStyle";
// import UiInput from "../../components/Input";
// import UiButton from "../../components/Button";
// import Form from "../../components/Form";
// import Option from "../../components/Option";

// // images
// import google from "../../assets/google.png";
// import twitter from "../../assets/twitter.png";
// import logo from "../../assets/logo.png";

export default function SignIn() {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const { email, password } = userData;
  // const onChangeHandler = (e) => {
  //   setUserData({
  //     ...userData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  // };

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={styles.container}
      style={styles.containerStyles}
    >
      {/* <Box component="div" sx={styles.containerBody}>
        <CssBaseline />
        <Box sx={styles.flexBox}>
          <Avatar sx={styles.logo} src={logo}></Avatar>
          <Typography component="h1" variant="h5" sx={{ m: 1, mt: 1 }}>
            Welcome
          </Typography>
          <Typography component="p" sx={{ maxWidth: "90%", mt: 1 }}>
            Log in to dev-32jdfjw5j34gf353 to continue to Flock Authentication
          </Typography>
          <Form onSubmit={handleSubmit}>
            <UiInput
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={onChangeHandler}
            />
            <UiInput
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={onChangeHandler}
            />

            <Grid container>
              <Grid item xs sx={styles.linkBox}>
                <Link href="#" variant="body2" sx={styles.link}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <UiButton title="Continue" type="submit" onClick={login} />
            <Grid container>
              <Grid item sx={styles.text}>
                <Typography component="p">Don't have an account?</Typography>
                <Link href="#" variant="body2" sx={styles.link}>
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Form>

          <Box component="div" sx={styles.optionBar}>
            <Box component="div" sx={styles.bar}></Box>
            <Box component="div">OR</Box>
            <Box component="div" sx={styles.bar}></Box>
          </Box>
          <Box component="div" sx={styles.optionContainer}>
            <Option src={google} desc="Continue with Google" />
            <Option src={twitter} desc="Continue with Twitter" />
          </Box>
        </Box>
      </Box> */}
    </Container>
  );
}
