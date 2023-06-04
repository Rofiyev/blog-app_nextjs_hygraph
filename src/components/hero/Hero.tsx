import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { format } from "date-fns";
import { HeroType } from "./Hero.props";
import { calculateEstimatedTimeTiRead } from "../../helpers/time.format";
import Link from "next/link";

const Hero = ({ blogs }: HeroType): JSX.Element => {
  return (
    <Box width={"100%"} height={"70vh"}>
      <Carousel
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={1000}
        showDots={true}
        autoPlay={true}
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Link key={item.id} href={`/blog/${item.slug}`}>
            <Box>
              <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
                <Image
                  src={item.image.url}
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
                <Box
                  width={{ xs: "100%", sm: "80%" }}
                  position={"relative"}
                  color={"white"}
                  sx={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    paddingLeft: { xs: "10px", sm: "50px" },
                  }}
                  zIndex={999}
                >
                  <Container sx={{ paddingInline: { xs: "10px", md: "80px" } }}>
                    <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                      {item.title}
                    </Typography>
                    <Typography
                      color={"#b0b0b0"}
                      sx={{ fontSize: { xs: "20px", md: "25px" } }}
                    >
                      {item.excerpt}
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: "10px", marginTop: "20px" }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.avatar.url}
                      />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Typography>
                          {format(new Date(item.createdAt), "dd MMM, yyyy")}{" "}
                          &#x2022;{" "}
                          {calculateEstimatedTimeTiRead(item.description.text)}
                          min read
                        </Typography>
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
