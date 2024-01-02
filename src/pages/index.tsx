import { Box, Button } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Content, Hero, Sidebar } from 'src/components';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from "src/interfaces/categories.interface";
import Layout from 'src/layout/layout';
import Seo from 'src/layout/seo/seo';
import { BlogsService } from 'src/services/blog.service';

const IndexPage = ({blogs, latestBlogs, categories} : HomePageProps) => {
  return (
    <Seo>
      <Layout>
        {/* <Head>
          <title>Home page</title>
        </Head> */}
        <Hero blogs={blogs.slice(0,3)}/>
        <Box sx={{ display:'flex', gap:'20px' , padding:'20px', backgroundColor: '#0a0a0a',color:'white'}}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs}/>
        </Box>
      </Layout>
    </Seo>
  );
};

export default IndexPage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async() =>{
    const blogs = await BlogsService.getAllBlogs();
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories,
        },
    };
};

interface HomePageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}