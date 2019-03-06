import React, { Component } from 'react'
import { Platform, View, Image, StyleSheet, TouchableOpacity, Text, Animated, FlatList, List, ListItem, LayoutAnimation } from 'react-native'
import { Header } from 'react-navigation'
import { PRODUCTS } from '../../fakeApi/product'
import { CATEGORY } from '../../fakeApi/category'
import { brandPrimary, brandLight, textLightColor, isIphoneX, platform, DEVICE_WIDTH, shadow, shadowCustom } from '../../config/variables';

import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

const STATUSBAR_PADDING = isIphoneX ? 24 : 0
const HEADER_MAX_HEIGHT = 580
const HEADER_MIN_HEIGHT = Header.HEIGHT + STATUSBAR_PADDING
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT


class Category extends React.Component {

  constructor() {
    super()
    this.state = {
      expanded: false,
      scrollY: new Animated.Value(
        platform === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack(null)}
          style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Ionicons name={"ios-arrow-back"} style={{ color: '#000', fontSize: 28 }} />
        </TouchableOpacity>
      ),
    }
  }
  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }
  renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <Text style={{ color: '#000', lineHeight: 50, fontSize: 20, fontWeight: '400' }} >{item.title}</Text>
        <AntDesign style={{ color: '#000', lineHeight: 50, fontSize: 24, fontWeight: '400' }} name={"plus"} />
      </TouchableOpacity>
      <View>
        {item.child && item.child.length &&
          <FlatList
            style={{ paddingLeft: '8%' }}
            data={item.child}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ color: '#000', lineHeight: 50, fontSize: 20, fontWeight: '400' }} >{item.title}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        }
      </View>
    </View>
  )
  renderSeparator = () => (<View style={{ width: "100%", height: 1, backgroundColor: "#ECECEC" }} />)
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
    return (
      <View style={styles.container} >

        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
            <Text >Expand / Collapse</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          </View>
        </View>



        <FlatList
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: '8%',
            paddingTop: '8%',
            flex: 1,
          }}
          data={CATEGORY}
          keyExtractor={item => item.key}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    backgroundColor: '#FFF',
    flex: 1,
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 10
  },

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },

  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});


export default Category