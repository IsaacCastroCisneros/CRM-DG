import React from 'react'
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent/MainContent';

export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 9,
  },
  section: {
    border: "1px solid #000",
  },
  title: {
    fontWeight: "bold",
  },
  headerContainer: {
    display: "flex",
    width: 300,
    flexDirection:'row',
    justifyContent: "space-between",
    border:'2px solid red'
  },
  border:
  {
    border:'1px solid #000'
  }
});


export default function MyPdf()
{
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={{ padding: 3, display: "flex" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={styles.title}>DESARROLLO GLOBAL</Text>
                <Text style={styles.title}>
                  CENTRO DE CAPACITACION Y DESARROLLO GLOBAL E.I.R.L
                </Text>
                <Text>JR. JULIO CESAR TELLO 741 URB. RISSO</Text>
                <Text>LINCE - LIMA - LIMA</Text>
              </View>
              <View
                style={{
                  border: "3px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Text>BOLETA DE VENTA ELECTRONICA</Text>
                <Text>RUC: 20544396791</Text>
                <Text>EB01-1421</Text>
              </View>
            </View>
            <Text
              style={{
                display: "flex",
                width: "100%",
                border: "1px solid #000",
                marginBottom: 5,
              }}
            ></Text>
            <HeaderContent/>
            <MainContent styles={styles} />
          </View>
        </View>
      </Page>
    </Document>
  );
}






