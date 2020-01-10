import React from 'react';
import {WebView} from 'react-native-webview'
import {
  StyleSheet,
} from 'react-native';

class MyWebView extends React.Component {
    token = this.props.navigation.state.params.token;
    
    componentDidMount = () => {
      alert("My token: "+this.token)
    }
    render() {
        return (
          <WebView source={{ uri: 'https://facebook.github.io/react-native/?token'+this.token }} />
        );
      }

}


const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%',
    },
  });
export default MyWebView;