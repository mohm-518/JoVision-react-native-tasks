
import React, {createContext, useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';


const TextContext = createContext();
class ComponentOne extends React.Component {
  static contextType = TextContext;

  render() {
    return (
      <Text style={styles.sharedText}>
        Shared Text: {this.context.text}
      </Text>
    );
  }
}


function ComponentTwo({number}) {
  const {text, setText} = useContext(TextContext);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        Component Two - Version {number}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />

      <ComponentOne />
    </View>
  );
}


export default function Task38() {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{text, setText}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          Task 38 - Context Sharing
        </Text>

        <ComponentTwo number={1} />
        <ComponentTwo number={2} />
        <ComponentTwo number={3} />
        <ComponentTwo number={4} />
      </ScrollView>
    </TextContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
    backgroundColor: '#ffffff',
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 10,
    color: '#111827',
  },
  sharedText: {
    fontSize: 17,
    color: '#2563eb',
    marginTop: 5,
  },
});
