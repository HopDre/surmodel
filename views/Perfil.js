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

const Perfil = () => {
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
        <Text style={styles.textoUno}>Mi perfil</Text>
        <View style={styles.content}>
          <View style={styles.textos}>
            <Text style={styles.nombre}>Macarena González</Text>
            <View style={styles.contenido}>
              <Icon name="envelope" size={20} color="white" />
              <Text style={styles.texts}>macarenagonzales@gmail.com</Text>
            </View>
            <View style={styles.contenido}>
              <Icon name="venus-mars" size={20} color="white" />
              <Text style={styles.texts}>Femenino</Text>
            </View>
            <View style={styles.contenido}>
              <Icon name="calendar" size={20} color="white" />
              <Text style={styles.texts}>01/01/1995</Text>
            </View>
            <View style={styles.contenido}>
              <Icon name="phone" size={20} color="white" />
              <Text style={styles.texts}>+569 1234 5678</Text>
            </View>
            <View style={styles.contenido}>
              <Icon name="bar-chart" size={20} color="white" />
              <Text style={styles.texts}>65kg</Text>
            </View>
            <View style={styles.contenido}>
              <Icon name="line-chart" size={20} color="white" />
              <Text style={styles.texts}>1.60m</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Editar")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Modificar perfil</Text>
          </View>
        </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Perfil;

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
  content: {
    marginVertical: 80,
    flex: 1,
    alignItems: "center",
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 40,
  },
  nombre: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  textos: {
    padding: 20,
    backgroundColor: "#DE126D",
    width: Dimensions.get("window").width,
  },
  contenido: {
    flexDirection: "row",
    marginBottom:10,
  },
  texts: {
    marginLeft: 20,
    color: "white",
    fontSize: 14,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    marginVertical:30,
  },
  buttonText: {
    color: "#DE126D",
    fontSize: 15,
  },
});
