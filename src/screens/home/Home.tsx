import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {changeLanguage} from '../../lib/actions';
import {LanguageContext} from '../../lib/contexts/LanguageContext';

interface Props {}

export default (props: Props) => {
  const [state, setState] = useState<any>({});
  const {switchLanguage} = useContext(LanguageContext);

  useEffect(() => {
    return () => {};
  }, []);

  const onPress = () => switchLanguage('ar');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress} style={styles.square}>
        <Text>Press Here</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
