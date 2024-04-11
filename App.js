import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/Home';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Concluido from './src/Concluido';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AreadeCompra from './src/AreadeCompra';
import Minhaconta from './src/Minhaconta';
import Reclamacoes from './src/Reclamacoes';
import Localizacao from './src/Localizacao';

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
          headerShown: false,
          tabBarHideOnKeyboard: true
        }}
        >
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen
          name="Área de Compra"
          component={AreadeCompra}
          options={{
            tabBarLabel: 'Compra',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            )
          }} />
        <Tab.Screen
          name="Localização"
          component={Localizacao}
          options={{
            tabBarLabel: 'Localização',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
            )
          }} />
        <Tab.Screen
          name="Minha Conta"
          component={Minhaconta}
          options={{
            tabBarLabel: 'Minha Conta',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
