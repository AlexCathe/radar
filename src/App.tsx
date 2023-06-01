import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsonAdapter } from './adapters/jsonAdapter';
import { Radar } from './entities/radar';
import { setConstantValue } from 'typescript';
import { Report } from './entities/report';

function App() {
  const [date, setDate] = useState(0) 
  var radars:Array<Radar>
  const reports:Report[][] = []
  const reportArray:Report[] = []
  if(JsonAdapter.getDatasFromJson() != undefined){
    radars = JsonAdapter.getDatasFromJson();
  };

  const handleValid = () => {
    if(radars){
      const reportDate = new Date(date)
      radars = radars.filter((radar) => radar != null)
      radars.forEach(radar => {
        reports.push(radar.getAllReportsFromDate(reportDate))
        reports.forEach(report => {
          report.forEach(reportItem => {
            reportArray.push(reportItem);
          })
          
        });
      });
    }
    console.log(reportArray)
  }

  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <input type='date' id='date' onChange={(input) => {setDate(input.target.valueAsNumber)}}/>
        <button type='button' onClick={() => handleValid()}>Valider</button>
      </header>
    </div>
  );
}

export default App;
