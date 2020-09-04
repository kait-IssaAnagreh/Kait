import React from 'react';
import {View} from 'react-native';
import styles from '../search/styles';
import Button from '@ant-design/react-native/lib/button';

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => props.navigation.navigate('SearchPage')}>
        Click to Search
      </Button>
    </View>
  );
};
