import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import Api from "../Helpers/Api";
import { useState } from "react";

import Dropzone from "react-dropzone";

const AddTask = () => {
//   const [role, setRole] = useState(1);

const [file, setFile] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().max(255).required("Title is required"),
    //   email: Yup.string().max(255).required("Branch is required"),
    //   branch: Yup.string().max(255).required("Email is required"),
      description: Yup.string().max(255).required("Description is required"),
    //   sem: Yup.string().max(10).required("Semester is required"),
      //   password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      console.log("submitted", formik.values);

      console.log("Add User data");

      let formdata = new FormData();

      formdata.append("taskTitle", formik.values.title);
      formdata.append("taskDescription", formik.values.description);
      formdata.append("classroomRef", "6290e4d82daa42bfb4643e65");

      file.forEach((item, i) => {
        formdata.append("image", item);
      });

      console.log("login details are", formdata);
      //   console.log(data);

      Api.post("/classroom/create/task", formdata).then((res, err) => {
        console.log(res);
        console.log(err);
      });

      console.log("submitted");
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
              sx={{
                textAlign: "center",
              }}
            >
              COLLEGE BUDDIES
            </Typography>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h5"
                sx={{
                  textAlign: "center",
                }}
              >
                Sign in
              </Typography>
            </Box>

            <TextField
              error={Boolean(formik.touched.title && formik.errors.title)}
              fullWidth
              helperText={formik.touched.title && formik.errors.title}
              label="Title"
              margin="normal"
              name="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.title}
              variant="outlined"
            />


            <TextField
              error={Boolean(formik.touched.description && formik.errors.description)}
              fullWidth
              helperText={formik.touched.description && formik.errors.description}
              label="Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.description}
              variant="outlined"
            />

<Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag n drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                SIGN UP
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default AddTask;
