import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  gridImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  nameImage: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(2),
    },
  },
  boxImage: {
    width: 300,
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionImage: {
    textAlign: "center",
  },
  boxProgress: {
    display: "flex",
    justifyContent: "center",
  },
}));
