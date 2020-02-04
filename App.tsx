import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/screens/home';
import { enableScreens } from 'react-native-screens';
import { AuthScreen } from './src/screens/auth';
import { createStore, combineReducers } from 'redux';
import { authReducer } from './src/store/reducers/auth';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer);

const Navigation = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Auth: {
      screen: AuthScreen
    }
  },
  {
    initialRouteName: AuthScreen.routeName
  })
);


enableScreens();
export default class App extends React.Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <Navigation />
      </Provider>
    )
  }
};
