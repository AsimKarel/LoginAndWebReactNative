import React from 'react';
import {TextInput, StyleSheet, View, Image} from 'react-native';
import image from '../assets/mail.png';

const TextField = ({
  value,
  onChangeText,
  placeholder,
  style = style,
  isPasswordField,
  logo,
}) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Image source={logo} style={styles.icon}/>
      <TextInput
        value={value}
        style={styles.inputBox}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={isPasswordField}
        defaultValue={value}
      />
    </View>
  </View> 
);

const styles = StyleSheet.create({
  container:{
    paddingBottom:5,
  },
  icon:{
    marginLeft:10  ,
  },
  inputContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems:'center',
    width: '95%',
    alignSelf:'center',
    backgroundColor: '#d7d7d9',
    borderColor: '#bbbbbd',
  },
  inputBox: {
    width: '80%',
    margin: 10,
    padding: 15,
    marginBottom:0,
    fontSize: 15,
    backgroundColor: '#d7d7d9',
    
    borderRadius: 2,
  },
});

export default TextField;
