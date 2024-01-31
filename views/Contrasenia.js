import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyTextInputWithIcon = ({
  iconName,
  placeholder,
  onChangeText,
  textColor,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color="white" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={[styles.input, { color: textColor || "#000" }]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const Contrasenia = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.contenedor}>
        <Image
          source={require("../assets/images/surmodel.png")}
          style={styles.icono}
        />
        <MyTextInputWithIcon
          iconName="envelope"
          placeholder="Ingrese su correo"
          textColor="white"
          keyboardType="email-address"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Enviar correo</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

export default Contrasenia;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "grey",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
    color: "white",
  },
  input: {
    flex: 1,
    height: 40,
    color: "white",
  },
  icono: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#DE126D",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "center",
    width:250,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
