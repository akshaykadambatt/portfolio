import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { Grid, Stack, TextField } from '@mui/material';
import { Button } from "../components/elements";
import { VscArrowRight, VscGithubAlt } from "react-icons/vsc";

const Contact: NextPage = () => {
  return (
    <>
      <Container sx={{paddingTop:"50px"}}>
        <Container maxWidth="md">
        <Typography data-aos="anim1" variant="h1" gutterBottom>Contact Me</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} data-aos="anim1" data-aos-delay="50">
              <TextField required type="text" fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={6} data-aos="anim1" data-aos-delay="100">
              <TextField required type="email" fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} data-aos="anim1" data-aos-delay="150">
              <TextField multiline required type="text" rows={6} fullWidth label="Say something" variant="outlined" />
            </Grid>
            <Grid item xs={6} data-aos="anim1" data-aos-delay="200">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" endIcon={<VscArrowRight />}>Send</Button>
                <Button variant="outlined" size="large">Reset</Button>

              </Stack>
            </Grid>
          </Grid>
        </Container>
        
        
      </Container>
      <Box sx={{ height: '100px' }} />
    </>
  )
}

export default Contact