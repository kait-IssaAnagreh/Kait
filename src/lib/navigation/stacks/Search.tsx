import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../screens';
import Search from '../../../screens/search/Search';

const SearchStack = createStackNavigator();

export const searchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{
          headerShown: false,
        }}
        name={Screens.Search}
        component={Search}
      />
    </SearchStack.Navigator>
  );
};
