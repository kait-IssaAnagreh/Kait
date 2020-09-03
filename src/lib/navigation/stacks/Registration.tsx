import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../screens';
import I18n from '../../locales';
import {wp, hp} from '../../helpers/react-native/common';
import Home from '../../../screens/home/Home';

const RegistrationStack = createStackNavigator();

export const registrationNavigator = () => {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen
        options={{
          ...options(I18n.t('tabs.registration')),
        }}
        name={Screens.Home}
        component={Home}
      />
    </RegistrationStack.Navigator>
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
