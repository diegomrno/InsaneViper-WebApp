import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import '../../App.css';

import DashboardNavbar from '../../components/items/navbar/dashboard.navbar'

class Dashboard extends Component<any, any> {
  render() {
    return (
        <div className='dashboard'>
            <DashboardNavbar></DashboardNavbar>
            <h1>TESTTESTETETTETETTETETETETETETETET</h1>
            

        </div>
    );
  }
}

export default Dashboard