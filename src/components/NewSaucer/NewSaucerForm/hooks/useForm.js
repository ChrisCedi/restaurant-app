import { useState, useContext } from "react";
import * as yup from "yup";
import { FirebaseContext } from "../../../../firebase";

export const useForm = () => {
  const { firebase } = useContext(FirebaseContext);
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");

  const initialValues = {
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    available: true,
  };

  const validationSchema = yup.object({
    name: yup.string().required("Este campo es obligatorio"),
    price: yup.string().required("Este campo es obligatorio"),
    category: yup.string().required("Este campo es obligatorio"),
    description: yup.string().required("Este campo es obligatorio"),
  });

  const handleUploadStart = () => {
    setUpload(true);
    setProgress(0);
  };

  const handleUploadError = (error) => {
    setUpload(false);
    console.log(error);
  };

  const handleUploadSuccess = async (name) => {
    setProgress(100);
    setUpload(false);

    const url = await firebase.storage
      .ref("products")
      .child(name)
      .getDownloadURL();
    setImage(url);
  };

  const handleProgress = (prog) => {
    setProgress(prog);
    console.log(prog);
  };

  return {
    initialValues,
    image,
    progress,
    validationSchema,
    handleProgress,
    handleUploadStart,
    handleUploadError,
    handleUploadSuccess,
  };
};
