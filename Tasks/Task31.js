
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Alert,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';

const initialImages = [
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

const ITEM_WIDTH = 166;

export default function Task31() {
  const [images, setImages] = useState(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState('');
  const flatListRef = useRef(null);
  const nextId = useRef(11);

  const handleImagePress = index => {
    Alert.alert(
      'Image Selected',
      `You have selected image : ${index + 1}`,
    );
  };

  const handleDuplicate = id => {
    setImages(currentImages => {
      const index = currentImages.findIndex(image => image.id === id);

      if (index === -1) {
        return currentImages;
      }

      const originalImage = currentImages[index];

      const duplicateImage = {
        id: String(nextId.current++),
        uri: originalImage.uri,
      };

      const updatedImages = [...currentImages];
      updatedImages.splice(index + 1, 0, duplicateImage);

      return updatedImages;
    });
  };

  const handleDelete = id => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setImages(currentImages =>
              currentImages.filter(image => image.id !== id),
            );
          },
        },
      ],
    );
  };

  const handleSubmit = () => {
    const index = Number(imageIndex);

    if (
      imageIndex.trim() === '' ||
      !Number.isInteger(index) ||
      index < 1 ||
      index > images.length
    ) {
      Alert.alert(
        'Invalid Index',
        `Enter a number from 1 to ${images.length}.`,
      );
      return;
    }

    setModalVisible(false);
    setImageIndex('');

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: index - 1,
        animated: true,
        viewPosition: 0.5,
      });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Image</Text>

      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Go to Image</Text>
      </Pressable>

      {images.length > 0 ? (
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
          renderItem={({item, index}) => (
            <View style={styles.imageContainer}>
              <Pressable
                onPress={() => handleImagePress(index)}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.image}
                />
              </Pressable>

              <Text style={styles.imageText}>
                Image {index + 1}
              </Text>

              <Pressable
                style={styles.duplicateButton}
                onPress={() => handleDuplicate(item.id)}
                hitSlop={8}>
                <Text style={styles.iconText}>+</Text>
              </Pressable>

              <Pressable
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
                hitSlop={8}>
                <Text style={styles.iconText}>×</Text>
              </Pressable>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No images available</Text>
      )}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Image Index</Text>

            <Text style={styles.instruction}>
              Enter a number from 1 to {images.length}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Image number"
              keyboardType="number-pad"
              value={imageIndex}
              onChangeText={setImageIndex}
              maxLength={4}
            />

            <Pressable
              style={styles.button}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    position: 'relative',
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
  duplicateButton: {
    position: 'absolute',
    top: 5,
    left: 13,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#34C759',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 13,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  emptyText: {
    textAlign: 'center',
    color: '#555555',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 15,
    color: '#555555',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
  },
  cancelButton: {
    marginTop: 5,
    padding: 10,
  },
  cancelText: {
    color: '#FF3B30',
    fontSize: 16,
  },
});
