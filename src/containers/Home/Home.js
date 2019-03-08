import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated, TextInput } from 'react-native'
import { PRODUCTS } from '../../fakeApi/product';
import { Block_Category, Block_ListProducts } from '../../components/home'
import { homeStyle } from './style'
import Feather from "react-native-vector-icons/Feather";
import {
  textDarkColor, brandLight, textLightColor, Bodoni_Bold,
  isIphoneX, platform, DEVICE_WIDTH, DEVICE_W_percent, brandSecondary,
} from '../../config/variables';

const STATUSBAR_PADDING = isIphoneX ? 24 : 0
const HEADER_MAX_HEIGHT = 356;
const HEADER_MIN_HEIGHT = 0
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const AnimatedFastImage = Animated.createAnimatedComponent(Image);


class Home extends React.Component {
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
    const scrollY = Animated.add(
      this.state.scrollY,
      platform === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={homeStyle.container} >
        <Animated.View style={[stylesHeader.header, { transform: [{ translateY: headerTranslate }] }]}   >
          <AnimatedFastImage source={require('../../assets/home_bg.jpg')} style={[stylesHeader.backgroundImage, { flex: 1, width: '100%', opacity: imageOpacity, transform: [{ translateY: imageTranslate }], },]} />
          <View style={homeStyle.bar}>
            <Text style={homeStyle.title} adjustsFontSizeToFit numberOfLines={3}>{`Buy, Sell,\nRelove your dressing.`}</Text>
          </View>
        </Animated.View>
        <Animated.ScrollView style={{ flex: 1 }} scrollEventThrottle={1} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }], { useNativeDriver: true })} contentInset={{ top: HEADER_MAX_HEIGHT, }} contentOffset={{ y: -HEADER_MAX_HEIGHT, }}   >
          <View style={homeStyle.searchContainer}>
            <TouchableOpacity style={homeStyle.searchBlock} onPress={() => { this.props.navigation.navigate('Category') }}>
              <Feather name='search' style={{ color: textDarkColor, fontSize: 24 }} />
              <TextInput placeholder='Search for your new reloved..' style={homeStyle.searchInput} placeholderTextColor={textDarkColor} />
            </TouchableOpacity>
          </View>
          <View style={stylesHeader.scrollViewContent}>
            <Block_ListProducts dataList={PRODUCTS} navigation={this.props.navigation} />
            <Block_ListProducts dataList={PRODUCTS} navigation={this.props.navigation} />
            <Block_Category />
            <Block_ListProducts dataList={PRODUCTS} navigation={this.props.navigation} />
          </View>
        </Animated.ScrollView>
      </View>
    )
  }
}

const stylesHeader = StyleSheet.create({
  header: {
    // backgroundColor: '#03A9F4',
    backgroundColor: 'transparent',
    height: HEADER_MAX_HEIGHT,
    position: 'absolute',
    overflow: 'hidden',
    elevation: 5,
    top: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    width: '100%',
    height: HEADER_MAX_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    // paddingTop: platform !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    paddingTop: platform !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
})
export default Home


