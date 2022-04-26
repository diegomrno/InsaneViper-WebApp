import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Dashboard from './pages/app/dashboard'
import DashboardNavbar from './components/items/navbar/dashboard.navbar'
import Example from './components/testcomponent'

class App extends Component<any, any> {
  render() {
    return (
        <Routes>
          <Route path='*' element={<Dashboard />}/>
          <Route path='/dashboard' element={<DashboardNavbar />}/>
          <Route path='/test' element={<Example />}/>
          <Route path='/account/login' element={<Example />}/>
          <Route path='/account/signup' element={<Example />}/>
          <Route path='/account/login' element={<Example />}/>

        </Routes>
    );
  }
}

export default App