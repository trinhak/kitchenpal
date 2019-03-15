import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '@screens/Home';
import Detail from '@screens/Detail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Detail: {
    screen: Detail
  }
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
