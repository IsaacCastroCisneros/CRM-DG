import React from 'react'
import { Page, Text, View, Document, StyleSheet,PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

export default function HeaderContent()
{

  function item(label:string,content:string)
  {
    return (
      <View style={{display:'flex',flexDirection:'row'}}>
        <View style={{display:'flex',width:100,flexDirection:'row',justifyContent:'space-between'}}>
          <Text>{label}</Text>
          <Text>: </Text>
        </View>
        <Text>
          {
            content
          }
        </Text>
      </View>
    );
  }

  return (
    <View style={{ display: "flex", flexDirection: "column",marginBottom:5}}>
      {
        item('Fecha de Vencimiento','lel')
      }
      {
        item('Fecha de Emisión','21/02/2023')
      }
      {
        item('Señor(es)','BILLY JUNIOR ICOMENA GUERRA')
      }
      {
        item('DNI','70525732')
      }
      {
        item('Tipo de Moneda','SOLES')
      }
      {
        item('Observación','CUOTA 1 DE 2 Y CUOTA 2 DE 2')
      }
    </View>
  );
}
