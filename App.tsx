
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Task41 from './Tasks/Task41';

export default function App() {
  return (
    <Provider store={store}>
      <Task41 />
    </Provider>
  );
}
