import React from 'react'
import { Header } from 'react-navigation'
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated, ImageBackground } from 'react-native'
import { brandPrimary, brandLight, textLightColor, isIphoneX, platform, DEVICE_WIDTH, shadow, shadowCustom } from '../../config/variables';
import * as Icon from '../../config/icon'

const STATUSBAR_PADDING = isIphoneX ? 24 : 0
const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = Header.HEIGHT + STATUSBAR_PADDING;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const AnimatedFastImage = Animated.createAnimatedComponent(Image)

class ItemDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'BASKET',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack(null)}
          style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Icon.MaterialCommunityIcons name={"close"} style={{ color: '#000', fontSize: 28 }} />
        </TouchableOpacity>
      ),
    }
  }
  state = {
    detailBuilding: null,
    isFetching: true,
    scrollY: new Animated.Value(
      platform === 'ios' ? -HEADER_MAX_HEIGHT : 0,
    ),
    refreshing: false,
  }

  render() {
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
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    })
    return (
      <View style={styles.container} >
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          contentInset={{ top: HEADER_MAX_HEIGHT, }}
          contentOffset={{ y: -HEADER_MAX_HEIGHT, }}
        >
          <View style={styles.scrollViewContent}>
            <View style={[styles.blockContainer, shadow]}>
              <View style={[shadowCustom({ offset: { width: 0, height: -1 } }), { alignSelf: 'center', width: 100, height: 5, borderRadius: 5, backgroundColor: '#D73636', marginBottom: 20 }]}></View>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginHorizontal: 15 }} >
                <View>
                  <Text style={{ fontSize: 18, lineHeight: 30 }}>DIOR</Text>
                  <Text style={{ color: '#cccccc' }}>Iconic Handbag</Text>
                </View>

              </View>
              <Text> </Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>

              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>

              <View>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              </View>

              <View>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              </View>

              <View>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              </View>

              <View>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
                <Text> ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Show more...</Text>
              </View>
            </View>
          </View>

        </Animated.ScrollView>

        <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]} >
          <AnimatedFastImage
            style={[styles.backgroundImage, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]}
            source={require('../../assets/buy_03.jpg')} />
        </Animated.View>

        <Animated.View style={[styles.barIcon, { transform: [{ translateY: titleTranslate }] }]}  >
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => this.props.navigation.goBack(null)}>
            <Icon.Ionicons name={'ios-arrow-back'} style={{ color: '#000', fontSize: 34 }} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.barIconRight, { transform: [{ translateY: titleTranslate }] }]}   >
          <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.props.navigation.navigate('Basket')}>
            <Icon.SimpleLineIcons name={'handbag'} style={{ color: '#000', fontSize: 34 }} />
          </TouchableOpacity>
        </Animated.View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
  },
  blockContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 8,
    marginBottom: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 1,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },

  header: {
    position: 'absolute',
    elevation: 5,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    backgroundColor: '#FFF',
    position: 'absolute',
    paddingTop: (platform === 'ios' ? 32 : 18) + STATUSBAR_PADDING,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: HEADER_MAX_HEIGHT
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
export default ItemDetail


