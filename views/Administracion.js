import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Picker } from "@react-native-picker/picker";

const MyTextInputWithIcon = ({
  iconName,
  placeholder,
  onChangeText,
  textColor,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color="white" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={[styles.input, { color: textColor || "#000" }]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const Administracion = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (itemValue) => {
    setSelectedGenre(itemValue);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Listado")}
        >
          <Icon name="paperclip" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require("../assets/images/surmodel.png")}
          style={styles.icono}
        />
        <Text style={{ color: "white", marginBottom: 20 }}>
          Descripción de empleo
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ingrese foto referencial al cargo/empresa</Text>
          </View>
        </TouchableOpacity>
        <MyTextInputWithIcon
          iconName="briefcase"
          placeholder="Cargo/función a desarrollar"
          textColor="white"
        />
        <MyTextInputWithIcon
          iconName="table"
          placeholder="Descripción del cargo"
          textColor="white"
        />
        <MyTextInputWithIcon
          iconName="map-pin"
          placeholder="Ubicación"
          textColor="white"
        />
        <MyTextInputWithIcon
          iconName="credit-card"
          placeholder="Pago del cargo"
          textColor="white"
        />

        <Text style={{ color: "white", marginBottom: 10, marginTop: 10 }}>
          Genero preferencial del cargo:
        </Text>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={handleGenreChange}
          style={{
            width: "100%",
            backgroundColor: "grey",
            height: 10,
            color: "white",
            marginBottom: 20,
          }}
          itemStyle={{ fontSize: 10, textAlign: "center" }}
        >
          <Picker.Item
            label="Masculino"
            value="masculino"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="Femenino"
            value="femenino"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
          <Picker.Item
            label="Otro"
            value="otro"
            style={{ fontSize: 13, padding: 0, color: "black" }}
          />
        </Picker>
        <MyTextInputWithIcon
          iconName="user"
          placeholder="Edad requerida"
          textColor="white"
          keyboardType="phone-pad"
        />

        <TouchableOpacity onPress={() => navigation.navigate("Listado")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Añadir</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Administracion;

const styles = StyleSheet.create({
  contenedor: {
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
  container: {
    marginVertical: 20,
    flexDirection: "column",
    width: "100%",
    padding:5,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "grey",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "white",
  },
  icono: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  picker: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    color: "black",
  },
  selectedText: {
    fontSize: 16,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#DE126D",
    padding: 10,
    borderRadius: 20,
    marginBottom: 30,
    alignItems: "center",
    width: 350,
    alignSelf: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    marginRight: 8,
    color: "white",
  },
});
