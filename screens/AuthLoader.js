import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {getToken, getForKey} from '../asyncStorageService';

class AuthLoader extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await getToken();
    if (token) {
      this.props.navigation.navigate('WebView',{token:token});
    } 
    else {
      this.props.navigation.navigate('LoginStack');
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoader;
