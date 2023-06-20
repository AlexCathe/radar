import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/gouv.png'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: 50,
    height: 50
  },
  title: {
    marginTop: 20,
    textAlign: "center"
  },
  report: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80%",
    marginTop: "15%"
  },
  theader: {
    border: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: "10%",
    marginRight: "10%",
    width: "100%"
  }

});

export const PdfPage = (props: any) => {

  console.log(props)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.section}>
            <Image src={logo} style={styles.image} />
          </View>
          <View style={styles.section}>
            <Text>Incidents</Text>
          </View>
        </View>

      </Page>

      {props.doc.document.pages && props.doc.document.pages.map((page: any) => {
        return (
          <Page >
            <View style={styles.report}>
              <View style={styles.theader}>
                <View>
                  <Text>Plaque d'immatriculation</Text>
                </View>
                <View>
                  <Text>Date du rapport</Text>
                </View>
              </View>
              {page.contenu.map((report: any) => {
                <View>
                  <Text>{report.vehicle.licensePlate}</Text>
                </View>
              })}
            </View>
          </Page>
        )
      })}

      <Page>
        <Text>{props.doc.document.nbIncidents} incidents pour ce mois</Text>
      </Page>
    </Document>
  )
}

