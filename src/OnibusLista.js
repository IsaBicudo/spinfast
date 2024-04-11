import { StyleSheet, Text, View, Image } from "react-native";

export default function ProdutoLista({ imagem, nomeveiculo, nomecondutor }) {
    return (
        <View style={css.container}>
            <Image style={css.imagem} source={imagem} />
            <Text style={css.nomeveiculo}>{nomeveiculo}</Text>
            <Text style={css.nomecondutor}>{nomecondutor}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "85%",
        height: 212,
        backgroundColor: "#E2DAB9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 16
    },
    nomeveiculo: {
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 8,
        fontSize: 18
    },
    nomecondutor: {
        marginBottom: 3,
        fontSize: 15
    },
    imagem: {
        width: "100%",
        height: 120,
        resizeMode: "contain",
        marginTop: 8
    }
})