import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { DEVICE_W_percent, shadow, brandPrimary, brandSecondary, SourceSansPro_Regular, textDarkColor } from '../../config/variables';
import { Divider } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

const ITEM_W = DEVICE_W_percent(44)
const ITEM_H = DEVICE_W_percent(53)
const PADDING15 = DEVICE_W_percent(2)
const PADDING20 = DEVICE_W_percent(4)
const IMG_W = DEVICE_W_percent(33)
const IMG_H = DEVICE_W_percent(23)

export default Block_Item_Buy = (props) => {
  const { name, category, price, type } = props.item

  const itemType = type ? type.toUpperCase() : 'NEW'
  const itemName = name ? name : 'Chanel'
  const itemDesc = category ? category : 'Handbag'
  const itemPrice = price ? price : '$26'

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={stylesItem.buttonsBlock}
      onPress={props.onPress}
    >
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        paddingBottom: PADDING15,
      }}>
        <Categories cate={itemType} />
        <IconHeart />
      </View>
      <View style={{ alignItems: 'center', alignContent: 'center' }}>
        <Image style={stylesItem.image} source={require('../../assets/item.jpg')} />
        {/* <Image style={stylesItem.image} source={{ uri: props.item.image }} /> */}
      </View>
      <View style={{ alignItems: 'center' }} >
        <Text numberOfLines={3} style={stylesItem.name} >{itemName}</Text>
        <Text numberOfLines={3} style={stylesItem.desc} >{itemDesc}</Text>
        <Text numberOfLines={3} style={stylesItem.price} >{itemPrice}</Text>
      </View>
    </TouchableOpacity >
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
  buttonsBlock: {
    ...shadow,
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: ITEM_W,
    margin: PADDING15,
    padding: PADDING20,
  },
  categories: { width: 70, height: 20, borderWidth: 1, borderRadius: 12, borderColor: brandSecondary },
  categoriesText: { fontSize: 13, lineHeight: 20, textAlign: 'center', color: brandSecondary },
  image: { width: IMG_W, height: IMG_H, resizeMode: 'cover' },
  name: { lineHeight: 27, fontSize: 18, fontFamily: SourceSansPro_Regular, color: textDarkColor, fontWeight: '700' },
  price: { lineHeight: 30, fontSize: 20, fontFamily: SourceSansPro_Regular, color: textDarkColor, fontWeight: '700' },
  desc: { lineHeight: 24, fontSize: 16, fontFamily: SourceSansPro_Regular, color: '#a3a3a3' },
});

