import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/screens/home';
import { enableScreens } from 'react-native-screens';
import { AuthScreen } from './src/screens/auth';

const App = createAppContainer(
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
export default App;
