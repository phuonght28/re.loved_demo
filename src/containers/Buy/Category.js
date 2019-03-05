import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated, FlatList, List, ListItem } from 'react-native'
import { Header } from 'react-navigation'
import { PRODUCTS } from '../../fakeApi/product'
import { MultiSelect } from '../../components/common/'
import { brandPrimary, brandLight } from '../../config/variables'
const CATEGORY = [
  { key: 'clothing', title: 'Clothing' },
  { key: 'shoes', title: 'Shoes' },
  { key: 'jewelry', title: 'Jewelry' },
  { key: 'watches', title: 'Watches' },
  { key: 'handbags', title: 'Handbags' },
  { key: 'wallets', title: 'Wallets' },
  { key: 'accessories', title: 'Accessories' },
  { key: 'bags', title: 'Bags' },
]
class Category extends React.Component {
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text >{item.title}</Text>
      </TouchableOpacity>
    )
  }
  renderSeparator = () => {
    return (<View style={{ width: "86%", height: 1, backgroundColor: "#CED0CE", marginLeft: "14%" }} />)
  }

  render() {
    return (
      <View style={styles.container} >
        <FlatList
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
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
})




export default Category