import { GetServerSideProps } from "next";
import Layout from "../../layout/layout";
import { BlogsType } from "../../interface/blogs.interface";
import { BlogsService } from "../../services/blog.services";
import { Content } from "../../components";
import { Box } from "@mui/material";
import SEO from "../../layout/seo/seo";

const BlogPage = ({ blogs }: BlogPageProps): JSX.Element => {
  return (
    <SEO metaTitle="All Blogs">
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: { blogs },
  };
};

interface BlogPageProps {
  blogs: BlogsType[];
}