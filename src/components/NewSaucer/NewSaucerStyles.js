import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
  },
  boxForm: {
    maxWidth: 600,
  },
}));
