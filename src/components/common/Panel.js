import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, UIManager, Animated, Easing } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { SourceSansPro_Regular } from '../../config/variables'

if (UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

class Panel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			maxHeight: 0,
			minHeight: 0,
			animation: new Animated.Value(52)
		}
	}

	shouldComponentUpdate() {
		return true
	}

	_setMaxHeight(event) { this.setState({ maxHeight: event.nativeEvent.layout.height }) }
	_setMinHeight(event) { this.setState({ minHeight: event.nativeEvent.layout.height }) }

	toggle() {
		let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
			finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight

		this.setState({
			expanded: !this.state.expanded
		}, () => {
			this.state.animation.setValue(initialValue)
			Animated.timing(
				this.state.animation,
				{
					toValue: finalValue,
					duration: 200,
					easing: Easing.linear
				}
			).start()
		})
	}
	render() {
		return (
			<Animated.View style={{ backgroundColor: '#FFF', overflow: 'hidden', height: this.state.animation }}>
				<View onLayout={this._setMinHeight.bind(this)}>
					<TouchableOpacity onPress={this.toggle.bind(this)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={{ color: this.state.expanded ? `#D40000` : `#000`, lineHeight: 50, fontSize: 20, fontWeight: '400', fontFamily: SourceSansPro_Regular }} numberOfLine={1} adjustsFontSizeToFit>{this.props.title}</Text>
						<AntDesign style={{ color: '#000', lineHeight: 50, fontSize: 24, fontWeight: '400' }} name={this.state.expanded ? `minus` : `plus`} />
					</TouchableOpacity>
				</View>
				<View onLayout={this._setMaxHeight.bind(this)}>
					{this.props.children}
				</View>
			</Animated.View>
		)
	}
}
export default Panel