import React, { useState } from 'react'
import { Image, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const image = require("../assets/login.png");

export default function Login({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login() {
        Keyboard.dismiss();
        if (email == "i@i.com" && senha == "1234") {
            setLogado(true);
        }
    }

    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }


    return (
        <View style={css.view}>
            <ImageBackground source={image} resizeMode="cover" style={css.image} >

                <Image style={css.logo} source={require('../assets/logobus.png')} />

                <TextInput placeholder="Nome do Usuário"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    style={css.inputs} onChangeText={(digitado) => setEmail(digitado)} value={email} />
                <TextInput secureTextEntry={true} placeholder="Senha"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    style={css.inputs} onChangeText={(digitado) => setSenha(digitado)} value={senha} />
                <Text style={css.esqueci}>Esqueci minha senha</Text>
                <TouchableOpacity style={css.btn} onPress={Login}>
                    <Text style={css.btnText}>Login</Text>
                </TouchableOpacity>

                <Text style={css.nao}>Ainda não possui conta?</Text>
                <TouchableOpacity onPress={Cadastrar}>
                    <Text style={css.ue} >Cadastre-se</Text>
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
    },
    inputs: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '85%',
        height: 50,
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 0.8,
        alignSelf: "center",
        fontSize: 16.5
    },
    image: {
        display: "flex",
        justifyContent: 'flex-start',
        width: "100%",
        height: "100%",
    },
    logo: {
        width: "100%",
        height: "30%",
        resizeMode: "contain",
        marginTop: 70
    },
    btn: {
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#E2DAB9",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 80
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
    ue: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    nao: {
        textAlign: "center",
        fontSize: 14.2
    },
    esqueci: {
        width: "84%",
        alignSelf: "center",
        marginTop: -10
    }
})