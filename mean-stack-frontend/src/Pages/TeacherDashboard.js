import { Grid, Paper, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicCard from "../Components/ClassCard";
import Api from '../Helpers/Api';
import { styled } from "@mui/material/styles";
import Calendar from "../Components/Calendar";

const TeacherDashboard = () => {
  const [classroomList, setClassroomList] = useState([]);

  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   }));

  const [phoneImage, setPhoneImage] = useState(1);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // useEffect(() => {

  //   if (screenSize >= 800) {
  //     setPhoneImage(true);
  //   } else {
  //     setPhoneImage(false);
  //   }

  // },[]);

  // useEffect(() => {

  // },[]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    try {
      Api.get("/classrooms?userId=6290843f476be22bdb9c5155").then(
        (res, err) => {
          console.log(res);

          setClassroomList(res.data.classrooms);
        }
      );
    } catch {}

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= 1000) {
      setPhoneImage(4);
    } else if (screenSize >= 600) {
      setPhoneImage(6);
    } else {
      setPhoneImage(12);
    }
  }, [screenSize]);

  return (
    <>
      <Grid container spacing={2}>
        {classroomList.length === 0 && (
          <>
            <Grid item xs={phoneImage}>
              <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
            <Grid item xs={phoneImage}>
            <Paper>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" height={200} />
              </Paper>
            </Grid>
          </>
        )}

        {classroomList.map((classroom) => (
          <Grid item xs={phoneImage} key={classroom._id}>
            <Paper>
            <BasicCard item={classroom} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Calendar />
    </>
  );
};

export default TeacherDashboard;
