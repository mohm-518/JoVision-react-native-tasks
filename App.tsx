
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Task40 from './Tasks/Task40';

export default function App() {
  return (
    <Provider store={store}>
      <Task40 />
    </Provider>
  );
}
