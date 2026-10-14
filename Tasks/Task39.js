
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setText} from '../Redux/textSlice';

// Component One
function ComponentOne() {
  const text = useSelector(state => state.text.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Component One</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        value={text}
        onChangeText={value => dispatch(setText(value))}
      />

      <Text style={styles.result}>Your text: {text}</Text>
    </View>
  );
}

// Main Component
export default function Task39() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 39 - Redux State
      </Text>

      <Button
        title={isVisible ? 'Hide Component One' : 'Show Component One'}
        onPress={() => setIsVisible(previous => !previous)}
      />

      {isVisible && <ComponentOne />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e293b',
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 48,
    color: '#111827',
  },
  result: {
    marginTop: 12,
    fontSize: 16,
    color: '#2563eb',
  },
});
