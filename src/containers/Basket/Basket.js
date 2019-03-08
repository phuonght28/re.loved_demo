import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import * as Icon from '../../config/icon'
import { shadow, textContent } from '../../config/variables'


class Basket extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'BASKET',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.goBack(null)}
          style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Icon.MaterialCommunityIcons name={"close"} style={{ color: '#000', fontSize: 28 }} />
        </TouchableOpacity>
      ),
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', }} >
        <View style={[shadow, {
          backgroundColor: '#fafafa',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          paddingVertical: 50,
          paddingHorizontal: 30,
          marginHorizontal: 40,
        }]} >
          <Icon.SimpleLineIcons name={'handbag'} style={[textContent, { fontSize: 28, lineHeight: 42 }]} />
          <Text style={[textContent, { textAlign: 'center' }]}>Your shopping basket is currently empty... but not for long!</Text>
        </View >
      </View >
    )
  }
}
export default Basket


