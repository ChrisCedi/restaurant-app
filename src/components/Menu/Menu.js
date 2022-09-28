import React, { useEffect, useContext, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./MenuStyles";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
import { Saucer } from "./Saucer/Saucer";

export const Menu = () => {
  const classes = useStyles();
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [saucersList, setSaucersList] = useState([]);

  useEffect(() => {
    const getSaucers = () => {
      firebase.db.collection("products").onSnapshot(handleSnapshot);
    };
    getSaucers();
  }, []);

  const handleSnapshot = (snapshot) => {
    const saucers = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setSaucersList(saucers);

    console.log("saucers", saucers);
  };
  return (
    <div className={classes.container}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => navigate("saucer/new")}
      >
        Nuevo platillo
      </Button>
      <Grid container spacing={2} className={classes.gridContainer}>
        {saucersList.map((sau) => (
          <Grid item sm={12} md={6}>
            <Saucer key={sau.id} data={sau} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
