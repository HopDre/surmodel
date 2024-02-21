import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Curriculum = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const navigation = useNavigation();

  const selectDocument = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      setSelectedDocument(document);
    } catch (err) {
      console.error("Error al seleccionar el documento:", err);
    }
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
        <Text style={styles.textoUno}>
          A modo de mejorar nuestro proceso de selección te pedimos que adjuntes
          tu CV actualizado, así te contactaremos de manera más rápida pudiendo
          ofrecerte las mejores oferta a tu medida
        </Text>
        <TouchableOpacity style={styles.button} onPress={selectDocument}>
          <Text style={styles.buttonText}>Seleccionar documento</Text>
        </TouchableOpacity>
        {selectedDocument && (
          <Text style={styles.selectedDocument}>
            Documento seleccionado: {selectedDocument.name}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 20,
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
  textoUno:{
    marginTop:50,
    marginBottom:50,
    color:"white",
    paddingHorizontal:20
  },
  selectedDocument: {
    marginTop: 20,
    fontSize: 16,
    color:"white"
  },
});

export default Curriculum;
