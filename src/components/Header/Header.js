import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Header = ({ open, setOpen }) => {
  const classes = useStyles();

  const location = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <AppBar
        color="primary"
        className={clsx(classes.header, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            {location.pathname === "/" && (
              <Typography className={classes.title} variant="h5">
                Menu
              </Typography>
            )}
            {location.pathname === "/orders" && (
              <Typography className={classes.title} variant="h5">
                Ordenes
              </Typography>
            )}
            {location.pathname === "/saucer/new" && (
              <Typography className={classes.title} variant="h5">
                Nuevo platillo
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.containerDrawer}>
          <div className={classes.divButton}>
            <IconButton onClick={handleClose}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <Box>
            <Box className={classes.boxTitle}>
              <Typography className={classes.titleDrawer}>CDMX</Typography>
              <Typography className={classes.titleDrawerFood}>FOOD</Typography>
            </Box>

            <Typography className={classes.description}>
              Administra tu restaurante con las siguientes opciones:
            </Typography>
          </Box>
          <Divider />
          <nav className={classes.nav}>
            <Box className={classes.boxNavMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.navLinkActive : classes.navLink
                }
              >
                <Typography variant="body1">Menu</Typography>
              </NavLink>
            </Box>
            <Box className={classes.boxNavMenu}>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? classes.navLinkActive : classes.navLink
                }
              >
                <Typography variant="body1">Ordenes</Typography>
              </NavLink>
            </Box>
          </nav>
        </Box>
      </Drawer>
    </div>
  );
};
