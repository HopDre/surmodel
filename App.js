import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./views/Splash";
import Login from "./views/Login";
import Principal from "./views/Principal";
import Registro from "./views/Registro";
import Contrasenia from "./views/Contrasenia";
import Inicio from "./views/Inicio";
import Solicitudes from "./views/Solicitudes";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Contrasenia" component={Contrasenia} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Solicitudes" component={Solicitudes} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App
const styles = StyleSheet.create({

});
