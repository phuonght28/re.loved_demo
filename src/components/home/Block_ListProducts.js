import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, Animated, ImageBackground, TextInput } from 'react-native';
import { Block_Item } from './index'
import {
  brandPrimary, brandLight, textLightColor, Bodoni_Bold,
  isIphoneX, platform, DEVICE_WIDTH, DEVICE_W_percent, brandSecondary,
} from '../../config/variables';



export default Block_ListProducts = (props) => {
  const { dataList } = props
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={{ paddingVertical: 20, flexDirection: 'row' }} >
          {dataList.map((item, index) => <Block_Item item={item} key={index} />)}
        </View>
      </ScrollView>
    </View>
  )
}