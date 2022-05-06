import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const About: NextPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        About page
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  )
}

export default About