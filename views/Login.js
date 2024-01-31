import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null);
  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
        <View style={styles.foto}><Image source={require('../assets/images/logosurmodel.png')} style={styles.icon} /></View>
      <TextInput
        style={styles.inputs}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingrese su correo"
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordInputRef.current.focus();
        }}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.inputs}
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
        placeholder="Ingrese su contraseña"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contrasenia")}>
        <Text style={styles.forget}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <View style={styles.containerDos}>
      <Text style={styles.crear}>
        ¿No tienes una cuenta? 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <View style={styles.linkContainer}>
          <Text style={styles.crearLink}> Regístrate</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor:"black",
    justifyContent: 'center',
  },
  foto:{
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra los elementos horizontalmente
    padding: 8,
  },
  icon:{
    width:300,
    height:100,
    objectFit:"contain"
  },
  inputs: {
    height: 40,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 4,
    backgroundColor:"grey",
    marginBottom:40,
  },
  button: {
    backgroundColor: "#DE126D",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  forget: {
    textAlign: "center",
    marginTop: 20,
    color: "#DE126D",
    fontWeight: "500",
    fontSize:16,
  },
  containerDos: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crear: {
    fontSize: 16,
    color:"white"
  },
  crearLink: {
    color: '#DE126D',
    fontSize: 16,
    fontWeight: "500",
  },
});
