import React, {useState, useRef, Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
    };
  }

  updateText = newText => {
    this.setState({displayText: newText});
  };

  render() {
    return (
      <Text style={{color: 'black'}}>
        {this.state.displayText}
      </Text>
    );
  }
}

const Task25 = () => {
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

      <MyClassPage ref={pageRef} />
    </View>
  );
};

export default Task25;