import React, {useState, Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter text here"
          onChangeText={this.props.onTextChange}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            width: 250,
            marginTop: 10,
            color: 'black',
          }}
          placeholderTextColor="gray"
        />
      </View>
    );
  }
}

const Task23 = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{color: 'black'}}>
        Text from child: {text}
      </Text>

      <MyClassPage onTextChange={setText} />
    </View>
  );
};

export default Task23;