import { Platform, Dimensions, PixelRatio, StatusBar } from 'react-native';
import { Header } from 'react-navigation';

export const DEVICE_HEIGTH = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_W_percent = percent => (DEVICE_WIDTH * percent) / 100;
export const DEVICE_H_percent = percent => (DEVICE_HEIGTH * percent) / 100;
export const platform = Platform.OS;

const dimen = Dimensions.get('window');
export const isIphoneX = Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896));

export function getStatusBarHeight(skipAndroid = false) {
  if (Platform.OS === 'ios') {
    return isIphoneX ? 44 : 20;
  }
  if (skipAndroid) {
    return 0;
  }
  return StatusBar.currentHeight;
};
export const navHeight = Header.HEIGHT + getStatusBarHeight() - 19;

// Colors
export const brandPrimary = '#000'; //'#2997d8';
export const brandSecondary = '#d73636'; //'#2997d8';
export const brandInfo = '#5F9EE7';
export const brandSuccess = '#28871c';
export const brandDanger = '#b31919';
export const brandWarning = "#f7941e";
export const backgroundColor = "#efeef4";
export const brandLight = "#ffffff";
export const brandLightOpacity50 = 'rgba(33, 43, 52, 0.5)';
export const brandLightOpacity70 = 'rgba(28, 29, 32, 0.7)';
export const lightBackground = '#fafbfc';
export const statusBarColor = '#171e25';
export const statusColors = {
  orange: '#f05700',
  red: '#b31919',
  green: '#28871c',
  greenBG: '#f3f9f2',
  orange_yellow: '#f99e0',
  yellow: '#debb3d',
  heartColor: 'rgba(239,87,87,.9)',
  grey: '#A9A9A9',
};
// Background Color

// Shadow Color
export const shadowColor = '#161616';
// Font
export const fontFamily = platform === 'ios' ? 'System' : 'SourceSansPro_Regular';
export const fontFamilyBold = 'SourceSansPro_Bold';

export const Bodoni_Bold = 'Bodoni_72_Bold';
export const SourceSansPro_Bold = 'SourceSansPro_Bold';
export const SourceSansPro_Regular = 'SourceSansPro_Regular';



let fontScal = 15;
if (PixelRatio.get() > 2) {
  fontScal = 16;
}
// if (PixelRatio.get() > 3) {
//   fontScal = 18;
// }

export const fontSize = fontScal;
export const inputFontSize = fontSize + 2;
export const lineHeight = fontSize * 1.44;
// export const fontSize = platform === 'ios' ? 12 : 14;
export const fontSizeH1 = fontSize * 2.8;
export const fontSizeH2 = fontSize * 2.4;
export const fontSizeH3 = fontSize * 2;
export const fontSizeH4 = fontSize * 1.5;
// Text
export const textColor = "#000";
export const textDarkColor = "#000";
export const textLightColor = "#666666";
export const inverseTextColor = "#fff";
export const textH1 = { fontSize: fontSizeH1, };
export const textH2 = { fontSize: fontSizeH2, };
export const textH3 = { fontSize: fontSizeH3, };
export const textH4 = { fontSize: fontSizeH4, };

// Title
export const titleFontSize = fontSize + 2;
export const titleTextColor = "#0D3D74";
export const shadow = {
  elevation: 1,
  shadowColor: "rgba(0,0,0, 0.2)",
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  // marginBottom: 15
};
export const shadowCustom = (props) => ({
  // shadowColor: "rgba(0,0,0,1)",
  shadowColor: (props && props.color) ? props.color : "#000",
  shadowOffset: (props && props.offset) ? props.offset : { width: 1, height: 1 },
  shadowOpacity: (props && props.opacity) ? props.opacity : 0.5,
  shadowRadius: (props && props.radius) ? props.radius : 4,
  elevation: (props && props.elevation) ? props.elevation : 10,
})
// export const shadowProperties = {
//   shadowColor: '#1a1917',
//   shadowOpacity: 0.25,
//   shadowOffset: { width: 0, height: 10 },
//   shadowRadius: 10
// }
