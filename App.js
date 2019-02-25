import React from 'react';
import { StatusBar, View, YellowBox } from 'react-native'
import { AppLoading, Updates, Asset, Font, Icon } from 'expo'

import AppContainer from './AppContainer'
import NavigationService from './src/services/navigation-service'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoadingComplete: false }
    console.disableYellowBox = true
    console.ignoredYellowBox = ['Setting a timer']
    YellowBox.ignoreWarnings(['Setting a timer'])
  }
  componentDidMount() {
    this._fetchNewVersion()
  }
  async _fetchNewVersion() {
    try {
      const update = await Updates.checkForUpdateAsync()
      console.log('Already fetched update info')
      console.log(update)
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync()
        Alert.alert(
          'A new update has been downloaded.',
          'Please reload to get new version now.',
          [{ text: 'OK', onPress: () => Updates.reloadFromCache() }],
          { cancelable: false }
        )
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  _loadResourcesAsync = async () => {

    const imageAssets = [
      require('./src/assets/home_bg.jpg')
    ]
    return Promise.all([
      await imageAssets.map(image => {
        if (typeof image === 'string') {
          return Image.prefetch(image)
        } else {
          return Asset.fromModule(image).downloadAsync().catch((ignored) => {
            console.error(ignored)
          }).then(() => {
            console.log('done')
          })
        }
      }),
      await Font.loadAsync({
        'Bodoni_72_Bold': require('./src/assets/fonts/Bodoni_72_Bold.ttf'),
        'SourceSansPro_Bold': require('./src/assets/fonts/SourceSansPro-Bold.otf'),
        'SourceSansPro_Regular': require('./src/assets/fonts/SourceSansPro-Regular.otf'),
      }),
    ])
  }
  bodoni_svtytwo_itc_tt_bold

  _handleLoadingError = error => {
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#2079ae'} barStyle="light-content" />
        {!this.state.isLoadingComplete ?
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
          :
          <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
        }
      </View>
    )
  }
}
