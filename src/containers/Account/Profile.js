import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={[StyleSheet.absoluteFill]} source={require('../../assets/profile_photo.jpg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
