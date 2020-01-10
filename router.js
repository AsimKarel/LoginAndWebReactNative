import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login'
import WebView from './MyWebView'

const loginStack = createStackNavigator({
  Login: {screen: Login},
});
const loggedInStack = createStackNavigator({
  WebView: {screen: WebView},
});

export const switchNavigator = createSwitchNavigator(
  {
    LoginStack: loginStack,
    WebViewStack: loggedInStack,
  },
  {
    initialRouteName: 'LoginStack',
  },
)