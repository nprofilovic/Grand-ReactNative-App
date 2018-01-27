
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Home from './components/Home';
import Events from './components/Events';
import Photos from './components/Photos';
import More from './components/More';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator ({
  Home: { screen: Home },
  Events: { screen: Events },
  Photos: { screen: Photos },
  More: {screen: More},
  
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#e91e63'
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Tabs />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
