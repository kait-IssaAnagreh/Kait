import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import SearchBar from '@ant-design/react-native/lib/search-bar';

interface Props {}

export default (props: Props) => {
  const [state, setState] = useState('');

  const onChange = (value: any) => {
    setState(value);
  };

  const clear = () => {
    setState('');
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={state}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={onChange}
      />
    </View>
  );
};
