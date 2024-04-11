import React, { useState } from 'react'
import { ImageBackground, Image, View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import ContaLista from "./ContaLista";
import Reclamacoes from './Reclamacoes';

const imagem = require("../assets/usuario.png")
const image = require("../assets/conta.jpeg")


const conta = [
    {
        id: 1,
        icone: "user",
        nome: "Meus Dados"
    },
    {
        id: 2,
        icone: "bell",
        nome: "Notificações"
    },
    {
        id: 3,
        icone: "question-circle",
        nome: "Central de Ajuda"
    },
    {
        id: 4,
        icone: "exclamation-circle",
        nome: "Reclamações"
    },
]

export default function Minhaconta({ navigation }) {

    const [exibe, setExibe] = useState(false);

    if (exibe) {
        return (<Reclamacoes setExibe={setExibe} />)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.boxPerfil}>
                    <Image source={imagem} style={styles.imagem} />
                    <Text style={styles.textonome}>Juliana</Text>
                    <Text style={styles.textoemail}>juliana.juju@hotmail.com</Text>
                </View>
                <FlatList style={styles.lista}
                    data={conta}
                    renderItem={({ item }) => <ContaLista nome={item.nome} icone={item.icone} setExibe={setExibe} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        width: '50%',
                        padding: 10,
                        gap: 20,
                    }}
                    numColumns={2}>
                </FlatList>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Sair desta conta</Text>
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
        justifyContent: 'center'
    },
    boxPerfil: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    imagem: {
        width: "30%",
        height: 150,
        resizeMode: "contain",
    },
    textonome: {
        fontWeight: "bold",
        fontSize: 20
    },
    textoemail: {
        fontSize: 15
    },
    btn: {
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#E2DAB9",
        borderRadius: 5,
        marginBottom: 45,
        alignSelf: "center"
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
});