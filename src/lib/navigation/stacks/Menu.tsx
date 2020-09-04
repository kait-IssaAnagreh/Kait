import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../screens';
import I18n from '../../locales';
import {wp, hp} from '../../helpers/react-native/common';
import {searchNavigator} from './Search';
import Menu from '../../../screens/menu/Menu';

const MenuStack = createStackNavigator();

export const menuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        options={{
          ...options(I18n.t('tabs.menu')),
        }}
        name={Screens.Menu}
        component={Menu}
      />
      <MenuStack.Screen
        options={{
          headerShown: false,
        }}
        name={Screens.SearchPage}
        component={searchNavigator}
      />
    </MenuStack.Navigator>
  );
};

const options = (name: any) => {
  return {
    headerBackTitle: '',
    headerTitle: name,
    headerBackTitleVisible: false,
    gestureResponseDistance: {
      horizontal: wp('100'),
      vertical: hp('100'),
    },
  };
};
