import React from 'react';
import { ReactComponent as ReactLogo } from '../../dao-logo.svg';
import Search from '../Search/Search';
import { Grid, Button } from '@material-ui/core';
import './Header.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const Header = () => {
  return (
    <Grid container item direction="row" spacing={5} id="header">
      <Grid item xs={3}>
        <ReactLogo style={{ padding: '20px 0 0 40px' }} />
      </Grid>
      <Grid item xs={7}>
        <Search />
      </Grid>
      <Grid item xs={2} style={{ width: '10px' }}>
        <Button
          startIcon={<AccountBalanceWalletIcon />}
          variant="contained"
          color="primary"
          className="connectWallet"
        >
          Connect Wallet
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
