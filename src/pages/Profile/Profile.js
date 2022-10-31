import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Container } from "@mui/material";
import UiButton from "../../components/Button";

export const ProfileComponent = () => {
  const { user, logout } = useAuth0();

  return (
    <Container className="">
      <img src={user.picture} alt="Profile" className="" />

      <h2>{user.name}</h2>
      <p className="">{user.email}</p>
      <UiButton title="Log Out" onClick={logout} />
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <h2>Loading...</h2>,
});
