import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import { GetServerSideProps, PreviewData } from 'next'
import Image from 'next/image';
import { Sidebar } from 'src/components';
import { calculateEstimatedtimeToRead } from 'src/helpers/time.format';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from 'src/interfaces/categories.interface';
import Layout from 'src/layout/layout';
import { BlogsService } from 'src/services/blog.service'

const DetailedBlogs = ({blog, latestBlogs, categories}: DetailedBlogsPageProps) => {   
  return (
    <Layout>
        <Box sx={{ display:'flex', gap:'20px' , padding:'20px', backgroundColor: '#0a0a0a',color:'white'}}>
        {/* <Content blogs={blogs}/> */}
            <Box width={{xs: '100%', md: '70%'}}>
                <Box
                    sx={{
                        backgroundColor: 'black',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0px 8px 16px rgba(255,255,255, 0.1)'
                    }}
                    position={"relative"} width={"100%"} height={"50vh"}
                >
                    <Image
                    src={blog.image.url}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    />
                </Box>
                <Box display={'flex'} rowGap={'10px'} flexDirection={'column'}>
                    <Box sx={{ display: "flex", gap: "10px", marginTop: "40px" }}>
                        <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                        <Box>
                        <Typography>{blog.author.name}</Typography>
                        <Box color={"gray"}>
                            {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                            {calculateEstimatedtimeToRead(blog.description.text)}min read
                        </Box>
                        </Box>
                    </Box>
                    <Typography variant='h3' marginTop={'10px'}>{blog.title}</Typography>
                    <Typography color={'gray'}>{blog.excerpt}</Typography>
                    <Box >
                        <div style={{ opacity: '0.8'}}  dangerouslySetInnerHTML={{__html: blog.description.html}}/>
                    </Box>
                </Box>
            </Box>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Box>
    </Layout>
  )
}

export default DetailedBlogs

export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({query}) => {
    const blog = await BlogsService.getDetailedBlogs(query.slug as string)    
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {    
            blog,
            latestBlogs,
            categories,
        }
    }
}

interface DetailedBlogsPageProps {
    blog: BlogsType;
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}