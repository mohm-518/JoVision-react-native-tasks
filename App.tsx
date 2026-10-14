
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Task42 from './Tasks/Task42';

export default function App() {
  return (
    <Provider store={store}>
      <Task42 />
    </Provider>
  );
}
