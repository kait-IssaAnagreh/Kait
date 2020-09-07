import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import I18n from '../../locales';
import {wp, hp} from '../../helpers/react-native/common';
import {searchNavigator} from './search';
import Menu from '../../../screens/Menu';
import {Screens} from '../../constants';

const MenuStack = createStackNavigator();

export const menuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        options={{
          headerBackTitle: '',
          headerTitle: I18n.t('tabs.menu'),
          headerBackTitleVisible: false,
          gestureResponseDistance: {
            horizontal: wp('100'),
            vertical: hp('100'),
          },
        }}
        name={Screens.MENU}
        component={Menu}
      />
      <MenuStack.Screen
        options={{
          headerShown: false,
        }}
        name={Screens.SEARCH_PAGE}
        component={searchNavigator}
      />
    </MenuStack.Navigator>
  );
};
