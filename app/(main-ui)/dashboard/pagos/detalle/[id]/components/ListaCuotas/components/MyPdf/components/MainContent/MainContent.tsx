import React from 'react'
import { Text, View} from '@react-pdf/renderer';
import SubTotal from './components/Subtotal';
import Total from './components/Total';

export default function MainContent({styles}:{styles:any})
{
  interface props
  {
    cantidad:string;
    unidad:string;
    descripcion:string;
    valor:string;
    descuento:string;
    importe:string;
    icbper:string;
    isCenter?:boolean;
    isBorder?:boolean
  }

  function Row({
    cantidad,
    unidad,
    descripcion,
    valor,
    descuento,
    importe,
    icbper,
    isCenter = true,
    isBorder=false
  }: props) {
    const align = isCenter ? "center" : "right";
    return (
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          borderBottom: isBorder ? "1px solid #000" : "",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            flex: "1",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {cantidad}
        </Text>
        <Text
          style={{
            flex: ".8",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {unidad}
        </Text>
        <Text
          style={{
            flex: "1",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {descripcion}
        </Text>
        <Text
          style={{
            flex: "1",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {valor}
        </Text>
        <Text
          style={{
            flex: "1",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {descuento}
        </Text>
        <Text
          style={{
            flex: "1",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {importe}
        </Text>
        <Text
          style={{
            flex: ".7",
            textAlign: align,
            paddingHorizontal: 2,
            display: "flex",
          }}
        >
          {icbper}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.border}>
      <Row
        cantidad={"Cantidad"}
        unidad={"Unidad Medida"}
        descripcion={"Descripción"}
        valor={"Valor Unitario(*)"}
        descuento={"Descuento(*)"}
        importe={"Importe de Venta(**)"}
        icbper="ICBPER"
        isBorder={true}
      />
      <Row
        cantidad={"1.00"}
        unidad={"UNIDAD"}
        descripcion={"CURSO DE ALTA ESPECIALIZACION SISTEMA INTEGRADO DE GESTION ADMINISTRATIVA - MODULO PATRIMONIO Y TESORERIA."}
        valor={"268.644"}
        descuento={"0.00 "}
        importe={"316.99992"}
        icbper="0.00"
        isCenter={false}
      />
      <SubTotal/>
      <View style={{display:'flex',marginVertical:8,borderBottom:'2px solid #4682b4',width:'97%',marginHorizontal:'auto'}}></View>
      <Total/>
    </View>
  );
}
