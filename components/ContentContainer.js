import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CustomImage from './CustomImage';

class ContentContainer extends React.Component {
  render(){
    return(
      <View style={styles.contentContainer}>
          <View style={styles.col2}>
              <CustomImage imageSource={require('../img/woman.jpg')} />
          </View>
          <View style={styles.col1}>
              <CustomImage imageSource={require('../img/woman-model.jpg')} />
          </View>
          <View style={styles.contentBanner}>
              <CustomImage imageSource={require('../img/get-1.jpg')} />
          </View>

          <View style={styles.col1}>
              <CustomImage imageSource={require('../img/man-model.jpg')} />
          </View>
          <View style={styles.col2}>
              <CustomImage imageSource={require('../img/man.jpg')} />
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    col1: {
        flex: 1,
        padding: 5,
    },
    col2: {
        flex: 2,
        padding: 5,
    },
    contentBanner: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5

    }
})

export default ContentContainer;
