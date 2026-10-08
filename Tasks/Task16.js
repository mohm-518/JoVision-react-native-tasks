import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Show"
        onPress={() => setShowName(!showName)}
      />

      {showName && <Text>Mohammed</Text>}
    </View>
  );
};

export default Task16;