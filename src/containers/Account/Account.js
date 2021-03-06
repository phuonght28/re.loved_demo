import React from 'react'
import { Header } from 'react-navigation'
import { PRODUCTS } from '../../fakeApi/product'
import Block_Item from '../../components/common/Block_Item'
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated, ImageBackground } from 'react-native'
import { brandPrimary, brandLight, textLightColor, isIphoneX, platform, DEVICE_WIDTH, shadow, shadowCustom } from '../../config/variables';
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"


const STATUSBAR_PADDING = isIphoneX ? 24 : 0
const HEADER_MAX_HEIGHT = 580
const HEADER_MIN_HEIGHT = Header.HEIGHT + STATUSBAR_PADDING
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT
const AnimatedFastImage = Animated.createAnimatedComponent(Image)

class Account extends React.Component {
  state = {
    detailBuilding: null,
    isFetching: true,
    scrollY: new Animated.Value(
      // iOS has negative initial scroll value because content inset...
      platform === 'ios' ? -HEADER_MAX_HEIGHT : 0,
    ),
    refreshing: false,
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      platform === 'ios' ? HEADER_MAX_HEIGHT : 0,
    )
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    })

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    })

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    })
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    })
    const item = {
      name: 'Chanel',
      category: 'Iconic Handbag',
      price: '$26',
      image: 'https://www.chanel.com/images/t_fashion/q_auto,f_jpg,fl_lossy,dpr_2/w_1920/large-boy-chanel-handbag-charcoal-grained-calfskin-ruthenium-finish-metal-grained-calfskin-ruthenium-finish-metal-packshot-alternative-a92193y333765b459-8807152549918.jpg',
      type: 'new'
    }
    return (
      <View style={styles.container} >
        <ImageBackground style={[StyleSheet.absoluteFill]} source={require('../../assets/profile_bg.jpg')} />
        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }], { useNativeDriver: true })}
          contentInset={{ top: HEADER_MAX_HEIGHT, }}
          contentOffset={{ y: -HEADER_MAX_HEIGHT, }}
          style={{ flex: 1 }} scrollEventThrottle={1} >
          <View style={styles.scrollViewContent}>

            <View style={styles.blockFllowers}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space',
                marginHorizontal: 40, marginBottom: 15
              }}>
                <View style={{ flex: 0.3 }}>
                  <Text style={{ color: '#FFF', fontWeight: '700' }}>1.2k</Text>
                  <Text style={{ color: '#FFF' }}>followers</Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: '700' }}>248</Text>
                  <Text style={{ color: '#FFF', textAlign: 'center' }}>items</Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text style={{ color: '#FFF', textAlign: 'right', fontWeight: '700' }}>1.2k</Text>
                  <Text style={{ color: '#FFF', textAlign: 'right' }}>following</Text>
                </View>
              </View>
            </View>
            <View style={styles.blockContainer}>
              <View style={[shadowCustom({ offset: { width: 0, height: -1 } }), { alignSelf: 'center', width: 100, height: 5, borderRadius: 5, backgroundColor: '#D73636', marginBottom: 20 }]}></View>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginHorizontal: 15 }} >
                <View>
                  <Text style={{ fontSize: 18, lineHeight: 30 }}>USERNAME</Text>
                  <Text style={{ color: '#9B9B9B' }}>Country, City</Text>
                </View>
                <TouchableOpacity activeOpacity={1}>
                  <Text style={{
                    borderColor: '#D73636', borderWidth: 2, borderRadius: 16, fontWeight: '600',
                     paddingHorizontal: 20, color: '#D73636', lineHeight: 30
                  }}>FOLLOW</Text>
                </TouchableOpacity >
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }} >
                <Block_Item item={item} />
                <Block_Item item={item} />
              </View>
            </View>
          </View>
        </Animated.ScrollView>

        <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]} >
          {/* <AnimatedFastImage
            style={[styles.backgroundImage, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]}
            source={require('../../assets/profile_bg.jpg')} /> */}
        </Animated.View>
        <Animated.View style={[styles.barIcon, { transform: [{ scale: titleScale }, { translateY: titleTranslate }] }]}  >
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { this.props.navigation.goBack() }}>
            <Ionicons name={'ios-arrow-back'} style={{ color: '#FFF', fontSize: 34 }} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.barIconRight, { transform: [{ translateY: titleTranslate }] }]}   >
          <TouchableOpacity style={{ marginRight: 10 }} >
            <SimpleLineIcons name={'handbag'} style={{ color: '#FFF', fontSize: 34 }} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  blockFllowers: {
    backgroundColor: 'transparent',
  },
  blockContainer: {
    backgroundColor: '#f7f7f7',
    ...shadow,
    padding: 15,
    marginHorizontal: 8,
    paddingBottom: 250,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 1,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    flex: 1
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    elevation: 5,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    width: '100%',
    height: HEADER_MAX_HEIGHT,
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: (platform === 'ios' ? 32 : 18) + STATUSBAR_PADDING,
    height: 32,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  barIcon: {
    zIndex: 1,
    backgroundColor: 'transparent',
    marginTop: (platform === 'ios' ? 32 : 18) + STATUSBAR_PADDING,
    height: 32,
    elevation: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  barIconRight: {
    zIndex: 1,
    backgroundColor: 'transparent',
    marginTop: (platform === 'ios' ? 32 : 18) + STATUSBAR_PADDING,
    elevation: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

  },
  title: {
    fontSize: platform === 'ios' ? 21 : 25,
    maxWidth: DEVICE_WIDTH - 60,
    fontWeight: platform === 'ios' ? '600' : '500',
    color: '#fff'
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: platform !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    flex: 1
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },



  paragraph: {
    backgroundColor: brandLight,
    borderRadius: 3,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: brandPrimary,
    textAlign: 'center'
  },
  buttonComon: {
    borderWidth: 1,
    borderColor: '#C7DDF6',
    borderRadius: 2,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    marginRight: 10
  },
  icon: {
    color: textLightColor,
    fontSize: 22,
    width: 40
  },
  button: {
    alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5
  },
  headerIcon: {
    flex: 0.2,
    justifyContent: 'center'
  },
  left: {
    paddingLeft: 20,
  },
  right: {
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  buttonBgText: {
    color: '#FFF',
    textAlign: 'center'
  },
  buttonBg: {
    backgroundColor: brandPrimary,
    borderRadius: 2,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
})

export default Account


