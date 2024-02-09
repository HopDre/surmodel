import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  const handleImagePicker = () => {
    const options = {
      title: 'Seleccione la imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Pick de imagen cancelado');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImages([...images, source]);
      }
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <View key={index} style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress(index)}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveImage(index)} style={styles.deleteButton}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    ));
  };

  const handleImagePress = (index) => {
    console.log('Imagen presionada:', index);
  };

  return (
    <View style={styles.contenedor}>
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
       <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>{renderImages()}</View>
      <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
        <Text style={styles.buttonText}>Añadir imagen</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 15,
    padding: 5,
  },
  contenedor:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
  button:{
    width: 230,
    backgroundColor: "#DE126D",
    marginBottom: 10,
    borderRadius:20,
  },
  buttonText:{
    color:"white",
    padding:10,
    textAlign:"center",
  }
});

export default Gallery;