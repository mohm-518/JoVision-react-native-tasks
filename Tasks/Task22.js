import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const MyFunctionPage = ({onTextChange}) => {
  return (
    <View>
      <TextInput
        placeholder="Enter text here"
        onChangeText={onTextChange}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          width: 250,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Text from child: {text}</Text>

      <MyFunctionPage onTextChange={setText} />
    </View>
  );
};

export default Task22;