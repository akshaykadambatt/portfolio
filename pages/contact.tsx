import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Contact: NextPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        Contact page
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: 100 }}
        data-aos="anim1"
      >sdafsdf
      </Box>
    </>
  )
}

export default Contact