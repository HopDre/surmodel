import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Text } from "react-native-elements";

const IconButton = ({ iconName, buttonText, onPress }) => {
  return (
    <Button
      icon={
        <Icon
          name={iconName}
          size={20}
          color="white"
          marginRight={10}
        />
      }
      title={buttonText}
      onPress={onPress}
      buttonStyle={{ backgroundColor: "black", borderRadius:20 }}
      
    />
  );
};

const Solicitudes = () => {
  const handleButtonPress = () => {
    console.log("Solicitud eliminada");
  };

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
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="paperclip" size={30} color="#38B6FF" />
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
        <Text style={styles.textoUno}>Solicitudes activas</Text>
        <View style={styles.ofertas}>
          <View style={styles.cont}>
            <View style={styles.elementos}>
              <Image
                source={require("../assets/images/coca.jpeg")}
                style={styles.icono}
              />
              <View style={styles.textos}>
                <Text style={styles.texts}>Promoción final copa américa</Text>
                <Text style={styles.texts}>La serena</Text>
                <Text style={styles.texts}>$50.000</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Detalles")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Revisar detalles</Text>
              </View>
              <IconButton
                iconName="trash"
                buttonText="Elimar solicitud"
                onPress={handleButtonPress}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cont}>
            <View style={styles.elementos}>
              <Image
                source={require("../assets/images/falabella.jpg")}
                style={styles.icono}
              />
              <View style={styles.textos}>
                <Text style={styles.texts}>Fashion Week Santiago</Text>
                <Text style={styles.texts}>Santiago</Text>
                <Text style={styles.texts}>$50.000</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Detalles")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Revisar detalles</Text>
              </View>
              <IconButton
                iconName="trash"
                buttonText="Eliminar solicitud"
                onPress={handleButtonPress}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cont}>
            <View style={styles.elementos}>
              <Image
                source={require("../assets/images/gatorade.png")}
                style={styles.icono}
              />
              <View style={styles.textos}>
                <Text style={styles.texts}>Maratón de Santiago</Text>
                <Text style={styles.texts}>La serena</Text>
                <Text style={styles.texts}>$50.000</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Detalles")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Revisar detalles</Text>
              </View>
              <IconButton
                iconName="trash"
                buttonText="Eliminar solicitud"
                onPress={handleButtonPress}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cont}>
            <View style={styles.elementos}>
              <Image
                source={require("../assets/images/coca.jpeg")}
                style={styles.icono}
              />
              <View style={styles.textos}>
                <Text style={styles.texts}>Promoción final copa américa</Text>
                <Text style={styles.texts}>La serena</Text>
                <Text style={styles.texts}>$50.000</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Detalles")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Revisar detalles</Text>
              </View>
              <IconButton
                iconName="trash"
                buttonText="Eliminar solicitud"
                onPress={handleButtonPress}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Solicitudes;

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
  textoUno: {
    color: "white",
    marginVertical: 20,
  },
  textos: {
    marginHorizontal: 20,
  },
  texts: {
    color: "white",
    marginBottom: 5,
  },
  elementos: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cont: {
    marginVertical: 20,
    backgroundColor: "#DE126D",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    marginVertical: 10,
    padding: 8,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#DE126D",
  },
  ofertas: {
    marginBottom: 80,
  },
});
