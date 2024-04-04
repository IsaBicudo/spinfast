import { SectionList, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import OnibusLista from "./OnibusLista";
import { useState } from "react";
import Header from "./components/Header";

const image = require("../assets/home.png");

const lista = [
    {
        title: 'Rotas Mais Recentes:',
        data: [
            {
                id: 1,
                imagem: require("../assets/tupi.png"),
                nomeveiculo: "Tupi",
                nomecondutor: "Marcos Santos"
            },
            {
                id: 2,
                imagem: require("../assets/cometa.png"),
                nomeveiculo: "Cometa",
                nomecondutor: "Lucas Silva"
            },
            {
                id: 3,
                imagem: require("../assets/itapimirim.png"),
                nomeveiculo: "Itapemirim",
                nomecondutor: "Pedro Oliveira"
            },
            {
                id: 4,
                imagem: require("../assets/santacruz.png"),
                nomeveiculo: "Santa Cruz",
                nomecondutor: "Mateus Souza"
            }
        ],
    },
    {
        title: "Ônibus Mais Próximos:",
        data: [
            {
                id: 5,
                imagem: require("../assets/dutra.png"),
                nomeveiculo: "Cidade Dutra",
                nomecondutor: "João Pereira"
            },
            {
                id: 6,
                imagem: require("../assets/aguiabranca.png"),
                nomeveiculo: "Águia Branca",
                nomecondutor: "Thiago Rodrigues"
            },
            {
                id: 7,
                imagem: require("../assets/garcia.png"),
                nomeveiculo: "Garcia",
                nomecondutor: "Felipe Pereira"
            },
            {
                id: 8,
                imagem: require("../assets/gontijo.png"),
                nomeveiculo: "Gontijo",
                nomecondutor: "Rafael Ferreira"
            },
            {
                id: 9,
                imagem: require("../assets/catarinense.png"),
                nomeveiculo: "Catarinense",
                nomecondutor: "Bruno Almeida"
            },
            {
                id: 10,
                imagem: require("../assets/sorriso.png"),
                nomeveiculo: "Cidade Sorriso",
                nomecondutor: "Gabriel Costa"
            }
        ]
    }
]


export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <SectionList
                    sections={lista}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <OnibusLista nomeveiculo={item.nomeveiculo} nomecondutor={item.nomecondutor} imagem={item.imagem} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.titleHeader}>{title}</Text>
                    )}
                    numCollums={2}
                />
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
    titleHeader: {
        fontSize: 18,
        marginLeft: 22,
        marginTop: 25,
        fontWeight: "bold"
    },
    logo: {
        backgroundColor: "#E2DAB9",
        width: "100%",
        height: 90,
        resizeMode: "contain"        
    }
})