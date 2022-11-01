import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import { styles } from './style';
import logo from '../../assets/logo.png';
import UiButton from '../../components/Button';
import Loader from '../Loader/Loader';
import Wrapper from '../../components/Wrapper';
import { useAuth0 } from '@auth0/auth0-react';
const Success = ({ onConnectAnotherWallet }) => {
  const { logout } = useAuth0();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      logout();
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Box
        component='div'
        sx={styles.container}
      >
        <Avatar
          src={logo}
          alt='logo'
          sx={styles.logo}
        />

        <Typography sx={styles.text}>
          wallet(s) connected. login to Flock mobile app
        </Typography>
        <UiButton
          title='Connect another wallet'
          width={'30%'}
          textShadow='2px 1px 3px black'
          onClick={onConnectAnotherWallet}
        />

        <Typography sx={styles.hashText}>ccs-ascxx-...Exvs--</Typography>
      </Box>
    </Wrapper>
  );
};

export default Success;
