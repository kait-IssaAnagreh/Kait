import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {homeNavigator} from '../stacks/Home';
import common, {wp} from '../../helpers/react-native/common';
import I18n from '../../locales';
import {registrationNavigator} from '../stacks/Registration';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator tabBarOptions={bottomNavBar_Styling}>
      <Tab.Screen
        name="Home"
        component={homeNavigator}
        options={{
          tabBarLabel: I18n.t('tabs.home'),
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'home'}
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              size={wp('6.25')}
              color={color}
              type="antdesign"
            />
          ),
        }}
      />
      <Tab.Screen
        name={'registration'}
        component={registrationNavigator}
        options={{
          tabBarLabel: I18n.t('tabs.registration'),
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'organization'}
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              size={wp('5.75')}
              color={color}
              type="simple-line-icon"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const bottomNavBar_Styling: any = {
  scrollEnabled: true,
  showIcon: true,
  activeTintColor: 'red',
  // inactiveTintColor: drawer.bottomBar.bottom_tabs_inactive,
  labelStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // ...texts.txt_bottom_navbar,
  },
  labelPosition: 'below-icon',
  style: {},
  indicatorStyle: {
    height: 0,
  },
  tabStyle: {
    marginTop: 1,
    paddingBottom: common.is_android ? (common.is_arabic ? 5 : 0) : 0,
  },
};
