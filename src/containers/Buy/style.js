
import { StyleSheet } from 'react-native'
import {
  brandPrimary, HEADER_MAX_HEIGHT, textLightColor, Bodoni_Bold,
  isIphoneX, platform, DEVICE_WIDTH, DEVICE_W_percent, fontFamily,
} from '../../config/variables';
import { colors } from 'react-native-elements';

export const homeStyle  = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  bar: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    height: 356,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    maxWidth: DEVICE_WIDTH - 60,
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: Bodoni_Bold,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: platform !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  searchContainer: {
    marginTop: -30, alignContent: 'center', alignItems: 'center'
  },
  searchBlock: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
    width: DEVICE_W_percent(80),
  },
  searchInput: {
    flex: 1,
    height: 60,
    lineHeight: 60,
    paddingHorizontal: 20,
    fontFamily: fontFamily,
    fontSize: 16,
    color: brandPrimary
  },
})