import React from 'react';
import {ClippingRectangle} from 'react-native';

export const LanguageContext: any = React.createContext(null);

export const LanguageProvider = (props: {children: any}) => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      console.log('action', action);
      switch (action.type) {
        case 'SWITCH':
          return {
            ...prevState,
            language: action.to,
          };
      }
    },
    {
      language: false,
    },
  );

  const langMemo = React.useMemo(
    () => ({
      switchLanguage: async (toLanguage: string) => {
        dispatch({type: 'SWITCH', to: toLanguage});
      },
    }),
    [],
  );

  return (
    <LanguageContext.Provider value={{...langMemo}}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext.Consumer;
