import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { DEVICE_W_percent, shadow, brandPrimary, brandSecondary, fontFamily } from '../../config/variables';
import { Divider } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

const ITEM_W = DEVICE_W_percent(40)
const ITEM_H = DEVICE_W_percent(53)
const PADDING15 = DEVICE_W_percent(2)
const PADDING20 = DEVICE_W_percent(3)
const IMG_W = DEVICE_W_percent(33)
const IMG_H = DEVICE_W_percent(23)

export default Block_Item = (props) => {
  const { name, category, price, type } = props.item

  const itemType = type ? type.toUpperCase() : 'NEW'
  const itemName = name ? name : 'Chanel'
  const itemDesc = category ? category : 'Handbag'
  const itemPrice = price ? price : '$26'

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity activeOpacity={1} style={[stylesItem.buttonsBlock]}>
        <View style={{ flex: 1, padding: PADDING15, }}>

          <View style={{ margin: PADDING15, }}>
            <Image style={stylesItem.image} source={require('../../assets/item.jpg')} />
            {/* <Image style={stylesItem.image} source={{ uri: props.item.image }} /> */}
          </View>
          <View style={{ alignItems: 'center' }} >
            <Text numberOfLines={3} style={stylesItem.name} >{itemName}</Text>
            <Text numberOfLines={3} style={stylesItem.desc} >{itemDesc}</Text>
          </View>
        </View>
      </TouchableOpacity >
    </View>
  )
}
const Categories = (props) => {
  return (
    <View style={stylesItem.categories}>
      <Text style={stylesItem.categoriesText} numberOfLines={1} >{props.cate}</Text>
    </View>
  )
}
const IconHeart = () => {
  return (
    <TouchableOpacity>
      <Ionicons name='md-heart-empty' style={{ color: brandSecondary, fontSize: 22 }} />
    </TouchableOpacity>
  )
}
const stylesItem = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    paddingBottom: 30,
  },
  buttonsBlock: {
    ...shadow,
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: ITEM_W,
    marginHorizontal: PADDING15,
  },
  categories: { width: 70, height: 20, borderWidth: 1, borderRadius: 12, borderColor: brandSecondary },
  categoriesText: { fontSize: 13, lineHeight: 20, textAlign: 'center', color: brandSecondary },
  image: { width: IMG_W, height: IMG_H, resizeMode: 'cover' },
  name: { lineHeight: 27, fontSize: 18, fontFamily: fontFamily, color: brandPrimary, fontWeight: '700' },
  price: { lineHeight: 30, fontSize: 20, fontFamily: fontFamily, color: brandPrimary, fontWeight: '700' },
  desc: { lineHeight: 24, fontSize: 16, fontFamily: fontFamily, color: '#a3a3a3' },
});

