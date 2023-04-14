import React from 'react'
import { Text, View } from '@react-pdf/renderer';

export default function SubTotal()
{
  
  function Option({label,content}:{label:string,content:string})
  {
    return (
      <View style={{width:150,display: "flex", flexDirection: "row",justifyContent:'space-between',gap:5}}>
        <View style={{width: 60,display: "flex", flexDirection: "row",justifyContent:'space-between'}}>
          <Text style={{display: "flex" }}>
            {label}
          </Text>
          <Text>
            :
          </Text>
        </View>
        <Text>{content}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "row",
        paddingHorizontal:5
      }}
    >
      <View style={{display:'flex',flexDirection:'column'}}>
        <Option label={"Otros Cargos"} content={"S/ 0.00 "} />
        <Option label={"Otros Tributos"} content={"S/ 0.00"} />
        <Option label={"ICBPER"} content={"S/ 0.00 "} />
        <Option label={"Importe Total"} content={"S/ 317.00 "} />
      </View>
    </View>
  );
}
