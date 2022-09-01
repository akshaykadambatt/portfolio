import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { Grid, Snackbar, Stack, TextField } from '@mui/material';
import { Button } from "../components/elements";
import { VscArrowRight, VscGithubAlt } from "react-icons/vsc";
import useLocoScroll from "../components/useLocoScroll";
import { db, storage } from "../components/firebaseConfig";
import { getFirestore, collection, query, where, updateDoc, getDoc, doc, setDoc, addDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { useRef, useState } from 'react';

const Contact: NextPage = () => {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [content, setContent] = useState("")
  const [open, setOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  useLocoScroll();

  function handleSubmit(){
    formRef.current?.reportValidity()
    const upload = async() => {
      await addDoc(collection(db, 'enquiry'), {
        name: name,
        contact: contact,
        content: content
      })
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 4000);
      setName("")
      setContact("")
      setContent("")
    }
    if(name != "" && contact != "" && content != "" ) upload()
  }
  
  return (
    <>
     <div className="fixed_target" id="fixed-target" style={{
      position:"absolute",
      top:"-100vh", right:0, left:0
     }}></div>
      <Container data-scroll data-scroll-speed={3} sx={{paddingTop:"50px"}}>
        <Container id="yooyoy" maxWidth="md" component="form" ref={formRef}>
        <Typography data-aos="anim1" variant="h1" gutterBottom>Contact Me</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} data-aos="anim1" data-aos-delay="50">
              <TextField value={name} onChange={e => setName(e.target.value)} required type="text" fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} data-aos="anim1" data-aos-delay="100">
              <TextField value={contact} onChange={e => setContact(e.target.value)} required type="email" fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} data-aos="anim1" data-aos-delay="150">
              <TextField value={content} onChange={e => setContent(e.target.value)} multiline required type="text" rows={6} fullWidth label="Say something" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} data-aos="anim1" data-aos-delay="200">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" endIcon={<VscArrowRight />} aria-label="Send" onClick={handleSubmit}>Send</Button>
                <Button variant="outlined" size="large" aria-label="Reset the form">Reset</Button>

              </Stack>
            </Grid>
          </Grid>
        </Container>
        
        <Snackbar
        open={open}
        autoHideDuration={6000}
        message="I'll be back." className='yoo'
        data-scroll data-scroll-sticky data-scroll-target="#__next" data-scroll-offset="-10%"
        style={{zIndex:1}}
      />
      </Container>
      
      
      <Box sx={{ height: '300px' }} >
      </Box>
    </>
  )
}

export default Contact