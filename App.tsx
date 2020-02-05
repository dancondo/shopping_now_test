import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/screens/home';
import { enableScreens } from 'react-native-screens';
import { AuthScreen } from './src/screens/auth';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './src/store/reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const AuthNavigation = createStackNavigator({
  Auth: {
    screen: AuthScreen
  }
})

const AppNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

const Navigation = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigation,
    App: AppNavigation
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
