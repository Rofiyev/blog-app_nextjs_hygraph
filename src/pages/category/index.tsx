import { GetServerSideProps } from "next";
import { CategorysType } from "../../interface/category.interface";
import Layout from "../../layout/layout";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { navItems } from "../../config/constants";
import { BlogsService } from "../../services/blog.services";
import SEO from "../../layout/seo/seo";

const CategoryPage = ({ categories }: CategoryPageProps): JSX.Element => {
  const rotuer = useRouter();

  return (
    <SEO metaTitle="All Categories">
      <Layout>
        <Box
          width={{ xs: "100%", md: "80%" }}
          marginX={"auto"}
          marginTop={"10vh"}
          borderRadius={"8px"}
          height={{ xs: "40vh", md: "50vh" }}
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Typography variant="h3" fontFamily={"cursive"}>
            All Categories
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "10px", sm: "0px" },
            }}
          >
            {categories.map((item) => (
              <Button
                key={item.slug}
                sx={{ fontWeight: "bold" }}
                onClick={() => rotuer.push(`/category/${item.slug}`)}
              >
                # {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Layout>
    </SEO>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  const categories = await BlogsService.getCategorys();

  return {
    props: { categories },
  };
};

interface CategoryPageProps {
  categories: CategorysType[];
}
