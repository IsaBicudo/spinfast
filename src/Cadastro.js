import React from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Cadastro({ setLogado, setCadastro }) {
    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

    return (
        <View style={css.view}>
            <TextInput style={css.inputs} />
            <TextInput style={css.inputs} />
            <TouchableOpacity onPress={Cadastrar}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text>Voltar</Text>
            </TouchableOpacity>
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
        width: "90%",
        borderWidth: 1,
        marginTop: 25
    }
})
