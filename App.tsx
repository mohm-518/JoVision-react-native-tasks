
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Task39 from './Tasks/Task39';

export default function App() {
  return (
    <Provider store={store}>
      <Task39 />
    </Provider>
  );
}
