import { useEffect, useState } from 'react';
import './App.css';
import { JsonAdapter } from './infrastructure/adapters/jsonAdapter';
import { Radar } from './domain/entities/Radar';
import { Report } from './domain/entities/Report';
import { RadarMethod } from './infrastructure/method/radarMethod';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PdfPage } from './component/pdfPage/PdfPage';
import { mensualReportsDoc } from './infrastructure/pdfConstructor/mensualReportsDoc';


function App() {

  var radars:Array<Radar>
  const reports:Report[][] = []
  const reportArray:Report[] = []
  const [date, setDate] = useState(0) 
  const [reportArrayMonthState, setReportArrayMonthState] = useState(new Array)
  const [reportArrayState, setReportArrayState] = useState(new Array)
  const [doc, setDoc] = useState({})

  const jsonAdapter = new JsonAdapter();
  const radarMethod = new RadarMethod()

  useEffect(() => {
    const reportsDay:Report[][] = []
    const reportArrayDay:Report[] = []
    const reportsMonth:Report[][] = []
    const reportArrayMonth:Report[] = []
    radars = jsonAdapter.getAllRadar();
      const reportDate = new Date(date)
      radars.forEach(radar => {
        
        reportsDay.push(radarMethod.getAllReportsFromDate(reportDate, radar))
        reportsMonth.push(radarMethod.getAllReportsFromMonth(reportDate, radar))
      });
      reportsDay.forEach(report => {
        report.forEach(reportItem => {
          reportArrayDay.push(reportItem);
          setReportArrayState(reportArrayDay)
        })
      });
      reportsMonth.forEach(report => {
        report.forEach(reportItem => {
          reportArrayMonth.push(reportItem);
          setReportArrayMonthState(reportArrayMonth)
        })
      });
  }, [date])

  useEffect(()=> {
    setDoc(mensualReportsDoc.createDocument(reportArrayMonthState))
  }, [reportArrayMonthState])

  return (
    <div className="App">
      <header className="App-header">
        <input type='date' id='date' onChange={(input) => {
          setDate(input.target.valueAsNumber)
        }}/>
        {reportArrayState.length > 0 && 
        <>
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
        {/* {reportArrayMonthState.length > 0 && 
        <PDFDownloadLink document={<PdfPage doc={doc}/>} fileName='rapport_radar' >
          {({ loading }) => 
            loading ? (
              <button>Loading document</button>
            ) : (
              <button>Générer le rapport des incidents en PDF</button>
            )
          }
        </PDFDownloadLink>} */}
        </>
        }
                
      </header>
    </div>
  );
}

export default App;
