
import {AppRegistry} from 'react-native';
import App from './app/App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Screen1);
AppRegistry.registerComponent(appName, () => App);
