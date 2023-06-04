import { GetServerSideProps } from "next";
import { BlogsService } from "../../services/blog.services";
import { BlogsType } from "../../interface/blogs.interface";
import Layout from "../../layout/layout";
import Image from "next/image";
import { Box, Avatar, Typography, Divider, Container } from "@mui/material";
import { calculateEstimatedTimeTiRead } from "../../helpers/time.format";
import { format } from "date-fns";
import { Sidebar } from "../../components";
import { CategorysType } from "../../interface/category.interface";
import SEO from "../../layout/seo/seo";

const DetailBlog = ({
  blog,
  latestBlogs,
  categories,
}: DetailedBlogsPageProps): JSX.Element => {

  return (
    <SEO metaTitle={blog.title}>
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
            <Box width={{ xs: "100%", md: "70%" }}>
              <Box
                sx={{
                  backgroundColor: "black",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)",
                }}
                position={"relative"}
                width={"100%"}
                height={{ xs: "30vh", md: "50vh" }}
                marginBottom={"20px"}
              >
                <Image
                  src={blog.image.url}
                  alt={blog.title}
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Box>
              <Box display={"flex"} flexDirection={"column"} rowGap={"10px"}>
                <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                  <Box>
                    <Typography>{blog.author.name}</Typography>
                    <Box color={"gray"}>
                      {format(new Date(blog.createdAt), "dd MMM, yyyy")}{" "}
                      &#x2022;{" "}
                      {calculateEstimatedTimeTiRead(blog.description.text)}
                      min read
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                  {blog.title}
                </Typography>
                <Typography color={"gray"}>{blog.excerpt}</Typography>
                <Divider />
                <div
                  style={{ opacity: ".8", fontFamily: "inherit" }}
                  dangerouslySetInnerHTML={{ __html: blog.description.html }}
                />
              </Box>
            </Box>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
          </Box>
        </Container>
      </Layout>
    </SEO>
  );
};

export default DetailBlog;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogsPageProps
> = async ({ query }) => {
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategorys();
  const blog = await BlogsService.getDetailedBlogs(query.slug as string);

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogsPageProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategorysType[];
}
