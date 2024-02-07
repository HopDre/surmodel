import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from "react-native";
import Mailer from "react-native-mail";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Contacto = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Solicitudes")}
        >
          <Icon name="paperclip" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Usuario")}
        >
          <Icon name="user" size={30} color="#38B6FF" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.contenedor}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require("../assets/images/surmodel.png")}
          style={styles.icono}
        />
        <Text style={styles.textoUno}>Formulario de contacto</Text>
        <Text style={styles.textoUno}>
            Si estás experimentando algun problema con la aplicación, ante alguna falla, comentario o dudas,
            contáctanos mediante este formulario y nos comunicaremos a la brevedad contigo para resolver tus dudas.
          </Text>
        <TextInput
          placeholder="Asunto"
          onChangeText={(text) => setSubject(text)}
          value={subject}
          style={styles.input}
        />
        <TextInput
          placeholder="Mensaje"
          onChangeText={(text) => setBody(text)}
          value={body}
          multiline
          style={styles.inputMsj}
          placeholderTextColor={"grey"}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Contacto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "black",
    alignItems: "center",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DE126D",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuItem: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  contenedor: {
    marginVertical: 20,
    flexDirection: "column",
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  textoUno: {
    color: "white",
    marginBottom: 20,
    textAlign:"center"
  },
  icono: {
    width: 80,
    height: 80,
  },
  inputMsj: {
    backgroundColor: "white",
    width: 300,
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#DE126D",
    marginVertical: 8,
    padding: 10,
    width: 300,
    paddingHorizontal: 20,
    borderRadius:20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  label: {
    color: "grey",
  },
});
