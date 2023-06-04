import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarProps } from "./Sidebar.props";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps): JSX.Element => {
  const router = useRouter();
  return (
    <Box
      width={{ xs: "100%", md: "35%" }}
      sx={{ position: "sticky", top: "100px", transition: "all .3s ease" }}
    >
      <Box sx={{ position: "sticky", top: "100px" }}>
        <Box
          padding={"20px"}
          border={"1px solid grey"}
          borderRadius={"8px"}
          boxShadow={"2px 10px 16px rgba(0,0,0,.7)"}
        >
          <Typography variant="h5">Letest blog</Typography>
          <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
            {latestBlogs.map((item) => (
              <Link key={item.id} href={`/blog/${item.slug}`}>
                <Box marginTop={"20px"}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <Stack direction={"column"} gap={"10px"}>
                      <Typography variant="body1">{item.title}</Typography>
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <Avatar
                          alt={item.author.name}
                          src={item.author.avatar.url}
                        />
                        <Box>
                          <Typography>{item.author.name}</Typography>
                          <Typography sx={{ opacity: ".6" }}>
                            {format(new Date(item.createdAt), "dd MMM, yyyy")}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                  <Divider sx={{ mt: "20px" }} />
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid grey"}
          borderRadius={"8px"}
          boxShadow={"2px 10px 16px rgba(0,0,0,.7)"}
          mt={"20px"}
        >
          <Typography variant="h5">Category</Typography>
          <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
            {categories.map(({ slug, label }) => (
              <Fragment key={slug}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                  onClick={() => router.push(`/category/${slug}`)}
                >
                  {label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
