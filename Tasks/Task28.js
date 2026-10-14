
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

const images = [
  {id: '1', uri: 'https://picsum.photos/id/10/200/200'},
  {id: '2', uri: 'https://picsum.photos/id/11/200/200'},
  {id: '3', uri: 'https://picsum.photos/id/12/200/200'},
  {id: '4', uri: 'https://picsum.photos/id/13/200/200'},
  {id: '5', uri: 'https://picsum.photos/id/14/200/200'},
  {id: '6', uri: 'https://picsum.photos/id/15/200/200'},
  {id: '7', uri: 'https://picsum.photos/id/16/200/200'},
  {id: '8', uri: 'https://picsum.photos/id/17/200/200'},
  {id: '9', uri: 'https://picsum.photos/id/18/200/200'},
  {id: '10', uri: 'https://picsum.photos/id/19/200/200'},
];

export default function Task28() {
  const handleImagePress = index => {
    Alert.alert(
      'Image Selected',
      `You have selected image : ${index + 1}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Image</Text>

      <FlatList
        data={images}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => handleImagePress(index)}
            style={styles.imageContainer}>
            <Image
              source={{uri: item.uri}}
              style={styles.image}
            />
            <Text style={styles.imageText}>
              Image {index + 1}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#000000',
  },
  imageContainer: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageText: {
    marginTop: 8,
    fontSize: 16,
    color: '#000000',
  },
});
