import React from 'react';
import {TouchableOpacity, NativeModules, Text} from 'react-native';
import common from '../react-native/common';

export default () => {
  if (!__DEV__ && common.is_android) return null;
  return (
    <TouchableOpacity
      onPress={() => {
        NativeModules.DevMenu.show();
      }}
      style={{
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
      }}>
      <Text style={{fontSize: 20}}>Menu</Text>
    </TouchableOpacity>
  );
};