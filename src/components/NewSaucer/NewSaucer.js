import React from "react";
import { NewSaucerForm } from "./NewSaucerForm/NewSaucerForm";
import { useStyles } from "./NewSaucerStyles";
import { Box } from "@material-ui/core";

export const NewSaucer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.boxForm}>
        <NewSaucerForm />
      </Box>
    </div>
  );
};
