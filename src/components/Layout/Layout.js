import React, { useState } from "react";
import { Header } from "../Header/Header";
import { useStyles } from "./LayoutStyles";
import clsx from "clsx";
import { MenuItem } from "@material-ui/core";

export const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Header open={open} setOpen={setOpen} />

      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
