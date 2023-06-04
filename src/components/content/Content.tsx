import { Box, Typography, Avatar, Divider } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { ContentProps } from "./Content.props";
import { calculateEstimatedTimeTiRead } from "../../helpers/time.format";
import Link from "next/link";

const Content = ({ blogs }: ContentProps): JSX.Element => {
  return (
    <Box width={{ xs: "100%", md: "65%" }} minHeight={"150vh"}>
      {blogs.map((item) => (
        <Link href={`blog/${item.slug}`} key={item.id}>
          <Box
            sx={{
              background: "rgba(0,0,0,.5)",
              p: "10px",
              mt: "20px",
              borderRadius: "8px",
              boxShadow: "2px 6px 12px rgba(255,255,255, .1)",
            }}
          >
            <Box position={"relative"} width={"100%"} height={"50vh"}>
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover", borderRadius: "4px" }}
              />
            </Box>
            <Typography variant="h5" mt={"20px"}>
              {item.title}
            </Typography>
            <Typography variant="body1" color={"gray"}>
              {item.excerpt}
            </Typography>
            <br />
            <Divider sx={{ mt: "30px" }} />
            <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <Avatar alt={item.author.name} src={item.author.avatar.url} />
              <Box>
                <Typography>{item.author.name}</Typography>
                <Typography>
                  {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022;
                  {calculateEstimatedTimeTiRead(item.description.text)}min read
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Content;
