import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemBlock from "../components/ItemBlock";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const Work: NextPage = () => {
  return (
    <>
    <BlockFullWidth>
      <Container >
        <Heading variant="h3" data-aos="anim1">My Recent Works</Heading>
      </Container>
      <ItemBlock /></BlockFullWidth>
      <Container maxWidth="sm">
        Work page
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: 100 }}
        data-aos="anim1"
      >sdafsdf
      </Box>
    </>
  )
}

export default Work

const BlockFullWidth = styled(Box)({
  marginBottom:160,
  marginTop:100,
  transform: 'translateZ(0)',
  overflow:'hidden'
})

const Heading = styled(Typography)({
  paddingInline:50,
  marginBottom:30
})