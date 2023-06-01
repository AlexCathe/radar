import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsonAdapter } from './adapters/jsonAdapter';
import { Radar } from './entities/radar';
import { setConstantValue } from 'typescript';
import { Report } from './entities/report';
import { XmlChecker } from './checker/XmlChecker';

function App() {
  var radars:Array<Radar>
  const reports:Report[][] = []
  const reportArray:Report[] = []
  const [date, setDate] = useState(0) 

  if(JsonAdapter.getDatasFromJson() != undefined){
    radars = JsonAdapter.getDatasFromJson();
  };

  const handleValid = () => {
    const reports:Report[][] = []
    const reportArray:Report[] = []
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
    const fs = require('fs');
    const {parseString, Builder} = require('xml2json');
    
    const dataXml = fs.readFileSync('./data/radar.xml').toString();
    parseString(dataXml, function(err: Object, data: Object) {
      console.dir(data)
    })
  };

    
    // XmlChecker.checkXmlFormat(dataXml)

  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <input type='date' id='date' onChange={(input) => {
          setDate(input.target.valueAsNumber)
        }}/>
        <button type='button' onClick={() => handleValid()}>Valider</button>
      </header>
    </div>
  );
}

export default App;
