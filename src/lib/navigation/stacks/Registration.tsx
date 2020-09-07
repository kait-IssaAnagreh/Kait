import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import I18n from '../../locales';
import {wp, hp} from '../../helpers/react-native/common';
import Home from '../../../screens/Home';
import {Screens} from '../../constants';

const RegistrationStack = createStackNavigator();

export const registrationNavigator = () => {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen
        options={{
          headerBackTitle: '',
          headerTitle: I18n.t('tabs.registration'),
          headerBackTitleVisible: false,
          gestureResponseDistance: {
            horizontal: wp('100'),
            vertical: hp('100'),
          },
        }}
        name={Screens.HOME}
        component={Home}
      />
    </RegistrationStack.Navigator>
  );
};
