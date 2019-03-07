import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, } from 'react-native'
import { CATEGORY } from '../../fakeApi/category'
import { Panel } from '../../components/common/'
import Ionicons from "react-native-vector-icons/Ionicons"

class Category extends Component {
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
    <Panel title={item.title}>
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
    </Panel>
  )
  renderSeparator = () => (<View style={{ width: "100%", height: 1, backgroundColor: "#ECECEC" }} />)
  render() {
    return (
      <View style={styles.container} >
        <FlatList
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: '8%',
            marginVertical: 10,
            flex: 1,
          }}
          data={CATEGORY}
          keyExtractor={item => item.key}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View >
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
})


export default Category