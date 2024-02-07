import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { ImagePicker } from "expo-image-multiple-picker";
import { Button, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function Fotos() {
  const navigation = useNavigation();
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const closeImagePicker = (assets) => {
    setSelectedImages([...assets]);
    setShowImagePicker(false);
  };

  const ImagePickerContainer = () => {
    return (
      <View style={styles.imagePickerContainer}>
        <ImagePicker
          onSave={(assets) => closeImagePicker(assets)}
          onCancel={() => setShowImagePicker(false)}
          multiple
          limit={6}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showImagePicker && <ImagePickerContainer />}
      <Button
        style={styles.openBtn}
        mode="contained"
        onPress={() => setShowImagePicker((pre) => !pre)}
      >
        Seleccionar fotos
      </Button>

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
      <ScrollView>
        {selectedImages.map((item, index) => (
          <Card style={styles.cardContainer}>
            <Card.Cover source={{ uri: item.uri }} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    paddingBottom: 55,
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
  openBtn: {
    width: 230,
    backgroundColor: "#DE126D",
    marginBottom: 10,
  },
  imagePickerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    zIndex: 9,
  },
  cardContainer: {
    width: 230,
    marginTop: 20,
  },
});

export default Fotos;
