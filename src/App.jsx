import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route excat path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App