export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {I18nManager, Platform} from 'react-native';

const Elevation = (
  value: number = 3,
  height: number = 2,
  width: number = 0,
  shadowRadius: number = 10,
  shadowOpacity: number = 0.4,
  shadowColor: string = 'black',
) =>
  Platform.select({
    ios: {
      shadowOpacity,
      shadowRadius,
      shadowColor,
      shadowOffset: {height: height, width: width},
    },
    android: {
      elevation: value,
    },
  });
const is_arabic = I18nManager.isRTL;
const is_ios = Platform.OS === 'ios';
const is_android = Platform.OS === 'android';
const common: any = {is_arabic, is_ios, is_android, Elevation};
export default common;
