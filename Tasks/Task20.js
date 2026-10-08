import React, {useState, Component} from 'react';
import {View, Text, Button} from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return <Text>My Class Page</Text>;
  }
}

const Task20 = () => {
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

      {showPage && <MyClassPage />}
    </View>
  );
};

export default Task20;