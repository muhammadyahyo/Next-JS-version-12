import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { BlogsType } from "src/interfaces/blogs.interface"
import { CategoryType } from "src/interfaces/categories.interface"
import Layout from "src/layout/layout"
import Seo from "src/layout/seo/seo"
import { BlogsService } from "src/services/blog.service"

const CategoryPage = ({categories}:CategoryPageProps) => {
    const router = useRouter()
  return (
    <Seo metaTitle="All Categories">
      <Layout>
        <Box
          height={{ xs: "30vh", md: "50vh" }}
          width={{xs: '100%', md: '80%'}}
          marginX={'auto'}
          marginTop={'10vh'}
          borderRadius={'8px'}
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column',
            rowGap: '10px'
          }}
        >
          <Typography variant="h3" color='white' fontFamily={'cursive'}>All Categories</Typography>
          <ButtonGroup variant="contained" aria-label='outlined primary button group'>
              {
                  categories.map(item => (
                      <Button onClick={()=> router.push(`/category/${item.slug}`)} key={item.slug}># {item.label}</Button>
                  ))
              }
          </ButtonGroup>
        </Box>
      </Layout>
    </Seo>
  );
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async() =>{
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
}

interface CategoryPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}