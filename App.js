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
import Detalles from "./views/Detalles";
import Perfil from "./views/Perfil";
import Usuario from "./views/Usuario";
import Editar from "./views/Editar";
import Fotos from "./views/Fotos";
import Configuracion from "./views/Configuracion";
import Seguridad from "./views/Seguridad";
import Terminos from "./views/Terminos";
import Preguntas from "./views/Preguntas";
import Contacto from "./views/Contacto";

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
      <Stack.Screen name="Detalles" component={Detalles} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Usuario" component={Usuario} />
      <Stack.Screen name="Editar" component={Editar} />
      <Stack.Screen name="Fotos" component={Fotos} />
      <Stack.Screen name="Configuracion" component={Configuracion} />
      <Stack.Screen name="Seguridad" component={Seguridad} />
      <Stack.Screen name="Terminos" component={Terminos} />
      <Stack.Screen name="Preguntas" component={Preguntas} />
      <Stack.Screen name="Contacto" component={Contacto} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App
const styles = StyleSheet.create({

});
