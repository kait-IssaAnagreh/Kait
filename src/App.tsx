/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Store from './lib/store';
import DevMenu from './lib/helpers/dev-menu/DevMenu';
import {RootNavigator} from './lib/navigation/root/Root';
import {AuthProvider} from './lib/contexts/AuthContext';
import {LanguageProvider} from './lib/contexts/LanguageContext';
import Loading, {LoadingProvider} from './lib/contexts/LoadingContext';

const App = () => {
  return (
    <Provider store={Store().store}>
      <PersistGate persistor={Store().persistor}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <LoadingProvider>
            <LanguageProvider>
              <AuthProvider>
                <RootNavigator />
              </AuthProvider>
              <Loading />
            </LanguageProvider>
          </LoadingProvider>
        </NavigationContainer>
        <DevMenu />
      </PersistGate>
    </Provider>
  );
};

export default App;
