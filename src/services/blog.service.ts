import { request, gql } from "graphql-request";
import { BlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string
export const BlogsService = {
    async getAllBlogs(){
        const query = gql`
        query GetBlogs {
            blogs {
              excerpt
              id
              slug
              title
              createdAt
              author {
                avatar {
                  url
                }
                name
              }
              image {
                url
              }
              category {
                label
                slug
              }
              description{
                text
              }
            }
          }
          
        `;

        const result = await request<{blogs: BlogsType[]}>(graphAPI, query);
        return result.blogs;
    },

    async getLatestBlog(){
        const query = gql`
            query GetLatestBlogs {
                blogs(last: 2) {
                excerpt
                id
                slug
                title
                createdAt
                author {
                    avatar {
                    url
                    }
                    name
                }
                image {
                    url
                }
                description{
                  text
                }
                }
            }
            
        `;
        const result = await request<{blogs: BlogsType[]}>(graphAPI, query);
        return result.blogs;
    },

    async getCategories() {
        const query = gql`
            query GetCategories {
                categories {
                label
                slug
                }
            }
        `;
        const result = await request<{categories: CategoryType[]}>(graphAPI, query);
        return result.categories;
    }
}