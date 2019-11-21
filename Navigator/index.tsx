import { Home } from '../Home';
import { Loading } from '../Loading';
import { Stage } from '../Stage';
import { createStackNavigator } from 'react-navigation-stack';

export const Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Loading: {
    screen: Loading,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Stage: {
    screen: Stage,
    navigationOptions: () => ({
      headerShown: false,
      gesturesEnabled: false
    })
  }
}, {
  headerBackTitleVisible: false,
});

export default Navigator;