import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../screens';
import I18n from '../../locales';
import {wp, hp} from '../../helpers/react-native/common';
import Home from '../../../screens/home/Home';

const HomeStack = createStackNavigator();

export const homeNavigator = ({route, navigation}: any) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          ...options(I18n.t('tabs.home')),
        }}
        name={Screens.Home}
        component={Home}
      />
    </HomeStack.Navigator>
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
