
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const images = {
  1: require('../Resource/image1.jpg'),
  2: require('../Resource/image2.jpg'),
  3: require('../Resource/image3.jpg'),
};

export default function Task27() {
  const [selectedImage, setSelectedImage] = useState(1);

  const handleOpenAlert = () => {
    Alert.alert('Choose Image', 'Select an image:', [
      {text: 'Image 1', onPress: () => setSelectedImage(1)},
      {text: 'Image 2', onPress: () => setSelectedImage(2)},
      {text: 'Image 3', onPress: () => setSelectedImage(3)},
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Selector</Text>

      <Image source={images[selectedImage]} style={styles.image} />

      <Text style={styles.subtitle}>
        Currently Displaying: Image {selectedImage}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleOpenAlert}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
