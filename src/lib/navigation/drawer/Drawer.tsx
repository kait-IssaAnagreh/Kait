import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomBar from '../bottom/BottomBar';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({route, navigation}: any) => {
  return (
    <Drawer.Navigator
      overlayColor={'rgba(0, 0, 0, 0.5)'}
      backBehavior="order"
      initialRouteName="BottomBar"
      drawerContent={(props: any) => {
        return <View {...props} />;
      }}
    >
      <Drawer.Screen name="BottomBar" component={BottomBar} />
    </Drawer.Navigator>
  );
};
