import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return <Text>My Function Page</Text>;
};

const Task21 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Show"
        onPress={() => setShowPage(!showPage)}
      />

      {showPage && <MyFunctionPage />}
    </View>
  );
};

export default Task21;