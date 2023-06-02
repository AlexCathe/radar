import { useState } from 'react';
import './App.css';
import { JsonAdapter } from './infrastructure/adapters/jsonAdapter';
import { Radar } from './domain/entities/radar';
import { Report } from './domain/entities/report';
import { RadarMethod } from './infrastructure/method/radarMethod';

function App() {
  var radars:Array<Radar>
  const reports:Report[][] = []
  const reportArray:Report[] = []
  const [date, setDate] = useState(0) 

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
          })
        });
      });
    }

  };
  
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
