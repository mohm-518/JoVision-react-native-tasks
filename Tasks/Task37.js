
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

function generateRandomText() {
  const wordsCount = Math.floor(Math.random() * 5) + 3;
  let words = [];

  for (let i = 0; i < wordsCount; i++) {
    const wordLength = Math.floor(Math.random() * 8) + 3;
    words.push(generateRandomWord(wordLength));
  }

  return words.join(' ');
}

function generateTexts() {
  return Array.from({length: 100}, (_, index) => ({
    id: index + 1,
    text: generateRandomText(),
  }));
}

export default function Task37() {
  const [texts, setTexts] = useState(generateTexts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setTexts(generateTexts());
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 37 - Pull to Refresh
      </Text>

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {texts.map(item => (
          <Text key={item.id} style={styles.textItem}>
            {item.id}. {item.text}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#1e293b',
  },
  scrollView: {
    flex: 1,
  },
  textItem: {
    fontSize: 16,
    color: '#334155',
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
});
