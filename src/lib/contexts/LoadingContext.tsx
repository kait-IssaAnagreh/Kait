import React, {createContext, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {hp} from '../helpers/react-native/common';
export const LoadingContext = createContext({
  loading: false,
  setLoading: () => null,
});
export const LoadingConsumer = LoadingContext.Consumer;
export const LoadingProvider = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const setLoading = (visible: any) => setIsVisible(visible);
  return (
    //@ts-ignore
    <LoadingContext.Provider value={{loading: isVisible, setLoading}}>
      {props.children}
    </LoadingContext.Provider>
  );
};
const LoadingComponent = () => (
  <LoadingConsumer>
    {(props: any) => (props.loading ? <Loading /> : null)}
  </LoadingConsumer>
);
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  loader: {
    height: hp(30),
  },
});

export default LoadingComponent;
