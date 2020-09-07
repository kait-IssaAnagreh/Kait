import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
export const switchLanguage = () => {
  I18nManager.allowRTL(!I18nManager.isRTL);
  I18nManager.forceRTL(!I18nManager.isRTL);
  return setTimeout(RNRestart.Restart, 500);
};
