import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../../screens/Search';
import {Screens} from '../../constants';

const SearchStack = createStackNavigator();

export const searchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{
          headerShown: false,
        }}
        name={Screens.SEARCH}
        component={Search}
      />
    </SearchStack.Navigator>
  );
};
