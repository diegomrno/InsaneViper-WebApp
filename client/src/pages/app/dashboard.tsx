import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import '../../App.css';

import DashboardNavbar from '../../components/items/navbar/dashboard.navbar'
import ProgramCard from '../../components/items/cards/program.card'

class Dashboard extends Component<any, any> {
  render() {
    return (
        <div className='dashboard'>
            <DashboardNavbar />
        </div>
    );
  }
}

export default Dashboard