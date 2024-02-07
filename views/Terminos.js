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

const Terminos = () => {
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
        <Text style={styles.textoUno}>Términos y condiciones</Text>
        <View style={styles.content}>
          <Text style={styles.textoUno}>
            Por favor, lee atentamente los siguientes términos y condiciones
            antes de utilizar nuestra aplicación. Al acceder y utilizar nuestros
            servicios, aceptas cumplir con estos términos y condiciones. Si no
            estás de acuerdo con alguno de los términos aquí establecidos, por
            favor, no utilices nuestra aplicación.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            1. Uso de la Aplicación: {"\n"}
            a. Nuestra aplicación proporciona una plataforma para que modelos en
            busca de empleo puedan crear perfiles, buscar oportunidades
            laborales, y conectarse con posibles empleadores. {"\n"}
            b. El uso de la aplicación está sujeto a las leyes y regulaciones
            locales, nacionales e internacionales aplicables. Los usuarios son
            responsables de cumplir con dichas leyes y regulaciones.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            2. Registro de Usuario: {"\n"}
            a. Para acceder a ciertas características de la aplicación, es
            necesario registrarse y crear una cuenta de usuario. {"\n"}
            b. Los usuarios son responsables de mantener la confidencialidad de
            sus credenciales de inicio de sesión y de cualquier actividad que
            ocurra en su cuenta.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            3. Perfiles de Usuario: {"\n"}
            a. Los usuarios son responsables de la precisión y veracidad de la
            información proporcionada en sus perfiles. {"\n"}
            b. Nos reservamos el derecho de suspender o eliminar cuentas de
            usuario que contengan información falsa, inapropiada o que incumpla
            estos términos y condiciones.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            4. Responsabilidad del Contenido: {"\n"}
            a. Los usuarios son los únicos responsables del contenido que
            publican en la aplicación, incluyendo texto, imágenes y cualquier
            otro tipo de contenido. {"\n"}
            b. Nos reservamos el derecho de eliminar cualquier contenido que
            consideremos inapropiado, ilegal o que viole los derechos de
            terceros.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            5. Privacidad: {"\n"}
            a. Respetamos la privacidad de nuestros usuarios. Por favor,
            consulta nuestra Política de Privacidad para obtener más información
            sobre cómo recopilamos, utilizamos y protegemos tus datos
            personales.{"\n"}
            b. Al utilizar nuestra aplicación, aceptas nuestra Política de
            Privacidad.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            6. Propiedad Intelectual: {"\n"}
            a. Todos los derechos de propiedad intelectual sobre la aplicación y
            su contenido son propiedad de nuestra empresa o de terceros
            licenciantes.{"\n"}
            b. Los usuarios no pueden copiar, modificar, distribuir, transmitir,
            exhibir, vender, licenciar o explotar de otra manera cualquier parte
            de la aplicación sin nuestro consentimiento previo por escrito.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            7. Modificaciones: {"\n"}
            Nos reservamos el derecho de modificar estos términos y condiciones
            en cualquier momento. Las modificaciones entrarán en vigor
            inmediatamente después de su publicación en la aplicación. El uso
            continuado de la aplicación después de cualquier modificación
            constituirá la aceptación de dichas modificaciones.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            8. Terminación:{"\n"}
            Nos reservamos el derecho de terminar o suspender tu acceso a la
            aplicación en cualquier momento y por cualquier motivo, sin previo
            aviso.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            9. Ley Aplicable: {"\n"}
            Estos términos y condiciones se rigen por las leyes del país donde
            está registrada nuestra empresa, sin tener en cuenta sus
            disposiciones sobre conflictos de leyes.
          </Text>
          <Text></Text>
          <Text style={styles.textoUno}>
            Al utilizar nuestra aplicación, aceptas estos términos y condiciones
            en su totalidad. Si tienes alguna pregunta o inquietud sobre estos
            términos, por favor contáctanos. Gracias por elegir nuestra
            aplicación.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Terminos;

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
