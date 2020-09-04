import React, {useState, useEffect, createRef, useRef} from 'react';
import {View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import { SearchBar as ElementsSearchBar } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

interface Props {}

export default (props: Props) => {
  let search: any = useRef();
  const navigation = useNavigation();
  const popAction = StackActions.pop(1);
  const [state, setState] = useState('');

  useEffect(() => {
    search.focus();
  }, [search])

  const onChange = (value: any) => {
    setState(value);
  };

  const clear = () => {
    setState('cleared');
  };

  return (
    <View>
      <SearchBar
        value={state}
        placeholder="Search"
        onSubmit={(value) => console.log(value, 'onSubmit')}
        onClear={(value) => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => navigation.dispatch(popAction)}
        showCancelButton={true}
        onChange={onChange}
        cancelText="Cancel"
      />
      <ElementsSearchBar
        ref={(ref) => search = ref}
        value={state}
        placeholder="Search"
        searchIcon
        cancelIcon
        showCancel
        lightTheme
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => navigation.dispatch(popAction)}
        onChange={onChange}
      />
    </View>
  );
};
