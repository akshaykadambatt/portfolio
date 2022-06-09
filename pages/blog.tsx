import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemBlock from "../components/ItemBlock";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

const heights = ['Short', 'Tall', 'Taller', 'Tallest']
export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const source = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {slug, frontmatter};
  });
  source.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);
  
  return {
    props: {
      source,
    },
  };
}
const Blog: NextPage = ({ source }:any) => {
  return (
    <>
    <Container>
      <Typography data-aos="anim1" variant="h1" gutterBottom>Blog</Typography>
      {source.map(({ slug, frontmatter }:any) => (
        <div
          key={slug}
          data-aos="anim1"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Typography variant="h4">{frontmatter.title}</Typography>
              <Typography variant="h6" gutterBottom>{frontmatter.metaDesc}</Typography>
            </a>
          </Link>
        </div>
      ))}
    </Container>
    <Spacer></Spacer>
    </>
  )
}

export default Blog

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