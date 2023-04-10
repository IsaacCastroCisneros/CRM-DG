import React from 'react'
import {Text, View} from '@react-pdf/renderer';

export default function Total()
{
  function Option({label,content}:{label:string,content:string})
  {
    return (
      <View
        style={{
          width: 200,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <View
          style={{
            width: 70,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ display: "flex" }}>{label}</Text>
          <Text>:</Text>
        </View>
        <Text
          style={{
            flex: "1",
            display: "flex",
            border: "1px solid #000",
            paddingHorizontal: 3,
          }}
        >
          {content}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal:5,
        paddingBottom:5
      }}
    >
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text>{"(*) Sin impuestos."}</Text>
        <Text>{"(**) Incluye impuestos, de ser Op. Gravada."}</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Text>
          SON: TRESCIENTOS DIECISIETE Y 00/100 SOLES
        </Text>
        <Option label={"Op. Gravada"} content="S/ 268.64" />
        <Option label={"Op. Exonerada"} content="S/ 268.64" />
        <Option label={"Op. Inafecta"} content="S/ 268.64" />
        <Option label={"ISC"} content="S/ 268.64" />
        <Option label={"IGV"} content="S/ 268.64" />
        <Option label={"ICBPER"} content="S/ 268.64" />
        <Option label={"Otros Cargos"} content="S/ 268.64" />
        <Option label={"Otros Tributos"} content="S/ 268.64" />
        <Option label={"Monto de Redondeo"} content="S/ 268.64" />
        <Option label={"Importe Total"} content="S/ 268.64" />
      </View>
    </View>
  );
}
