
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default function Task32() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 32 - Video Player</Text>

      <Video
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        poster={{
          source: {
            uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
          },
          resizeMode: 'cover',
        }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
        paused={true}
      />

      <Text style={styles.caption}>
        Video with Poster Image
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  video: {
    width: '100%',
    height: 240,
    backgroundColor: '#000',
  },
  caption: {
    fontSize: 16,
    marginTop: 15,
  },
});
