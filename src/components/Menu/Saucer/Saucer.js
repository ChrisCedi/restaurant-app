import React, { useContext, useRef, useState } from "react";
import { Typography, Box, Grid, TextField, MenuItem } from "@material-ui/core";
import { useStyles } from "./SaucerStyles";
import { FirebaseContext } from "../../../firebase";

export const Saucer = ({ data }) => {
  const classes = useStyles();

  const { id, name, price, description, category, image, available } = data;
  const { firebase } = useContext(FirebaseContext);

  const [state, setState] = useState(available);
  const options = [
    {
      label: "Disponible",
      value: true,
    },
    {
      label: "No disponible",
      value: false,
    },
  ];
  const updateDispo = (value) => {
    // setState(value);
    try {
      firebase.db.collection("products").doc(id).update({ available: value });
    } catch (error) {}
  };

  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={4}>
          <Box>
            <img src={image} className={classes.image} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography variant="h5" className={classes.title}>
            {name}
          </Typography>
          <Typography>Categoria: {category}</Typography>
          <Typography>Precio: ${price}</Typography>
          <Typography>Descripción: {description}</Typography>
          <TextField
            label="Existencia"
            variant="outlined"
            value={available}
            className={classes.textfield}
            select
            size="small"
            onChange={(e) => updateDispo(e.target.value)}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};
