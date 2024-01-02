import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { Content } from "src/components"
import { BlogsType } from "src/interfaces/blogs.interface"
import Layout from "src/layout/layout"
import Seo from "src/layout/seo/seo"
import { BlogsService } from "src/services/blog.service"

const BlogPage = ({blogs}:BlogPageProps) => {
  return (
    <Seo metaTitle="All Blogs">
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" },
            padding: "20px",
            backgroundColor: "#0a0a0a",
            color: "white",
            justifyContent: 'center'
          }}
        >
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </Seo>
  );
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async() => {
    const blogs = await BlogsService.getAllBlogs();

    return {
        props: {
            blogs
        },
    };
}

interface BlogPageProps {
    blogs: BlogsType[];
}