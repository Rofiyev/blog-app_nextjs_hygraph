import { LayoutProps } from "./layout.props";
import { Footer, Navbar } from "../components";
import { Box } from "@mui/material";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box sx={{ background: "#121212", color: "white" }}>
      <Navbar />
      <Box minHeight={"90vh"} width={"100%"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
