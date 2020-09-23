/* eslint-disable prettier/prettier */
import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import Button from '../components/button';

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <Button
            text="Fácil"
            onClick={() => props.onLevelSelected(0.1)}
            buttonStyle={styles.button, styles.bgEasy}
            labelStyle={styles.button}
            />
          <Button
            text="Normal"
            onClick={() => props.onLevelSelected(0.2)}
            buttonStyle={styles.button, styles.bgNormal}
            labelStyle={styles.button}
            />
          <Button
            text="Difícil"
            onClick={() => props.onLevelSelected(0.3)}
            buttonStyle={styles.button, styles.bgHard}
            labelStyle={styles.button}
            />
          <Button
            text="Insano"
            onClick={() => props.onLevelSelected(0.4)}
            buttonStyle={styles.button, styles.bgInsane}
            labelStyle={styles.button}
            />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    padding: 5,
    borderRadius: 4,
    width: 150,
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#FF8c00',
  },
  bgInsane: {
    backgroundColor: '#FF0000',
  },

})