import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default function(): any {
  let middleware: any = [thunk];
  if (__DEV__) middleware.push(logger);
  const middlewares = applyMiddleware(...middleware);
  let store = createStore(persistedReducer, middlewares);
  let persistor = persistStore(store);
  return { store, persistor };
}
