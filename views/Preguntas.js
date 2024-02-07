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

const Preguntas = () => {
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
        <Text style={styles.textoUno}>Preguntas frecuentes</Text>
        <View style={styles.content}>
          <Text style={styles.textoUno}>
            ¿Cómo puedo registrarme en la aplicación?{"\n"}
            Para registrarte en nuestra aplicación, simplemente descarga la
            aplicación desde la tienda de aplicaciones correspondiente a tu
            dispositivo móvil y sigue las instrucciones de registro
            proporcionadas. Deberás completar un formulario con información
            básica y crear una cuenta de usuario. {"\n"}
            {"\n"}
            ¿Qué tipo de información debo proporcionar al crear mi perfil de
            usuario? {"\n"}
            Al crear tu perfil de usuario, te recomendamos proporcionar
            información precisa y completa. También puedes cargar fotos
            profesionales que muestren tu apariencia y estilo.{"\n"}
            {"\n"}
            ¿Cómo puedo buscar oportunidades de empleo en la aplicación? {"\n"}
            Nuestra aplicación ofrece una herramienta de búsqueda que te
            permiten encontrar oportunidades de empleo de acuerdo a tus
            preferencias y habilidades. Puedes buscar por ubicación mejorando de
            esta manera tu experiencia de busqueda.{"\n"}
            {"\n"}
            ¿Qué debo hacer si encuentro una oportunidad de empleo que me
            interesa?{"\n"}
            Si encuentras una oportunidad de empleo que te interesa, puedes
            enviar una solicitud a través de la aplicación. Asegúrate de leer
            detenidamente los detalles del trabajo. {"\n"}
            {"\n"}
            ¿Es seguro proporcionar mi información personal a través de la
            aplicación?{"\n"}
            Nos tomamos muy en serio la privacidad y seguridad de nuestros
            usuarios. Utilizamos medidas de seguridad avanzadas para proteger tu
            información personal y garantizar que tu experiencia en nuestra
            aplicación sea segura. Además, recomendamos a los usuarios que
            revisen nuestra política de privacidad para obtener más información
            sobre cómo protegemos tus datos personales. {"\n"}
            {"\n"}
            ¿Qué debo hacer si tengo problemas técnicos con la aplicación?{"\n"}
            Si experimentas problemas técnicos con nuestra aplicación, te
            recomendamos que primero consultes nuestra sección de ayuda dentro
            de la aplicación para obtener posibles soluciones a problemas
            comunes. Si el problema persiste, puedes ponerte en contacto con
            nuestro equipo de soporte técnico para recibir asistencia adicional.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Preguntas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    marginVertical: 40,
  },
});
