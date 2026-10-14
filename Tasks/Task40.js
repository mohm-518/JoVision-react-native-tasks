
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import {setText} from '../Redux/textSlice';

// Component One: Class Component
class ComponentOne extends Component {
  render() {
    const {text, setText} = this.props;

    return (
      <View style={styles.card}>
        <Text style={styles.label}>Component One (Class)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your text"
          value={text}
          onChangeText={setText}
        />

        <Text style={styles.result}>
          Your text: {text}
        </Text>
      </View>
    );
  }
}

// Connect Class Component to Redux
const ConnectedComponentOne = connect(
  state => ({
    text: state.text.value,
  }),
  {setText},
)(ComponentOne);

// Main Component
export default function Task40() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 40 - Redux Class Component
      </Text>

      <Button
        title={
          isVisible
            ? 'Hide Component One'
            : 'Show Component One'
        }
        onPress={() => setIsVisible(previous => !previous)}
      />

      {isVisible && <ConnectedComponentOne />}
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
