/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default (props) => {

  return (
    <TouchableOpacity
      onPress={props.onClick}
      style={[styles.buttonDefault, props.buttonStyle]} >
      <Text style={[styles.labelDefault, props.labelStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDefault: {
    borderRadius: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  labelDefault: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EEE',
  }
});
