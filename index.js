
import {AppRegistry} from 'react-native';
import React from 'react'
import App from './app/App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

import {Provider} from 'react-redux'

import configureStore from './app/redux/store'

const store = configureStore();

const Redux = () =>
<Provider store={store}>
    <App/>
</Provider>

// AppRegistry.registerComponent(appName, () => Screen1);
AppRegistry.registerComponent(appName, () => Redux);
