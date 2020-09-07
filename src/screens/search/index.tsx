import React, {useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';

interface Props {}

export default (props: Props) => {
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
};
