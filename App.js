import React, { useState } from "react";
import {  Text,  View,  StyleSheet,  Image,  TouchableOpacity,  Alert,} from "react-native";
import ImagePicker from "react-native-image-picker"; 

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: "Selecciona una imagen",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("El usuario canceló la selección de imagen");
      } else if (response.error) {
        console.log("Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Hola :D</Text>
      
      {selectedImage ? (
        <Image source={selectedImage} style={style.Image} />
      ) : (
        <Image source={require("./assets/Smiley.png")} style={style.Image} />
      )}    
      <TouchableOpacity style={style.button} onPress={handleImagePicker}>
        <Text style={style.buttonText}>Cambiar imagen</Text>
      </TouchableOpacity>

      <input style ={style.input} placeholder="Ingresa tu nombre de usuario"></input>
      <input style ={style.input} placeholder="Ingresa tu contraseña"></input>
      <TouchableOpacity 
      style= {style.button}
      onPress={() => console.log('Hola :v')}>
        <Text style ={style.buttonText}>Ingresa</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  title: { fontSize: 34, color: "white" },
  Image: { height: 300, width: 300 },
  input: { height: 20, width: 200, borderRadius: 5, backgroundColor: "white", margin: 20 },
  button: { backgroundColor: "blue", padding: 7, marginTop: 10 },
  buttonText: { color: "white", fontSize: 20 },
});

export default App;
