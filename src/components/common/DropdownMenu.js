import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, UIManager, Animated, Easing } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { SourceSansPro_Regular } from '../../config/variables'

if (UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default class DropdownMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			maxHeight: 0,
			minHeight: 0,
			animation: new Animated.Value(50)
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
			<View>
				{this.props.children ?
					<Animated.View style={[styles.container, { height: this.state.animation }]}>
						<View onLayout={this._setMinHeight.bind(this)}>
							<TouchableOpacity style={styles.Btn} onPress={this.toggle.bind(this)} >
								<Text style={[styles.Title, { color: this.state.expanded ? `#D40000` : `#000` }]} numberOfLine={1} adjustsFontSizeToFit>{this.props.title}</Text>
								<AntDesign style={styles.Title} name={(this.state.expanded && this.props.children) ? `minus` : `plus`} />
							</TouchableOpacity>

						</View>
						<View onLayout={this._setMaxHeight.bind(this)}>
							{this.props.children}
						</View>
					</Animated.View>
					:

					<Animated.View style={styles.container}>
						<MenuItem title={this.props.title} onPress={this.props.onPress} />
					</Animated.View>
				}
			</View>
		)
	}
}


export const MenuItem = (props) => {
	return (
		<TouchableOpacity style={styles.Btn} onPress={props.onPress}>
			<Text style={styles.Title}>{props.title}</Text>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF', overflow: 'hidden',
	},
	Btn: {
		flexDirection: 'row',
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
	},
	Title: {
		color: '#000',
		fontSize: 20,
		lineHeight: 50,
		fontWeight: '400',
		fontFamily: SourceSansPro_Regular
	},
})