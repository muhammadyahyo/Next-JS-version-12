import { Box } from "@mui/system"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { Content, Sidebar } from "src/components"
import { BlogsType } from "src/interfaces/blogs.interface"
import { CategoryType } from "src/interfaces/categories.interface"
import Layout from "src/layout/layout"
import Seo from "src/layout/seo/seo"
import { BlogsService } from "src/services/blog.service"

const CategoryFetailedPage = ({blogs, latestBlogs, categories} : DetailedCategoriesPageProps) => {
  const router = useRouter()
  return (
    <Seo metaTitle={`${router.query.slug}-category`}>
      <Layout>
          <Box sx={{ display:'flex', gap:'20px' , padding:'20px', backgroundColor: '#0a0a0a',color:'white'}}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs}/>
        </Box>
      </Layout>
    </Seo>
  )
}

export default CategoryFetailedPage

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({query}) => {
    const blogs = await BlogsService.getDetailedCategoriesBlog(query.slug as string)   
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {    
            blogs,
            latestBlogs,
            categories,
        }
    }
}

interface DetailedCategoriesPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}