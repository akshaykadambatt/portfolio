import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Container, Typography } from '@mui/material';
import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/system';
const components = { Typography, Container, SyntaxHighlighter, code };

export default function PostPage({ frontmatter, source }:any) {
  return (
    <>
        <Head>
            <title>{frontmatter.title}</title>
        </Head>
        <MDXRemote {...source} components={components} />
    </>
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

function code({className, ...props}:any) {
  const theme = useTheme();
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter 
      className={className+" code-snip-kn"} 
      customStyle={{fontSize:(theme as any).typography.htmlFontSize, padding:'30px 5vw'}}
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