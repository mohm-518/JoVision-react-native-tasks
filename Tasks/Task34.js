import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useCurrentTime from '../Hooks/useCurrentTime';

export default function Task34() {
  const currentTime = useCurrentTime();

  const time = currentTime.toLocaleTimeString();
  const date = currentTime.toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Date & Time</Text>

      <Text style={styles.label}>Time</Text>
      <Text style={styles.time}>{time}</Text>

      <Text style={styles.label}>Date</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1e293b',
  },
  label: {
    fontSize: 18,
    color: '#64748b',
    marginTop: 15,
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 8,
  },
  date: {
    fontSize: 24,
    color: '#0f766e',
    marginTop: 8,
  },
});
