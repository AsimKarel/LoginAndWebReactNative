import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login'
import WebView from './screens/MyWebView'
import AuthLoader from './screens/AuthLoader'

const loginStack = createStackNavigator({
  Login: {screen: Login},
});
const loggedInStack = createStackNavigator({
  WebView: {screen: WebView},
});

export const switchNavigator = createSwitchNavigator(
  {
    AuthChecker: AuthLoader,
    LoginStack: loginStack,
    WebViewStack: loggedInStack,
  },
  {
    initialRouteName: 'AuthChecker',
  },
)