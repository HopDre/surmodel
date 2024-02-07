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

const Usuario = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    console.log("Solicitud eliminada");
  };

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
        <Text style={styles.textoUno}>Gestión de usuario</Text>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Perfil</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Fotos")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mis fotos</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Editar")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Editar cuenta</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Configuracion")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Configuración general</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Contacto</Text>
              <Icon name="chevron-right" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Usuario;

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
});
