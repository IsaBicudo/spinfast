import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'

const image = require("../assets/Reclamacoes.jpeg")
export default function Reclamacoes({ setExibe }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.texto} >Conte-nos um pouco mais para que possamos te ajudar.</Text>
        <TextInput style={styles.input}
          placeholder="Selecionar Condutor"
          placeholderTextColor="black"
          css={{
            placeholderStyle: {
              fontWeight: "bold", fontSize: "20%",
            },
          }}
        />
        <TextInput style={styles.inputAqui}
          placeholder="Escreva aqui"
          placeholderTextColor="black"
          css={{
            placeholderStyle: {
              fontWeight: "bold", fontSize: "20%",
            },
          }}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setExibe(false)} style={styles.btn}>
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: '85%',
    height: 50,
    padding: 10,
    marginTop: 20,
    borderWidth: 0.3,
    fontSize: 17.5,
    alignSelf: "center"
  },
  inputAqui: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: '85%',
    height: 190,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 0.3,
    fontSize: 17.5,
    alignSelf: "center",
  },
  btn: {
    width: "85%",
    height: 50,
    color: "white",
    backgroundColor: "#E2DAB9",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 3,
    alignSelf: "center"
  },
  btnText: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    lineHeight: 50,
  },
})