import React, { Component } from 'react'
import { Platform, View, Image, StyleSheet, TouchableOpacity, Text, Animated, FlatList, List, ListItem } from 'react-native'
import { Header } from 'react-navigation'
import { PRODUCTS } from '../../fakeApi/product'
import { MultiSelect } from '../../components/common/'
import { brandPrimary, brandLight } from '../../config/variables'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { CATEGORY } from '../../fakeApi/category'

const AnimatedFastImage = Animated.createAnimatedComponent(Image)

const Item_MAX_HEIGHT = 356;
const HEADER_MIN_HEIGHT = 0
class Category extends React.Component {
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
    return (
      <View style={styles.container} >
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