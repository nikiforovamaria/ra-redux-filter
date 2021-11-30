import React from 'react';
import './App.css';
import regeneratorRuntime from 'regenerator-runtime';
import ServiceAdd from './components/ServiceAdd.js';
import ServiceList from './components/ServiceList.js';
import ServiceFiltr from './components/ServiceFiltr.js';


export default function App() {

  return (
    <React.Fragment>
      <ServiceFiltr />
      <ServiceAdd />
      <ServiceList />
    </React.Fragment>
  );
}