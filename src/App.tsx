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
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './store';
import DevMenu from './lib/helpers/dev-menu/DevMenu';
import {RootNavigator} from './lib/navigation/root';
import {AuthProvider} from './lib/contexts/AuthContext';
import Loading, {LoadingProvider} from './lib/contexts/LoadingContext';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <LoadingProvider>
            <AuthProvider>
              <RootNavigator />
            </AuthProvider>
            <Loading />
          </LoadingProvider>
        </NavigationContainer>
        <DevMenu />
      </PersistGate>
    </Provider>
  );
};

export default App;
