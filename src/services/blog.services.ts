import { gql, request } from 'graphql-request'
import { BlogsType } from '../interface/blogs.interface';
import { CategorysType } from '../interface/category.interface';

const graphqlAPI = process.env.NEXT_PUCLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }

          description {
            text
          }
        }
      }    
      `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getLatestBlog() {
    const query = gql`
      query getLatestBlog {
        blogs(last: 2) {
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          description {
            text
          }
        }
      }    
      `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getCategorys() {
    const query = gql`
      query GetCategorys {
        categories {
          label
          slug
        }
      }
      `;
    const result = await request<{ categories: CategorysType[] }>(graphqlAPI, query);
    return result.categories;
  },

  async getDetailedBlogs(slug: string) {
    const query = gql`
			query GetDetailedBlog($slug: String!) {
				blog(where: { slug: $slug }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
					description {
						html
						text
					}
				}
			}
		`;

    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, { slug });
    return result.blog;
  },

  async getDetaieldCateogriesBlog(slug: string) {
    const query = gql`
			query getCategoriesBlog($slug: String!) {
				blogs(where: { category: { slug: $slug } }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
					description {
						text
					}
				}
			}
		`;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug });
    return result.blogs;
  },
}