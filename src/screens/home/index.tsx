import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import {switchLanguage} from '../../lib/actions/app';

interface Props {}

export default (props: Props) => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {};

  const onPress = () => switchLanguage();

  return (
    <View style={styles.container}>
      <Card />
      <TouchableOpacity onPress={onPress}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
};
