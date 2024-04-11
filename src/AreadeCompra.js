import { Text, View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from "react-native";
import { useState } from 'react';

const image = require("../assets/compra.jpeg")
const imagem = require("../assets/LogoSpinfast.png")

export default function AreadeCompra({ setFinalizar, setLocalizacao }) {

  function Finalizar() {
      alert("Compra efetuada com sucesso! Acompanhe a localização pelo menu Localização");

    
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image source={imagem} style={styles.imagem} />
        <ScrollView >
          <TextInput style={styles.input}
            placeholder="Ponto de Partida"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold", fontSize: "20%",
              },
            }}
          />
          <TextInput style={styles.input}
            placeholder="Destino"
            placeholderTextColor="black"

            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <TextInput style={styles.input}
            placeholder="Horário"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <TextInput style={styles.input}
            placeholder="Selecionar Ônibus"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <TextInput style={styles.input}
            placeholder="Forma de Pagamento"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText} onPress={Finalizar}>Finalizar</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: '85%',
    height: 50,
    padding: 10,
    marginTop: 24,
    borderWidth: 0.3,
    fontSize: 16.5,
    alignSelf: "center"
  },
  btn: {
    width: "85%",
    height: 50,
    color: "white",
    backgroundColor: "#E2DAB9",
    borderRadius: 5,
    marginTop: 45,
    marginBottom: 15,
    alignSelf: "center"
  },
  btnText: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    lineHeight: 50,
  },
  imagem: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    marginBottom: 2,
    marginTop: -13
  },
});