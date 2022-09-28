import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {},
  gridContainer: {
    paddingTop: theme.spacing(2),
  },
}));
