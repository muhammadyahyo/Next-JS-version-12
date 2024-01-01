export interface BlogsType{
    excerpt: string
              id: string
              slug : string
              title: string
              createdAt: Date
              author: {
                avatar: {
                  url: string
                }
                name: string
              }
              image: {
                url: string
              }
              category :{
                label: string
                slug: string
              }
              description: {
                text: string;
              }
}