import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Dashboard from './pages/app/dashboard'
import DashboardNavbar from './components/items/navbar/dashboard.navbar'

class App extends Component<any, any> {
  render() {
    return (
        <Routes>
          <Route path='*' element={<Dashboard />}/>
          <Route path='/dash' element={<DashboardNavbar />}/>
          
        </Routes>
    );
  }
}

export default App