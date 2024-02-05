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

const Detalles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Icon name="home" size={30} color="#38B6FF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Solicitudes")}
        >
          <Icon name="paperclip" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="user" size={30} color="white" />
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
        <View style={styles.content}>
          <Image
            source={require("../assets/images/coca.jpeg")}
            style={styles.foto}
          />
          <Text style={styles.titulo}>Promoción final copa América</Text>
          <Text style={styles.subtitulo}>Detalles de la oferta</Text>
          <Text style={styles.textos}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </Text>
          <View style={styles.iconosTextos}>
            <View style={styles.iconoTexto}>
            <Icon name="map" size={30} color="#DE126D" />
            <Text style={styles.subtitulo}>La Serena</Text>
            </View>
            <View style={styles.iconoTexto}>
            <Icon name="money" size={30} color="#DE126D" />
            <Text style={styles.subtitulo}>$50.000</Text>
            </View>
          </View>
          <Text style={styles.subtituloFinal}>Requisitos adicionales</Text>
          <View style={styles.requisitos}>
            <View style={styles.adicionales}>
                <Text style={styles.tituloAdicional}>Género</Text>
                <Text style={styles.textos}>Femenino</Text>
            </View>
            <View style={styles.adicionales}>
                <Text style={styles.tituloAdicional}>Edad</Text>
                <Text style={styles.textos}>+18</Text>
            </View>
            <View style={styles.adicionales}>
                <Text style={styles.tituloAdicional}>Estatura</Text>
                <Text style={styles.textos}>+1.70m</Text>
            </View>
            <View style={styles.adicionales}>
                <Text style={styles.tituloAdicional}>Peso</Text>
                <Text style={styles.textos}>N/A</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Postular</Text>
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detalles;

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
  foto: {
    width: Dimensions.get("window").width,
    height: 90,
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
    borderRadius: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "#DE126D",
    fontWeight:"500",
    fontSize:18,
  },
  titulo: {
    color: "white",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
  },
  subtitulo: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "500",
  },
  textos:{
    color:"white",
    marginHorizontal:10,
    marginBottom:40,
  },
  iconoTexto:{
    flexDirection:"row",
  },
  iconosTextos:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20,
    marginBottom:40,
  },
  tituloAdicional:{
    color:"white",
    width:"30%",
    fontWeight:"600",
  },
  adicionales:{
    flexDirection:"row",
  },
  requisitos:{
    marginHorizontal:10,
  },
  subtituloFinal: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "500",
    marginBottom:20,
  },
  content:{
    marginBottom:40,
  }
});
