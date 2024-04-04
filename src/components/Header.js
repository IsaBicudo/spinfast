import { Image, StyleSheet, View } from 'react-native';


export default function Header() {
  return (
    <View style={css.header}>
      <Image style={css.logo} source={require("../../assets/logobus.png")} />
    </View>
  )
}

const css = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    top: 0,
    left: 0,
    backgroundColor: "#E2DAB9"
  },
  logo: {
    width: "100%",
    height: "119%",
    resizeMode: "contain"
  }
})
