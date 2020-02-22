import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdSearch from './components/IdSearch/';
import NameSearch from './components/NameSearch/';
import ReportingArea from './components/ReportingArea/';

function App() {
	    return (
      <div>
	      <IdSearch/>
        <NameSearch/>
        <ReportingArea/>
      </div>
    );
  }

export default App;
