import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

interface Props {}

export default (props: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          Here we are
      </Text>
    </View>
  );
};
