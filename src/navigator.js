import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '@screens/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  }
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
