import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "../components/elements";
import { styled } from "@mui/system";
import { VscArrowRight, VscGithubAlt } from "react-icons/vsc";
import { RiStackOverflowFill, RiLinkedinLine } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ItemBlock from "../components/ItemBlock";
import RecentBlock from "../components/RecentBlock";
import DesignElem, {BackDesign} from "../components/DesignElem"
import Head from 'next/head'
import AboutBlock from "../components/AboutBlock";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import fs from 'fs';
import matter from 'gray-matter';
import useLocoScroll from "../components/useLocoScroll";
import AnimatedBackground from "../components/AnimatedBackground";

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const works = files.filter((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    if(frontmatter.tags.includes('project') || frontmatter.tags.includes('work')) return true;
  }).map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {slug, frontmatter};
  });
  const posts = files.filter((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    if(frontmatter.tags.includes('post')) return true;
  }).map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {slug, frontmatter};
  });
  works.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);
  posts.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);
  
  return {
    props: {
      works, posts
    },
  };
}

const HeadBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  padding: "44vh 8vw 0vh 8vw",
  "@media (max-width: 400px)": { padding: "39vh 8vw 0vh 8vw" },
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  top: "-100px",
});

const Home: NextPage = ({ works, posts }:any) => {
  useLocoScroll();

  const useStyles = createUseStyles({
    box: {
      borderRadius: "10px",
      backdropFilter: "blur(15px)",
      cursor: "pointer",
      transition: "all 0.5s, box-shadow 0.2s 0s !important",
      textDecoration: "none !important"
    },
    box1: {
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 3
    },
    box2: {
      gridArea: "5/1/3/3",
      '@media (max-width: 600px)': {
        gridArea: "5/1/3/4",
      }
    },
    box3: {
      gridArea: "3/3/4/3",
      '@media (max-width: 600px)': {
        gridArea: "5/1/5/3",
      }
    },
    box4: {
      gridArea: "4/3/4/3",
      '@media (max-width: 600px)': {
        gridArea: "5/3/5/4",
      }
    },
    box5: {
      gridArea: "5/2/7/1",
      '@media (max-width: 600px)': {
        gridArea: "6/4/7/1",
      }
    },
    box6: {
      gridArea: "5/2/7/4",
      '@media (max-width: 600px)': {
        gridArea: "7/1/7/4",
      }
    },
    boxWithTag: {
      paddingBottom: "70px"
    },
    center: {
      display: "flex",
      justifyContent: "center"
    }
  });
  const classes = useStyles();
  return (
    <>
  <Head>
    <title>AKSHAY K NAIR, Software Engineer</title>
    <meta name="description" content="Portfolio of AKSHAY K NAIR, Software Engineer" />
    <meta property="og:site_name" content="AKSHY" />
    <meta
      property="og:title"
      content="AKSHAY K NAIR, Software Engineer | Home"
    />
    <meta property="og:url" content="https://akshaykn.vercel.app/" />
    <meta
      property="og:image"
      content="https://akshaykn.vercel.app/akshay_k_nair.webp"
    />
    <meta
      property="og:image:secure_url"
      content="https://akshaykn.vercel.app/akshay_k_nair.webp"
    />
  </Head>
  <HeadBox>
    <Box sx={{ position: "relative", zIndex: "1"}}>
      <Typography variant="h1" sx={{ mb: -1 }} data-scroll data-scroll-speed={2}>Akshay K Nair</Typography>
      <Typography variant="h2" sx={{ mb: 1 }} data-aos="anim1" data-scroll data-scroll-speed={1.7}>Software Engineer</Typography>
      <Typography gutterBottom data-aos="anim1" data-scroll data-scroll-speed={1}
        sx={{ fontWeight: 300, maxWidth: "800px", pb: 3 }} data-aos-delay="150" >
        Hi there! I&apos;m Akshay. I&apos;m a software engineer with a strong CS
        background and a great interest in JavaScript, and the web. I&apos;m
        learning new things everyday and creating stuff I like along the way.
        This is my personal portfolio and an archive of a few of my works.
      </Typography>
      <Box data-aos="anim1" data-aos-delay="250" data-scroll data-scroll-speed={0.1}>
        <Stack direction="row" spacing={2} sx={{pb:3}}>
          <a href="/Akshay-K-Nair-Resume.pdf" download >
            <Button endIcon={<VscArrowRight />} size="large" variant="outlined" aria-label="Download my resume"> Resume </Button>
          </a>
          <Link href="/work" >
            <Button endIcon={<VscArrowRight />} size="large" variant="outlined" aria-label="Goto works page"> Works </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
    <div id="backWrap">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </HeadBox>
  <Box sx={{ transform: "translateZ(0)", overflow: "visible" }} >
    <Container data-aos="anim1" sx={{ overflow: "visible", marginBottom:20, marginTop:10 }} >
      <Heading variant="h3" gutterBottom data-scroll data-scroll-speed={2} className="loco-hidden" data-scroll-class="loco-reveal">Stuff I know</Heading>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12} md={8} >
          <Heading variant="h4" mb={0} data-scroll data-scroll-speed={2} data-scroll-delay="0.1">
            I learn and work everyday to better myself as a developer and a fellow contributer of the digital world. 
          </Heading>
        </Grid>
        <Grid item xs={12} md={4} >
          <Heading variant="h6" mt={0} data-scroll data-scroll-speed={3} data-scroll-delay="0.07" >
            Started off with HTML and CSS. Now I focus on JavaScript, Laravel and design. 
          </Heading>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12} md={4} className="loco-hidden" data-scroll data-scroll-speed="4"  data-scroll-class="loco-reveal" data-scroll-delay="0.1">
          <Box sx={{background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
              height: "100%",p: 3}}>
            <Typography variant="h4" gutterBottom>Languages</Typography>
            <Typography>JavaScript, TypeScript, NodeJS</Typography>
            <Typography>PHP</Typography>
            <Typography>HTML5, CSS3</Typography>
            <Typography>SQL</Typography>
            <Typography>Python</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="loco-hidden" data-scroll-delay="0.072" data-scroll data-scroll-repeat data-scroll-class="loco-reveal" data-scroll-speed="4"  >
          <Box sx={{background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
              height: "100%",p: 3}}>
            <Typography variant="h4" gutterBottom>Frameworks</Typography>
            <Typography>React, Next JS</Typography>
            <Typography>Laravel</Typography>
            <Typography>WordPress</Typography>
            <Typography>ElectronJS</Typography>
            <Typography>Redux</Typography>
            <Typography>Styled Components, Tailwind CSS, Bootstrap</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="loco-hidden" data-scroll data-scroll-delay="0.06" data-scroll-repeat data-scroll-class="loco-reveal" data-scroll-speed="4" >
          <Box sx={{background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
              height: "100%",p: 3}}>
            <Typography variant="h4" gutterBottom>Tools</Typography>
            <Typography>Git, GitHub, BitBucket, GitLab</Typography>
            <Typography>Trello</Typography>
            <Typography>MySQL, Eloquent ORM</Typography>
            <Typography>Firebase, Vercel, Heroku</Typography>
            <Typography>Apache</Typography>
            <Typography>NPM, Composer, Yarn</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  <BackDesign text="Stuff I Know" />
  <Container sx={{ overflow: "visible", marginBottom:20, marginTop:10 }}  >
    <Heading variant="h3" gutterBottom data-aos="anim1" data-scroll data-scroll-speed={2}>About Me</Heading>
    <AboutBlock />
  </Container>
  <BlockFullWidth >
    <Container>
      <Heading variant="h3" data-aos="anim1">My Recent Works</Heading>
    </Container>
    <ItemBlock />
  </BlockFullWidth>
  <BlockFullWidth >
    <Container>
      <Heading variant="h3" data-aos="anim1">Blog</Heading>
    </Container>
    <AlignCenter>
      <BoxWrap>
        <Link href="/work">
          <RecentBox style={{overflow:"hidden"}} data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box1 boxWithTag`}>
            <TagBox className="left"><Typography>#work</Typography></TagBox>
            <TagBox className="right"><BsArrowUpRight /></TagBox>
            <BoxInsideWrap>
            <AnimatedBackground filter={"hue-rotate(209deg)"} top={"0px"} opacity={"0.65"}/>
              <Typography variant="h4">Works</Typography>
              <Typography>
                The timeline of all the projects I&apos;ve done and the personal
                projects I&apos;ve created
              </Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
        <Link href={`/post/${posts[0].slug}`}>
          <RecentBox data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box2 boxWithTag`}>
            <TagBox className="left"><Typography>#blog</Typography></TagBox>
            <TagBox className="right"><BsArrowUpRight /></TagBox>
            <BoxInsideWrap>
              <Typography variant="h4">{posts[0].frontmatter.title}</Typography>
              <Typography>{posts[0].frontmatter.metaDesc}</Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
        <Link href={`/post/${works[0].slug}`}>
          <RecentBox data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box3`}>
            <BoxInsideWrap>
              <Typography>{works[0].frontmatter.title}</Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
        <Link href="/about">
          <RecentBox data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box4`}>
            <BoxInsideWrap>
              <Typography>About Me.</Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
        <Link href={`/post/${posts[1].slug}`}>
          <RecentBox data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box5 boxWithTag`}>
            <TagBox className="left"><Typography>#blog</Typography></TagBox>
            <TagBox className="right"><BsArrowUpRight /></TagBox>
            <BoxInsideWrap>
              <Typography>{posts[1].frontmatter.title}</Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
        <Link href="/blog">
          <RecentBox data-aos="anim1" data-aos-delay="250" className={`reveal shadow-box box6 boxWithTag `}>
            <TagBox className="left"><Typography>#blog</Typography></TagBox>
            <TagBox className="right"><BsArrowUpRight /></TagBox>
            <BoxInsideWrap>
              <Typography variant="h4">Blog</Typography>
              <Typography>
                The blog has a log of all things I&apos;ve posted.
              </Typography>
            </BoxInsideWrap>
          </RecentBox>
        </Link>
      </BoxWrap>
    </AlignCenter>
  </BlockFullWidth>
  <BlockFullWidth >
    <DesignElem text={"Simplicity from Complexity"} />
  </BlockFullWidth>
  <BottomLoadingThing className="bottom-loading-thing"> {/* To-do */}
    <Box className="loading-bar-thing">
      <Box className="inside-loading-bar-thing"></Box>
    </Box>
    <Typography style={{fontSize:"12px"}}>
      Loading complete.
    </Typography>
  </BottomLoadingThing>
</>
  );
};

export default Home;

const Block = styled(Container)({
  marginBottom:60,
  marginTop:100,
  overflow:'hidden'
})
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
const AlignCenter = styled(Box)({
  display: "flex",
  justifyContent: "center"
})
const TagBox = styled(Box)({
  position: "absolute",
  fontSize: "13px",
  fontWeight: "500",
  display: "inline-block",
  padding: "3px 10px",
  borderRadius: "100px",
  transition: "all 0.25s",
  "&.left:hover": {
    background: "#63636336",
    padding: "3px 12px",
    border: "1px solid #0000004d"
  },
  "&.left": {
    bottom: "15px",
    background: "#cdcdcd36",
    border: "1px solid #8f8f8f4d",
    left: "20px",
  },
  "&.right": {
    bottom: "10px",
    right: "25px",
    fontSize: "20px"
  }
})
const BoxInsideWrap = styled(Box)({
  display: "-webkit-box",
  WebkitLineClamp: "6",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textAlign: "left",
  padding: "30px 20px"
})
const BoxWrap = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "auto",
  gridColumnGap: "23px",
  gridRowGap: "26px",
  padding: "31px",
  boxSizing: "border-box",
  maxWidth: "900px"
})
const RecentBox = styled(Box)({
  borderRadius: "10px",
  backdropFilter: "blur(15px)",
  cursor: "pointer",
  transition: "all 0.5s, box-shadow 0.2s 0s !important",
  textDecoration: "none !important",
  "&.box1": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridColumnStart: 1,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 3
  },
  "&.box2": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridArea: "5/1/3/3",
    '@media (max-width: 600px)': {
      gridArea: "5/1/3/4",
    }
  },
  "&.box3": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridArea: "3/3/4/3",
    '@media (max-width: 600px)': {
      gridArea: "5/1/5/3",
    }
  },
  "&.box4": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridArea: "4/3/4/3",
    '@media (max-width: 600px)': {
      gridArea: "5/3/5/4",
    }
  },
  "&.box5": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridArea: "5/2/7/1",
    '@media (max-width: 600px)': {
      gridArea: "6/4/7/1",
    }
  },
  "&.box6": {
    transition: "all 0.5s, box-shadow 0.2s 0s !important",
    gridArea: "5/2/7/4",
    '@media (max-width: 600px)': {
      gridArea: "7/1/7/4",
    }
  },
  "&.boxWithTag": {
    paddingBottom: "70px"
  },
  "video":{
    display:"block"
  }
})
const BottomLoadingThing = styled(Box)(({ theme }) => (`
  position: fixed;
  bottom: 14px;
  left: 13px;
  background: ${theme.palette.background.default};
  padding: 10px;
  border-radius: 12px;
  min-width: 212px;
  transition: all .3s;
`))