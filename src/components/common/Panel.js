import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'


import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
class Panel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			expanded: true
		}
	}
	toggle() {

	}
	render() {
		return (
			<View style={styles.container} >
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{this.state.title}</Text>
					<TouchableHighlight
						style={styles.button}
						onPress={this.toggle.bind(this)}
						underlayColor="#f1f1f1">
						{this.state.expanded ?
							<SimpleLineIcons style={{ color: '#000', lineHeight: 50, fontSize: 24, fontWeight: '400' }} name={"arrow-up"} /> :
							<SimpleLineIcons style={{ color: '#000', lineHeight: 50, fontSize: 24, fontWeight: '400' }} name={"arrow-down"} />
						}
					</TouchableHighlight>
				</View>

				<View style={styles.body}>
					{this.props.children}
				</View>

			</View>
		)
	}
}
var styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		margin: 10,
		overflow: 'hidden'
	},
	titleContainer: {
		flexDirection: 'row'
	},
	title: {
		flex: 1,
		padding: 10,
		color: '#2a2f43',
		fontWeight: 'bold'
	},
	button: {

	},
	buttonImage: {
		width: 30,
		height: 25
	},
	body: {
		padding: 10,
		paddingTop: 0
	}
});

export default Panel