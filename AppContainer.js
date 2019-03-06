
import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { AsyncStorage, StatusBar, Button, Animated, TouchableHighlight, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { Home } from './src/containers/Home'
import { Account } from './src/containers/Account'
import { Category } from './src/containers/Buy'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import { shadowCustom } from './src/config/variables'



const SIZE = 60

class HangerRouterButton extends Component {
  render() {
    return (
      <View style={{
        position: 'absolute', alignItems: 'center',
        // backgroundColor: 'pink',
        // borderTopRightRadius: SIZE / 2,
      }}>
        <TouchableHighlight
          style={{
            // flex: 0.2,
            // borderColor: '#f1f1f1',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
          }}
        >
          <MaterialCommunityIcons name={'hanger'} style={{ color: 'red', fontSize: 36 }} />
        </TouchableHighlight>
      </View>
    )
  }
}
class SearchRouterButton extends Component {
  mode = new Animated.Value(0)
  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300
    }).start()
  }
  render() {
    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    })
    return (
      <View style={{
        position: 'absolute',
        alignItems: 'center',
      }}>
        <TouchableHighlight
          onPress={this.toggleView}
          underlayColor="#841e20"
          style={{
            backgroundColor: '#841e20',
            borderColor: '#f1f1f1',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            marginBottom: 25,
          }}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            {/* <MaterialCommunityIcons name={'magnify'} style={{ color: '#FFF', backgroundColor: '#841e20', fontSize: 40 }} /> */}
            <Feather name={'search'} style={{ color: '#FFF', backgroundColor: '#841e20', fontSize: 36 }} />
          </Animated.View>
        </TouchableHighlight>
      </View>
    )
  }
}
const BottomTabButton = (props) => {
  const routeName = props.routeName
  let iconName = routeName === 'Hanger' ? 'hanger' :
    routeName === 'Search' ? 'magnify' :
      routeName === 'Notification' ? 'bell' :
        routeName === 'Account' ? 'account-outline' : 'home-outline'

  return (
    <TouchableHighlight style={{
      // backgroundColor: '#841e20',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.2,
      width: SIZE,
      height: SIZE,
      borderRadius: SIZE / 2,
    }} >
      <MaterialCommunityIcons name={iconName} style={{ color: '#000', fontSize: 36 }} />
    </TouchableHighlight>
  )
}
class MyTabBar extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <BottomTabButton routeName={'Home'} />
          <BottomTabButton routeName={'Hanger'} />
          <BottomTabButton routeName={'Search'} />
          <BottomTabButton routeName={'Notification'} />
          <BottomTabButton routeName={'Account'} />
        </View>
      </View>
    )
  }
}

class SignInScreen extends React.Component {
  static navigationOptions = { title: 'Please sign in' }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('Main')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button style={{ flex: 1 }} title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }
}

class OtherScreen extends React.Component {
  static navigationOptions = { title: 'Lots of features here', }
  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
        <Button title="Loading...." onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const headerOptions = {
  headerTintColor: '#000',
  headerBackTitle: null,
  headerTitleStyle: {
    color: '#000'
  },
  headerStyle: {
    borderBottomWidth: 0.5,
    backgroundColor: '#FFF',
  },
  headerRight: (
    <TouchableOpacity style={{ paddingHorizontal: 20, alignItems: 'center' }}>
      <SimpleLineIcons name={'handbag'} style={{ color: '#000', fontSize: 28 }} />
    </TouchableOpacity>
  )
}
const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: Home },
  },
  { headerMode: "none", }
)
const HangerStack = createStackNavigator(
  {
    Category: {
      screen: Category,
      navigationOptions: {
        ...headerOptions,
        title: 'YOUR NEXT PRELOVED'
      }
    },
  }
)
const SearchStack = {
  screen: () => null,
}
const NotificationStack = createStackNavigator(
  {
    NotificationScreen: { screen: OtherScreen }
  },
  { headerMode: "none", }
)
const AccountStack = createStackNavigator(
  {
    AccountScreen: { screen: Account },
  },
  { headerMode: "none", }
)
const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Hanger: HangerStack,
    Search: SearchStack,
    Notification: NotificationStack,
    Account: AccountStack,
  },
  {
    initialRouteName: 'Hanger',
    defaultNavigationOptions: ({ navigation }) => ({
      // tabBarComponent: MyTabBar,
      animationEnabled: false,
      swipeEnabled: false,
      lazyLoad: true,
      tabBarOptions: {
        activeTintColor: '#841e20',
        inactiveTintColor: '#000',
        showLabel: false,
        style: {
          // position: 'absolute',
          // left: 0,
          // right: 0,
          // bottom: 0,
          // borderTopColor: 'transparent',
          // backgroundColor: 'transparent',
          // backgroundColor: 'rgba(255, 255, 255, 0.5)',
          // backgroundColor: 'white',
          // ...shadowCustom()
        }
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconSize = 28
        let iconName = routeName === 'Home' ? 'home-outline' :
          routeName === 'Hanger' ? 'hanger' :
            routeName === 'Search' ? 'magnify' :
              routeName === 'Notification' ? 'bell' : 'account-outline'

        if (routeName === 'Search') {
          return <SearchRouterButton />
        }
        // else if (routeName === 'Hanger') {
        //   return <HangerRouterButton />
        // }
        return <MaterialCommunityIcons name={iconName} style={{ color: tintColor, fontSize: iconSize }} />
      }
    })
  }
)

const AuthStack = createStackNavigator({
  SignIn: { screen: SignInScreen, navigationOptions: { header: null } },
})



export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    defaultNavigationOptions: { header: null },
    initialRouteName: 'Main',
  }
))


