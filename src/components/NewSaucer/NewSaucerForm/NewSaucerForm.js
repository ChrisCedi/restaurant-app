import React, { useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useForm } from "./hooks/useForm";
import { useStyles } from "./NewSaucerFormStyles";
import { FirebaseContext } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";

export const NewSaucerForm = () => {
  const {
    initialValues,
    image,
    progress,
    validationSchema,
    handleProgress,
    handleUploadStart,
    handleUploadError,
    handleUploadSuccess,
  } = useForm();
  const classes = useStyles();
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      try {
        values.image = image;
        firebase.db.collection("products").add(values);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("image", image);
  }, [image]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="price"
            label="Precio"
            value={formik.values.price}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="category"
            label="Categoria"
            value={formik.values.category}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
        </Grid>
        <Grid item xs={12} className={classes.gridImage}>
          <FileUploader
            accept="image/*"
            id="image"
            name="image"
            randomizeFilename
            storageRef={firebase.storage.ref("products")}
            onUploadStart={handleUploadStart}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            onUploadError={handleUploadError}
          />

          {formik.values.image === "" ? (
            <Typography>La imagen es necesaria</Typography>
          ) : null}
          {image !== "" ? (
            <Box>
              <Box className={classes.boxImage}>
                <img src={image} className={classes.image} />
              </Box>
              <Typography className={classes.descriptionImage}>
                Imagen del producto
              </Typography>
            </Box>
          ) : (
            <Box className={classes.boxProgress}>
              <CircularProgress variant="determinate" value={progress} />
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Descripción"
            value={formik.values.description}
            onChange={formik.handleChange}
            variant="outlined"
            multiline
            minRows={3}
            fullWidth
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary" variant="contained">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
