import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
    boxShadow: `0px 3px 6px ${theme.palette.divider}`,
    padding: theme.spacing(2),
  },

  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#F5B041",
    fontWeight: 600,
  },
  textfield: {
    width: 120,
    marginTop: theme.spacing(1),
  },
}));
