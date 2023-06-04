import Layout from "../layout/layout";
import { Content, Hero, Sidebar } from "../components";
import { Container } from "@mui/material";
import { GetServerSideProps } from "next";
import { BlogsService } from "../services/blog.services";
import { BlogsType } from "../interface/blogs.interface";
import { CategorysType } from "../interface/category.interface";
import SEO from "../layout/seo/seo";

export default function Home({
  blogs,
  latestBlogs,
  categories,
}: HomePageProps) {
  return (
    <SEO metaTitle="Rof1yev Next App">
      <Layout>
        <Hero blogs={blogs.slice(0, 4)} />
        <Container
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column-reverse", md: "row" },
            py: "20px",
          }}
        >
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Container>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategorys();
  return { props: { blogs, latestBlogs, categories } };
};

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategorysType[];
}