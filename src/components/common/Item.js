import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

const ItemProduct = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.category}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 356,
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: 356,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  cate: {
    color: '#a3a3a3',
    textAlign: 'center',
  }

});

export default HeaderImageBackground

