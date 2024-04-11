import { Text, View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from "react-native";
import { useState } from 'react';

const image = require("../assets/compra.jpeg")
const imagem = require("../assets/LogoSpinfast.png")

export default function AreadeCompra() {

    const [erro, setErro] = useState("");
    const [ponto, setPonto] = useState("");
    const [destino, setDestino] = useState("");
    const [horario, setHorario] = useState("");
    const [onibus, setOnibus] = useState("");
    const [pagamento, setPagamento] = useState("");

  function AreadeCompra() {
    if (ponto == "") {
      setErro("Campo obrigatório");
  }
  if (destino == "") {
      setErro("Campo obrigatório");
  }
  if (horario == "") {
      setErro("Campo obrigatório");
  }
  if (onibus == "") {
      setErro("Campo obrigatório");
  }
  if (pagamento == "") {
      setErro("Campo obrigatório");
  }

  else {
    alert("Compra efetuada com sucesso! Acompanhe a localização pelo menu Localização.");
  }

    
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
            onChangeText={(digitado) => setPonto(digitado)}
            value={ponto}
          />
          {erro && <Text style={styles.erro}>{erro}</Text>}
          <TextInput style={styles.input}
            placeholder="Destino"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
            onChangeText={(digitado) => setDestino(digitado)}
            value={destino}
          />
          {erro && <Text style={styles.erro}>{erro}</Text>}
          <TextInput style={styles.input}
            placeholder="Horário"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
            onChangeText={(digitado) => setHorario(digitado)}
            value={horario}
          />
          {erro && <Text style={styles.erro}>{erro}</Text>}
          <TextInput style={styles.input}
            placeholder="Selecionar Ônibus"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
            onChangeText={(digitado) => setOnibus(digitado)}
            value={onibus}
          />
          {erro && <Text style={styles.erro}>{erro}</Text>}
          <TextInput style={styles.input}
            placeholder="Forma de Pagamento"
            placeholderTextColor="black"
            css={{
              placeholderStyle: {
                fontWeight: "bold",
              },
            }}
            onChangeText={(digitado) => setPagamento(digitado)}
            value={pagamento}
          />
          {erro && <Text style={styles.erro}>{erro}</Text>}
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText} onPress={AreadeCompra}>Finalizar</Text>
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
  erro: {
    fontSize: 11,
    color: "red",
    alignSelf: "center",
    width: "85%",
    marginBottom: 10
  },
});