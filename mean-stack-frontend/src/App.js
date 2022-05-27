import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Dashboard from './Pages/Dashboard'
import Jobs from './Pages/Jobs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

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
      </Routes>
    </Router>
    </>
  )
}

export default App