import React from 'react';
import axios from 'axios';
import {
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
} from 'react-native';
import RoundButton from './components/roundButton';
import TextField from './components/textfield';
import LoginLogo from './components/logo';
import {
    storeToken,
    getToken,
  } from './asyncStorageService'

class Login extends React.Component {
    static navigationOptions =  {
        title: ' ',
    }
    state = {
        email: '',
        password: '',
        isInvalid: false,
    };

    componentWillMount = () => {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = async () => {
        const token = await getToken();
        if(token){
            this.props.navigation.navigate('Profile',{token:data.data.token})
        }
    }

    login = ()=>{
        this.setState({isInvalid:false});
        axios.post('https://reqres.in/api/login',this.state)
        .then(data => {
                storeToken(data.data.token);
                this.props.navigation.navigate('WebView',{token:data.data.token})
            }
        )
        .catch(e => {
          this.setState({isInvalid:true});
        });
    }

    render() {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <LoginLogo/>
                {this.state.isInvalid && <Text style={styles.error}>Invalid Credentials</Text>}
                <TextField onChangeText={email => this.setState({email})} logo={require('./assets/mail.png')} placeholder='email'/>
                <TextField onChangeText={password => this.setState({password})} logo={require('./assets/password.png')} placeholder='password' isPasswordField />
                <RoundButton text='Login' onPress={this.login}/>
            </View>
          </TouchableWithoutFeedback>
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
    error: {
      color: 'red',
    },
  });
export default Login;