import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { navItems } from "../../config/constants";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  window?: () => Window;
}
const drawerWidth = 100;

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} height={"10vh"}>
      <AppBar component="nav" sx={{ height: "10vh", background: "#141414" }}>
        <Container>
          <Toolbar sx={{ p: 0 }}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "block",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                },
              }}
            >
              Rof1yev
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ slug, title }) => (
                <Button
                  key={title}
                  sx={{
                    color: "#fff",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `${drawerWidth}%`,
            },
          }}
        >
          <Box sx={{ textAlign: "center" }} px={2}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ my: 2, fontWeight: "bold" }}
              >
                Rof1yev
              </Typography>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider />
            <List>
              {navItems.map(({ slug, title }) => (
                <ListItem
                  key={title}
                  disablePadding
                  onClick={handleDrawerToggle}
                >
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
