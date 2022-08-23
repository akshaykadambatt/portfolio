import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemBlock from "../components/ItemBlock";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import useLocoScroll from "../components/useLocoScroll";
import AnimatedBackground from '../components/AnimatedBackground';

const heights = ['Short', 'Tall', 'Taller', 'Tallest']
export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const projectSource = files.filter((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    if(frontmatter.tags.includes('project')) return true;
  }).map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {slug, frontmatter};
  });
  projectSource.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);

  const workSource = files.filter((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    if(frontmatter.tags.includes('work')) return true;
  }).map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {slug, frontmatter};
  });
  workSource.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);

  return {
    props: { projectSource, workSource }
  };
}
const Work: NextPage = ({ projectSource, workSource }:any) => {
  useLocoScroll();
  return (
    <>
    <AnimatedBackground filter={"hue-rotate(110deg)"} top={"-140px"}/>
    <BlockFullWidth>
      <Container >
        <Heading variant="h1" data-aos="anim1">My Recent Works</Heading>
      </Container>
      <ItemBlock />
    </BlockFullWidth>
    <Container>
      <Typography data-aos="anim1" variant="h1" gutterBottom>Projects</Typography>
      {projectSource.map(({ slug, frontmatter }:any) => (
        <div
          key={slug}
          data-aos="anim1"
          style={{paddingBottom:"20px"}}
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Typography variant="h4">{frontmatter.title}</Typography>
              <Typography variant="h6" gutterBottom>{frontmatter.metaDesc}</Typography>
            </a>
          </Link>
        </div>
      ))}
      <Typography data-aos="anim1" variant="h1" gutterBottom>Work Experience</Typography>
      {workSource.map(({ slug, frontmatter }:any) => (
        <div
          key={slug}
          data-aos="anim1"
          style={{paddingBottom:"20px"}}
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Typography variant="h4">{frontmatter.title}</Typography>
              <Typography variant="h6" gutterBottom>{frontmatter.metaDesc}</Typography>
            </a>
          </Link>
        </div>
      ))}



    <GridContainer className="d-none">
    {[...Array(2)].map((elem, index)=>{
        const Height = heights[~~(Math.random()*heights.length)] as keyof JSX.IntrinsicElements
        console.log(Height);
        return <Height key={index}> a </Height>;
    })}
      <Short data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Short>
      <Tallest data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Tallest>
      <Tall data-aos="anim1" data-aos-delay="400">
        <Typography variant="h4" gutterBottom>Laravel Project</Typography>
        <Typography>Laravel Project</Typography>
      </Tall>
      <Taller data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Short data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Short>
      <Short data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Short>
      <Taller data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Short data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Short>
      <Tallest data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Tallest>
      <Taller data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Taller data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Taller data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Taller data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Tallest data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Tallest>
      <Taller data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Short data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Short>
      <Short data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Short>
      <Taller data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Short data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Short>
      <Taller data-aos="anim1" data-aos-delay="300">
        <Typography>Laravel Project</Typography>
      </Taller>
      <Tallest data-aos="anim1" data-aos-delay="400">
        <Typography>Laravel Project</Typography>
      </Tallest>
      <Taller data-aos="anim1" data-aos-delay="200">
        <Typography>Laravel Project</Typography>
      </Taller>
    </GridContainer>
    </Container>
    <Spacer></Spacer>
    </>
  )
}

export default Work

// export async function getStaticProps() {
//   // MDX text - can be from a local file, database, anywhere
//   const source = '<Typography>Some **mdx** text, with a component</Typography> <Typography variant="h1">Hello</Typography>';
//   const mdxSource = await serialize(source);
//   return { props: { source: mdxSource } };
// }




const GridContainer = styled(Box)(`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); 
  height:200%;
  .MuiBox-root {
    border-radius: 10px;
    background-color:rgb(var(--two));
    border: 1px solid #000;
    padding:10px 20px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr)); 
  }
`);

const Short = styled(Box)(`
  grid-row: span 1;
`);

const Tall = styled(Box)(`
  grid-row: span 2;
`);

const Taller = styled(Box)(`
  grid-row: span 3;
`);

const Tallest = styled(Box)(`
  grid-row: span 4;
`);

const BlockFullWidth = styled(Box)({
  marginBottom:160,
  marginTop:50,
  transform: 'translateZ(0)',
  overflow:'hidden'
})

const Heading = styled(Typography)({
  paddingInline:50,
  marginBottom:30
})

const Spacer = styled(Box)({
  height: "200px"
})