import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Box, Button, Container, Typography } from '@mui/material';
import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/system';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import useLocoScroll from "../../components/useLocoScroll";

export default function PostPage({ frontmatter, source }:any) {
  useLocoScroll();
  const router = useRouter()
  return (
    <div className="blog-content">
        <Head>
            <title>{frontmatter.title}</title>
        </Head>
        
        <Box sx={{height:"50px"}}></Box>
        <Container data-aos="anim1">
            <Button variant="outlined" onClick={() => router.back()} aria-label="Go back">
              Go back
            </Button>
        </Container>
        <Box data-aos="anim1" data-aos-delay="200">
          <MDXRemote {...source} components={{
            Typography, 
            wrapper: Container, 
            Image,
            code, 
            h1:(props:any) => <Typography mb={1} variant="h1">{props.children}</Typography>,
            h2:(props:any) => <Typography gutterBottom variant="h2">{props.children}</Typography>,
            h3:(props:any) => <Typography gutterBottom variant="h3">{props.children}</Typography>,
            h4:(props:any) => <Typography gutterBottom variant="h4">{props.children}</Typography>,
            h5:(props:any) => <Typography gutterBottom variant="h5">{props.children}</Typography>,
            h6:(props:any) => <Typography gutterBottom variant="h6">{props.children}</Typography>,
            p:(props:any) => <Typography gutterBottom variant="body1">{props.children}</Typography>,
            ol: (props:any) => <Typography gutterBottom component="ol">{props.children}</Typography>,
            li: (props:any) => <Typography gutterBottom component="li">{props.children}</Typography>,
            td: (props:any) => <Typography gutterBottom component="td">{props.children}</Typography>,
            th: (props:any) => <Typography gutterBottom component="th" sx={{fontWeight:"600"}}>{props.children}</Typography>,
          }} />
        </Box>
        <Box sx={{height:"200px"}}></Box>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function code({className, ...props}:any) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter 
      className={className+" code-snip-kn"} 
      customStyle={{fontSize:"18px", padding:'30px 5vw'}}
      wrapLines={false} 
      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
      language={match[1]} 
      PreTag="div" {...props} 
      style={nightOwl}
    />
    : <code className={className} {...props} />
}

export async function getStaticProps({ params: { slug } }:any) {
    // MDX text - can be from a local file, database, anywhere
    const source = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(source);
    const mdxSource = await serialize(content);
    return { props: { frontmatter, source: mdxSource } };
}
