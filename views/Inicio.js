import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";

const Inicio = () => {
  const navigation = useNavigation();
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (itemValue) => {
    setSelectedGenre(itemValue);
  };

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
        <Text style={styles.textoUno}>Tenemos estas ofertas para ti</Text>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={handleGenreChange}
          style={{
            width: "90%",
            backgroundColor: "grey",
            height: 10,
            color: "white",
            marginBottom: 20,
          }}
          itemStyle={{ fontSize: 10, textAlign: "center" }}
        >
          <Picker.Item
            label="Seleccione Región/Ciudad"
            value="default"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="Temuco"
            value="temuco"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="Santiago"
            value="santiago"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="La serena"
            value="serena"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="Valparaiso"
            value="Valparaiso"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
        </Picker>
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
                <Text style={styles.buttonText}>Ver oferta</Text>
              </View>
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
                <Text style={styles.buttonText}>Ver oferta</Text>
              </View>
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
                <Text style={styles.buttonText}>Ver oferta</Text>
              </View>
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
                <Text style={styles.buttonText}>Ver oferta</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inicio;

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
  ofertas:{
    marginBottom:80
  }
});
