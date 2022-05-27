import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Dashboard from './Pages/TeacherDashboard'
import Jobs from './Pages/Jobs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Students from './Pages/Students'
import AddClassroom from './Pages/AddClassroom'
import AddTask from './Pages/AddTask'

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/dash' element={<Dashboard/>} />
        <Route exact path='/jobs' element={<Jobs/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/students' element={<Students/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/addclassroom' element={<AddClassroom/>} />
        <Route exact path='/addtask' element={<AddTask/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App