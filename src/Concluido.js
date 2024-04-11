import { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const image = require("../assets/concluido.png");

export default function Concluido({ setCadastro, setConcluido, setLogado }) {

    function Voltar() {
        setConcluido(false);
        setLogado(false);
        setCadastro(false);
    }

    return (
        <View style={css.view}>

            <ImageBackground source={image} resizeMode="cover" style={css.image} >

                <Image style={css.logo} source={require('../assets/logobus.png')} />

                <Text style={css.Text}>Cadastro Concluído com Sucesso!</Text>

                <Text style={css.Textmeio}>Muito obrigado por se cadastrar em nosso site!</Text>

                <Text style={css.Textfinal}>Clique em “Login” para ser dirigido a página de Login.</Text>

                <TouchableOpacity style={css.btn} onPress={Voltar}>
                    <Text style={css.btnText}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: "100%",
        height: "25%",
        resizeMode: "contain",
        marginBottom: 150
    },
    btn: {
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#E2DAB9",
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 40,
        alignSelf: "center"
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    Text: {
        textAlign: "center",
        fontSize: 22,
        marginBottom: 20,
        fontWeight: "bold"
    },
    Textmeio: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 150
    },
    Textfinal: {
        textAlign: "center",
        fontSize: 20
    }
})