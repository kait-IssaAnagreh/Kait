import React from 'react';
import {TouchableOpacity, NativeModules, Text, StyleSheet} from 'react-native';
import common from '../react-native/common';
export default () => {
  if (!__DEV__ && common.is_android) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        NativeModules.DevMenu.show();
      }}
      style={styles.button}>
      <Text style={styles.buttonText}>Menu</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 100,
    right: 5,
    zIndex: 1000,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
