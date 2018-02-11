import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay';






class Banner extends React.Component {
  
  render(){
    return(
        <View>
         
          <ImageBackground
              source={require('../img/bros-banner.jpg')}
              style={styles.banner} >
              <ImageOverlay
                  header={' Spring - Summer'}
                  paragraph={'2018'}/>
              </ImageBackground>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})

export default Banner;
