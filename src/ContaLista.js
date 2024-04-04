import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ContaLista({ nome, icone, setExibe }) {
    function ExibeReclamacao() {
        if (nome == "Reclamações") {
            setExibe(true);
        }
    }
    return (
        <Pressable style={css.container} onPress={ExibeReclamacao}>
            <Icon name={icone} size={50} />
            <Text style={css.nome}>{nome}</Text>
        </Pressable>

    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#E2DAB9"
    },
    nome: {
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center"
    },
})