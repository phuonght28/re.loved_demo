import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Icon from '../../config/icon'

import { inverseTextColor } from '../../config/variables';

class BasketIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20, alignItems: 'center' }}
        onPress={() => this.props.navigation.navigate('Basket')}>
        <Icon.SimpleLineIcons name={'handbag'} style={{ color: '#000', fontSize: 28 }} />
      </TouchableOpacity>
    )
  }
}
export default BasketIcon
