import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {LanguageContext} from '../../lib/contexts/LanguageContext';
import Card from '../../components/card/Card';

interface Props {}

export default (props: Props) => {
  const {switchLanguage} = useContext(LanguageContext);

  useEffect(() => {
    return () => {};
  }, []);

  const onPress = () => switchLanguage('ar');

  return (
    <View style={styles.container}>
      <Card />
      <TouchableOpacity onPress={onPress}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
};
