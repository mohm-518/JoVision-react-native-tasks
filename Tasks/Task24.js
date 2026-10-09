import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import {View, Text, TextInput} from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [displayText, setDisplayText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setDisplayText(newText);
    },
  }));

  return <Text style={{color: 'black'}}>{displayText}</Text>;
});

const Task24 = () => {
  const [text, setText] = useState('');
  const pageRef = useRef(null);

  const handleTextChange = newText => {
    setText(newText);
    pageRef.current?.updateText(newText);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TextInput
        placeholder="Enter text here"
        placeholderTextColor="gray"
        value={text}
        onChangeText={handleTextChange}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          width: 250,
          color: 'black',
        }}
      />

      <MyFunctionPage ref={pageRef} />
    </View>
  );
};

export default Task24;