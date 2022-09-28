import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(12),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navLinkActive: {
    textDecoration: "none",
    color: "green",
  },
  divButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: 500,
  },
  containerDrawer: {
    padding: theme.spacing(2),
  },
  navLink: {
    textDecoration: "none",
    color: "black",
  },
  boxTitle: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(2),
  },
  titleDrawer: {
    fontSize: 22,
  },
  titleDrawerFood: {
    fontSize: 22,
    color: theme.palette.primary.main,
  },
  description: {
    paddingBottom: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
  },
  boxNavMenu: {
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
