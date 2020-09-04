import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {LanguageContext} from '../../lib/contexts/LanguageContext';
import Card from '../../components/card/Card';
import {authApi} from '../../lib/apis/auth';

interface Props {}

export default (props: Props) => {
  const {switchLanguage} = useContext(LanguageContext);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    authApi
      .userInfo()
      .then((res) => console.log('res from then', res))
      .catch((e) => console.log('e from catch', e));
    try {
      const me = await authApi.userInfo();
    } catch (e) {
      console.log('e from try catch', e);
    }
  };

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
