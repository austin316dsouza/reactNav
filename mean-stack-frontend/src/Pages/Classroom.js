import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Api from '../Helpers/Api';
import { Box,Container , Skeleton, Grid, Paper, Button} from '@mui/material';
import { TaskList } from '../Components/TaskList';
import BasicCard from '../Components/TaskCard'


const Classroom = () => {

  const [taskList, setTaskList] = useState([])

  const { id } = useParams();

  const [phoneImage, setPhoneImage] = useState(1);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(()=>{

    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

      try {
        Api.get(`/classroom/alltask?class_ref=${id}`).then(
          (res, err) => {
            console.log(res.data.result);
  
            setTaskList(res.data.result);
          }
        );
      } catch {}

      return () => window.removeEventListener("resize", handleResize);

  },[])

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
//     <>
//     {taskList.length !== 0 &&
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8,
//       }}
//     >
//       <Container maxWidth={false}>
//         <Box sx={{ mt: 3 }}>
//           <TaskList vans={taskList} />
//         </Box>
//       </Container>
//     </Box>
// }
//   </>

<>
<Container>
<h1>Tasks</h1>

<Button variant="contained" onClick={()=> window.location.href = '/addtask'} >Add Task</Button>

<Grid container spacing={2}>
  {taskList.length === 0 && (
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

  {taskList.map((classroom) => (
    <Grid item xs={phoneImage} key={classroom._id}>
      <Paper>
      <BasicCard item={classroom} />
      </Paper>
    </Grid>
  ))}
</Grid>
</Container>

</>
  )
}

export default Classroom