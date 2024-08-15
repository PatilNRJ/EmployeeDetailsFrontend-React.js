import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />} />
          <Route path='/addemployee' element={<AddEmployeeComponent />} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent />} />
       </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
