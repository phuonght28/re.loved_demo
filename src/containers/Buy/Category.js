import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import { CATEGORY } from '../../fakeApi/category'
import { DropdownMenu, MenuItem } from '../../components/common/'
import Ionicons from "react-native-vector-icons/Ionicons"

class Category extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        // <TouchableOpacity onPress={() => navigation.goBack(null)}
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
          style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Ionicons name={"ios-arrow-back"} style={{ color: '#000', fontSize: 28 }} />
        </TouchableOpacity>
      ),
    }
  }
  renderItem = ({ item }) => (
    <DropdownMenu title={item.title} onPress={() => { this.props.navigation.navigate('ListItem') }} >
      {item.child && item.child.length &&
        <FlatList
          style={{ paddingLeft: '8%' }}
          data={item.child}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <MenuItem title={item.title} onPress={() => { this.props.navigation.navigate('ListItem') }} />
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      }
    </DropdownMenu>
  )
  renderSeparator = () => (<View style={{ width: "100%", height: 1, backgroundColor: "#ECECEC" }} />)
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }} >
        <FlatList
          style={{
            backgroundColor: '#FFF',
            flex: 1,
            marginVertical: 10,
            paddingHorizontal: '8%',
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

export default Category