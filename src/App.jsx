import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import Detail from './Components/Detail';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route excat path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App