import { Box, Stack, Typography, IconButton, Container } from "@mui/material";
import { format } from "date-fns";
import { socialsMedia } from "../../config/constants";
import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socials: React.ReactElement[] = [
  <TelegramIcon style={{ color: "white" }} />,
  <InstagramIcon style={{ color: "white" }} />,
  <LinkedInIcon style={{ color: "white" }} />,
];

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#141414",
        color: "white",
        padding: "20px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography fontWeight={"600"} letterSpacing={"1px"}>
          @{format(new Date(), "yyyy")} Rof1yev. All Right Reserved.
        </Typography>
        <Stack direction={"row"} gap={"10px"}>
          {socialsMedia.map(({ link }, i) => (
            <IconButton key={link}>
              <Link
                target="_blank"
                href={link}
                style={{ display: "grid", placeItems: "center" }}
              >
                {socials[i]}
              </Link>
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
