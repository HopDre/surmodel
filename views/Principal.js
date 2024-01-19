import React, { useState, useRef } from "react";
import {
  View,
  Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Principal = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:100}}>
       <Text>texto de prueba</Text>
    </View>
  );
};

export default Principal;