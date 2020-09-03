import React, {createContext, useState} from 'react';

export const LoadingContext = createContext({
  loading: false,
  setLoading: (value: boolean) => null,
});

export const LoadingConsumer = LoadingContext.Consumer;

export const LoadingProvider = (props: any) => {
  const [visible, setVisible] = useState(false);
  const setLoading: any = (visible: any) => setVisible(visible);
  return (
    <LoadingContext.Provider value={{loading: visible, setLoading}}>
      {props.children}
    </LoadingContext.Provider>
  );
};

const Loader = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,.3)',
        position: 'absolute',
        zIndex: 9999999999999,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      {/* Loader */}
    </div>
  );
};

const LoadingComponent = () => (
  <LoadingConsumer>
    {(props: any) => (props.loading ? <Loader /> : null)}
  </LoadingConsumer>
);

export default LoadingComponent;
