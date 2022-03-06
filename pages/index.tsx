import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "../components/elements";
import { styled } from "@mui/system";
import { VscArrowRight, VscGithubAlt } from 'react-icons/vsc';
import { RiStackOverflowFill, RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import ItemBlock from '../components/ItemBlock'
import RecentBlock from '../components/RecentBlock'

const HeadBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  padding: "45vh 8vw 20vh 8vw",
  "@media (max-width: 400px)": { padding: "39vh 8vw 20vh 8vw", },
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  marginBottom: "10px",
  top: "-100px"
})

const Home: NextPage = () => {
  return (
    <>
      <HeadBox>
        <Box>
          <Typography variant="h1" sx={{ mb: 0 }}>
            Akshay K Nair
          </Typography>
          <Typography variant="h2" sx={{ mb: 2 }} data-aos="anim1">
            Software Engineer
          </Typography>
          <Typography gutterBottom data-aos="anim1" sx={{ fontWeight: 300, maxWidth: "800px" }} data-aos-delay="150">
            Hi there! My name is Akshay. I&apos;m a software engineer from India and I
            love the web. I&apos;m learning new things everyday and creating things I
            like along the way. This is my personal portfolio and an archive of
            my works.
          </Typography>
          <Button endIcon={<VscArrowRight/>} size="large" variant="outlined" data-aos="anim1" data-aos-delay="250">
            Works
          </Button>
        </Box>
        <div id="backWrap"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </HeadBox>
      <Container data-aos="anim1" sx={{my:10}}>
        <Box sx={{ bgcolor: "#cfe8fc", my:10, display:'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column' }}>
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="100">Simplicity from Complexity</Typography>  
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="200">Simplicity from Complexity</Typography>  
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="300">Simplicity from Complexity</Typography>  
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="400">Simplicity from Complexity</Typography> 
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="500">Simplicity from Complexity</Typography> 
          <Typography sx={{fontSize:'max(6vw, 25px) !important', fontWeight: 100}} textAlign={'center'} data-aos="anim1" data-aos-delay="600">Simplicity from Complexity</Typography> 
        </Box>  
      </Container>
      <Container  data-aos="anim1" sx={{my:15}}>
        <Typography variant='h3' gutterBottom>Stuff I know</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="100">
            <Box sx={{ background:'linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)', height:"100%", p:3, borderRadius:2}}>
            <Typography variant='h4' gutterBottom>Languages</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>JavaScript</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>TypeScript</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>PHP</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>HTML5</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>CSS3</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>SQL</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Python</Typography>
            </Box>
            
          </Grid>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="300">
          <Box sx={{ background:'linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)', height:"100%", p:3, borderRadius:2}}>
            <Typography variant='h4' gutterBottom>Frameworks</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>React</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Next JS</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Laravel</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>WordPress</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>ElectronJS</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Bootstrap</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Styled Components</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Redux</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Tailwind CSS</Typography>
              </Box>
          </Grid>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="600">
          <Box sx={{ background:'linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)', height:"100%", p:3, borderRadius:2}}>
            <Typography variant='h4' gutterBottom>Tools</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Git</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>MySQL</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Firebase</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Apache</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>Composer</Typography>
              <Typography sx={{fontSize:20, fontWeight:300}}>NPM</Typography>
              </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Typography variant='h3' gutterBottom>About Me</Typography>
        <Grid container>
          <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: '200px', height:'200px' }}
          />  
          </Grid>  
          <Grid item xs={12} md={8} >
            <Typography variant='h4' gutterBottom>Akshay K Nair</Typography>
            <Typography gutterBottom data-aos="anim1" sx={{ fontWeight: 300, maxWidth: "800px" }} data-aos-delay="150">
            Hi there! My name is Akshay. I&apos;m a software engineer from India and I
            love the web. I&apos;m learning new things everyday and creating things I
            like along the way. This is my personal portfolio and an archive of
            my works.
          </Typography>
          <Stack direction="row" spacing={2} my={3}>
          <Button data-aos="anim1" data-aos-delay="100" size="large" variant="outlined">
            <RiStackOverflowFill fontSize='24px' />
          </Button>
          <Button data-aos="anim1" data-aos-delay="200" size="large" variant="outlined">
            <RiLinkedinLine fontSize='24px' />
          </Button>
          <Button data-aos="anim1" data-aos-delay="300" size="large" variant="outlined">
            <VscGithubAlt fontSize='24px' />
          </Button>
          <Button data-aos="anim1" data-aos-delay="400" size="large" variant="outlined">
            <AiOutlineWhatsApp fontSize='24px' />
          </Button>
          </Stack>
          <Button endIcon={<VscArrowRight/>} size="large" variant="outlined" data-aos="anim1" data-aos-delay="250">
            Works
          </Button>
          </Grid>  
        </Grid>
      </Container>
      <Container sx={{pt:10, pb:4}}>
      <Typography variant='h3'>About Me</Typography>
      </Container>
      <ItemBlock />
      <RecentBlock />
    </>
  );
};

export default Home;
