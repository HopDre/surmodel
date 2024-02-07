import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Configuracion = () => {
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
        <Text style={styles.textoUno}>Configuracion general</Text>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate("Seguridad")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Seguridad</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Terminos")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Términos y condiciones</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Preguntas")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Preguntas y respuestas</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.buttonClose}>
              <Text style={styles.buttonTextClose}>Cerrar sesión</Text>
              <Icon name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.buttonDelete}>
              <Text style={styles.buttonTextDelete}>Eliminar cuenta</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Configuracion;

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
  textoUno: {
    color: "white",
  },
  icono: {
    width: 80,
    height: 80,
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
  button: {
    backgroundColor: "#DE126D",
    marginVertical: 8,
    padding: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  content: {
    marginVertical: 40,
  },
  buttonClose: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonTextClose: {
    textAlign: "center",
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  buttonDelete: {
    backgroundColor: "red",
    marginVertical: 8,
    padding: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonTextDelete: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
