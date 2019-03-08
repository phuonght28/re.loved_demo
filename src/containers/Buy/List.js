import React from 'react'
import { View, FlatList } from 'react-native'
import { PRODUCTS } from '../../fakeApi/product'
import { DEVICE_W_percent } from '../../config/variables'
import Block_Item_Buy from '../../components/common/Block_Item_Buy'


class ListItem extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#f7f7f7', flex: 1 }} >
        <View style={{ alignItems: 'center', paddingHorizontal: DEVICE_W_percent(2), }}>
          <FlatList
            numColumns={2}
            data={PRODUCTS}
            renderItem={({ item }) => (<Block_Item_Buy onPress={() => { this.props.navigation.navigate('ItemDetail') }} item={item} />)}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    )
  }
}
export default ListItem


