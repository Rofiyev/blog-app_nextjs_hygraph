import { Box, Typography, Avatar, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns";

interface IHero {
  image: string;
  title: string;
  exerpt: string;
  author: { name: string; image: string };
}
const heroData: IHero[] = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];

const Hero = () => {
  return (
    <Box width={"100%"} height={"70vh"}>
      <Carousel
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
      >
        {heroData.map((item) => (
          <Box key={item.image}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, .6)",
                }}
              />
              <Container>
                <Box
                  width={{ sm: "100%", md: "70%" }}
                  color={"white"}
                  sx={{
                    position: "relative",
                    bottom: "50%",
                    transform: "translateY(50%)",
                    paddingLeft: { xs: "10px", sm: "50px" },
                  }}
                  zIndex={999}
                >
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography variant="h5">{item.exerpt}</Typography>
                  <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    <Avatar alt={item.author.name} src={item.author.image} />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Typography>
                        {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
