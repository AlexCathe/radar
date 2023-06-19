import { useState } from 'react';
import './App.css';
import { JsonAdapter } from './infrastructure/adapters/jsonAdapter';
import { Radar } from './domain/entities/radar';
import { Report } from './domain/entities/report';
import { RadarMethod } from './infrastructure/method/radarMethod';
import { setConstantValue } from 'typescript';
import { PdfGenerator } from './infra/PdfGenerator';

function App() {
  var radars:Array<Radar>
  const reports:Report[][] = []
  const reportArray:Report[] = []
  const [date, setDate] = useState(0) 
  const [reportArrayState, setReportArrayState] = useState(new Array)

  const jsonAdapter = new JsonAdapter();
  const radarMethod = new RadarMethod()

  if(jsonAdapter.getAllRadar() != undefined){
    radars = jsonAdapter.getAllRadar();
  };

  const handleValid = () => {
    const reports:Report[][] = []
    const reportArray:Report[] = []
    if(radars){
      const reportDate = new Date(date)
      radars.forEach(radar => {
        reports.push(radarMethod.getAllReportsFromDate(reportDate, radar))
        reports.forEach(report => {
          report.forEach(reportItem => {
            reportArray.push(reportItem);
            setReportArrayState(reportArray)
          })
        });
      });
    }
    console.log(reportArray)
   /* const fs = require('fs');
    const {parseString, Builder} = require('xml2json');
    
    const dataXml = fs.readFileSync('./data/radar.xml').toString();
    parseString(dataXml, function(err: Object, data: Object) {
      console.dir(data)
    })*/
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input type='date' id='date' onChange={(input) => {
          setDate(input.target.valueAsNumber)
        }}/>
        <button type='button' onClick={() => handleValid()}>Valider</button>
        {reportArrayState.length != 0 && 
        <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Vitesse autorisée</th>
                <th>Plaque d'immatriculation</th>
              </tr>
            </thead>
            <tbody>
              {reportArrayState.map(report => {
               return <tr>
                        <td>{report.date.getDate()}/{report.date.getMonth()+1 < 10 ? ""+report.date.getMonth()+1 : report.date.getMonth()}/{report.date.getFullYear()}</td>
                        <td>{report.speed}</td>
                        <td>{report.vehicle.licensePlate}</td>
                      </tr>
              })}
            </tbody>
        </table>
        }
        
        <PdfGenerator></PdfGenerator>
      </header>
    </div>
  );
}

export default App;
