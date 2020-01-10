import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const RoundButton = ({onPress, text}) => (
  <TouchableOpacity style={[styles.button]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#232333',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 2,
    width: '90%'
  },
  buttonText: {
    padding: 7,
    fontSize: 20,
    color: '#fff',
  },
});

export default RoundButton;
