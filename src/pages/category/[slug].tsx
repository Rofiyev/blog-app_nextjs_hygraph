import { Box, Container } from "@mui/material";
import Layout from "../../layout/layout";
import { GetServerSideProps } from "next";
import { Content, Sidebar } from "../../components";
import { BlogsService } from "../../services/blog.services";
import { BlogsType } from "../../interface/blogs.interface";
import { CategorysType } from "../../interface/category.interface";
import { useRouter } from "next/router";
import SEO from "../../layout/seo/seo";

const CategoryDetailedPage = ({
  blogs,
  latestBlogs,
  categories,
}: DetailedCategoriesPageProps): JSX.Element => {
  const router = useRouter();

  return (
    <SEO metaTitle={`${router.query.slug}-category`}>
      <Layout>
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: { xs: "column", md: "row" },
              padding: "20px",
            }}
          >
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
            <Content blogs={blogs} />
          </Box>
        </Container>
      </Layout>
    </SEO>
  );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<
  DetailedCategoriesPageProps
> = async ({ query }) => {
  const blogs = await BlogsService.getDetaieldCateogriesBlog(
    query.slug as string
  );
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategorys();

  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedCategoriesPageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategorysType[];
}