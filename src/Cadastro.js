import React from 'react'
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const image = require("../assets/cadastrar.png");

export default function Cadastro({ setLogado, setCadastro, setConcluido }) {

    const [erro, setErro] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmada, setConfirmada] = useState("");

    function Cadastrar() {
        if (nome == "") {
            setErro("Campo obrigatório");
        }
        if (cpf == "") {
            setErro("Campo obrigatório");
        }
        if (usuario == "") {
            setErro("Campo obrigatório");
        }
        if (email == "") {
            setErro("Campo obrigatório");
        }
        if (senha == "") {
            setErro("Campo obrigatório");
        }

        if (confirmada == "") {
            setErro("Campo obrigatório");
        }
        else {
            setLogado(true);
            setCadastro(false);
            setConcluido(true);
        }
    }
    function Voltar() {
        setLogado(false);
        setCadastro(false);
    }
    return (
        <View style={css.view}>
            <ImageBackground source={image} resizeMode="cover" style={css.image} >
                <Image style={css.logo} source={require('../assets/logobus.png')} />
                <ScrollView>
                    <TextInput
                        style={css.inputs}
                        placeholder="Nome Completo"
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setNome(digitado)}
                        value={nome}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TextInput style={css.inputs} placeholder="CPF"
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setCpf(digitado)}
                        value={cpf}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TextInput style={css.inputs} placeholder="Nome de Usuário"
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setUsuario(digitado)}
                        value={usuario}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TextInput style={css.inputs} placeholder="Email"
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setEmail(digitado)}
                        value={email}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TextInput style={css.inputs} placeholder="Senha" secureTextEntry={true}
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setSenha(digitado)}
                        value={senha}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TextInput style={css.inputs} placeholder="Confirmar Senha" secureTextEntry={true}
                        placeholderTextColor="black"
                        css={{
                            placeholderStyle: {
                                fontWeight: "bold",
                            },
                        }}
                        onChangeText={(digitado) => setConfirmada(digitado)}
                        value={confirmada}
                    />
                    {erro && <Text style={css.erro}>{erro}</Text>}
                    <TouchableOpacity style={css.btn} onPress={Cadastrar}>
                        <Text style={css.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn} onPress={Voltar}>
                        <Text style={css.btnText}>Voltar</Text>
                    </TouchableOpacity>
                </ScrollView>

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
    inputs: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '85%',
        height: 50,
        padding: 10,
        marginTop: 15,
        borderWidth: 0.3,
        marginBottom: 15,
        fontSize: 16.5,
        alignSelf: "center"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    logo: {
        width: "100%",
        height: "25%",
        resizeMode: "contain"
    },
    btn: {
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#E2DAB9",
        borderRadius: 5,
        marginTop: 18,
        marginBottom: 12,
        alignSelf: "center"
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
    erro: {
        fontSize: 11,
        color: "red",
        alignSelf: "center",
        width: "85%",
        marginBottom: 10,
        marginTop: -15
    },
})

