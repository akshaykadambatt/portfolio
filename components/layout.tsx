import React, { Component } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>AKSHAY K NAIR, Software Engineer</title>
          <meta
            name="description"
            content="Portfolio of Akshay K Nair, Software Engineer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation maxWidth={false}>
          <NavigationInner>
            <Box>
              <Typography>AKSHY</Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={4}>
                <Typography>About</Typography>
                <Typography>Works</Typography>
              </Stack>
            </Box>
          </NavigationInner>
        </Navigation>
        {children}
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FooterWrapper maxWidth={false}>
                    <Typography sx={{fontSize:'100px', opacity:'.3', fontWeight:'100'}}>AKSHY</Typography>
                </FooterWrapper>
            </Grid>
            <Grid item xs={6}>
                <FooterWrapper maxWidth={false}>
                    <Typography>About</Typography>
                </FooterWrapper>
            </Grid>
        </Grid>
      </>
    );
  }
}

export default Layout;

const Navigation = styled(Container)({
  height: "10vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "sticky",
  top: 0,
});

const NavigationInner = styled(Container)({
  width: "90%",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const FooterWrapper = styled(Container)({
    backgroundcolor: "#eee",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "sticky",
    top: 0,
})

const Footer = styled('footer')({
    
})