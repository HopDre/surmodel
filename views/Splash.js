import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        },3000)
    },[])
  return (
    <View style={styles.contenedor}>
      <Animatable.Image
        source={require("../assets/images/surmodel.png")}
        style={styles.imagen} duration={2000} animation="zoomIn"
      ></Animatable.Image>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  imagen:{
    width: 150,
    height: 150,
    resizeMode: 'contain',
  }
});