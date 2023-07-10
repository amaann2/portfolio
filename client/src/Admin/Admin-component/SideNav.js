import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ManageAbout from "./Manage-About/ManageAbout";
import logo from "../../assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ManageSkill from "./Manage-Skill/ManageSkill";
import ManageBlog from "./Manage-Blog/ManageBlog";
import ManageEducation from "./Manage-Education/ManageEducation";
import ManageProject from "./Manage-Project/ManageProject";
import LogoutIcon from "@mui/icons-material/Logout";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import './SideNav.css'
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("about");

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/v1/users/logout", {
        withCredentials: true,
      });
      toast.success(data.message);
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const menuItems = [
    { id: "about", label: "About", icon: <ManageAccountsIcon /> },
    { id: "education", label: "Education", icon: <SchoolIcon /> },
    { id: "project", label: "Project", icon: <AccountTreeIcon /> },
    { id: "skill", label: "Skill", icon: <BuildCircleIcon /> },
    { id: "blog", label: "Blogs", icon: <BookIcon /> },
    {
      id: "logout",
      label: "Logout",
      icon: <LogoutIcon />,
      onClick: logout,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "var(--navy)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <img src={logo} alt="" height={70} width={100} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#112240",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: "block" }}
              onClick={item.onClick ? item.onClick : () => setMenuData(item.id)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "var(--slate)",
                    fontSize: 24,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "var(--slate)", // Set the color for item.label
                        fontSize: "1.7rem", // Set the font size for item.label
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "var(--navy) ",
          minHeight: "100vh",
          paddingTop: "4rem",
        }}
      >
        <div className="container">
          {menuData === "about" && <ManageAbout />}
          {menuData === "skill" && <ManageSkill />}
          {menuData === "education" && <ManageEducation />}
          {menuData === "blog" && <ManageBlog />}
          {menuData === "project" && <ManageProject />}
        </div>
      </Box>
    </Box>
  );
}
