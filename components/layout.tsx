import React, { Component } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

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
              <Logo>AKSHY</Logo>
            </Box>
            <Box>
              <Stack direction="row" spacing={4}>
                <Typography>About</Typography>
                <Typography>Works</Typography>
                <Typography>
                  <MaterialUISwitch />
                </Typography>
              </Stack>
            </Box>
          </NavigationInner>
        </Navigation>
        {children}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FooterWrapper maxWidth={false}>
              <Typography
                sx={{ fontSize: "100px", opacity: ".3", fontWeight: "100" }}
              >
                AKSHY
              </Typography>
            </FooterWrapper>
          </Grid>
          <Grid item xs={6}>
            <FooterWrapper maxWidth={false}></FooterWrapper>
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
  zIndex: 20,
  backdropFilter: 'blur(7px)',
  boxShadow: '0 0 20px 0 #0000001a',
  background: 'linear-gradient(0deg, transparent, rgb(255 255 255 / 55%))'
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
});

const Logo = styled(Typography)({
  border: '1px solid rgb(0 0 0 / 41%)',
  padding: '2px 8px',
  fontSize: '22px',
  fontWeight: '100'
})

const Footer = styled("footer")({});
