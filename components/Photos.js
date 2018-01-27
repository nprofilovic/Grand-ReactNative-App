import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/media';

class Photos extends React.Component {
    constructor(){
      super();

      this.state = {
        data: [],
      }
    }
    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="photo" size={24} />
      }
    }

    fatchData = async() => {
      const res = await
      fetch(apiUrl);

      const posts = await res.json();

      this.setState({data: posts});
    }
    componentDidMount(){
  		this.fatchData();
  	}

    render(){
      return(
        <ScrollView>
            <View style={styles.photoGrid}>
              <View style={styles.photoWrap}>
                {this.state.data.map((item, i) => {
                  <Image style={styles.photo} source = {{uri: item.source_url}} />
                })}

              </View>
            </View>
        </ScrollView>

      );
    }

}
const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoWrap: {
    flex: 1,
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
})
export default Photos;
