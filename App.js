import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/Home';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Concluido from './src/Concluido';

const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false);
  const [cadastro, setCadastro] = useState(false);
  const [concluido, setConcluido] = useState(false);

  if (!logado) {
    return (<Login setLogado={setLogado} setCadastro={setCadastro} />)
  }

  if (cadastro) {
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} setConcluido={setConcluido} />)
  }

  if (concluido) {
    return (<Concluido setConcluido={setConcluido} setCadastro={setCadastro} setLogado={setLogado} />)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#E2DAB9" },
          tabBarLabelStyle: { color: "black" },
          headerTitleStyle: { color: "black" },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
