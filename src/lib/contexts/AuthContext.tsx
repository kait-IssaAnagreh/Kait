import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import {LoadingContext} from './LoadingContext';
import {useStore, useDispatch} from 'react-redux';

export const AuthContext = createContext({});

export const AuthProvider = (props: any) => {
  const {setLoading} = useContext(LoadingContext);
  const [isAuthDialogOpen, setIsDialogAuthOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {};

  const signup = () => {};

  const login = () => {};

  const logout = () => {};

  const toggleAuthDialog = useCallback(() => {
    setIsDialogAuthOpen(!isAuthDialogOpen);
  }, [isAuthDialogOpen]);

  return (
    <AuthContext.Provider
      value={{
        isAuthDialogOpen,
        toggleAuthDialog,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext.Consumer;
