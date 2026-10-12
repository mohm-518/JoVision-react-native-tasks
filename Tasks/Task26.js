
import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const getIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org/');
      const result = await response.text();
      setIp(result);
    } catch (error) {
      setIp('Failed to get IP');
    }
  };

  const getIPBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org/');
      const result = await response.text();
      setIp(result);
    } catch (error) {
      setIp('Failed to get IP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{color: 'black', fontSize: 18, marginBottom: 20}}>
        IP Address: {ip || 'Not loaded yet'}
      </Text>

      <Button title="Get IP (Non-blocking)" onPress={getIP} />

      <View style={{height: 20}} />

      <Button
        title="Get IP (Blocking)"
        onPress={getIPBlocking}
        disabled={loading}
      />

      {loading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
};

export default Task26;
