
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';

export default function Task33() {
  const [paused, setPaused] = useState(true);
  const videoRef = useRef(null);

  const togglePlayback = () => {
    setPaused(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 33 - Video Player</Text>

      <Pressable
        style={styles.videoContainer}
        onPress={togglePlayback}
      >
        <Video
          ref={videoRef}
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
          controls={false}
          resizeMode="contain"
          paused={paused}
        />

        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>
            {paused ? '▶' : '❚❚'}
          </Text>
        </View>
      </Pressable>

      <Text style={styles.caption}>
        Tap the video to Play / Pause
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
  videoContainer: {
    width: '100%',
    height: 240,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0009',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 27,
  },
  caption: {
    fontSize: 16,
    marginTop: 15,
  },
});
