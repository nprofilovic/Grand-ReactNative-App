import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/media';

class Events extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Icon type="font-awesome" name="calendar" size={24} />
    }
  }
    constructor(){
      super();

      this.state = {
        data: [],
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
      console.log(this.state.data);
      return(
        <ScrollView>
          <View style={styles.header}>
            <Image
                source={require('../image/logobros.png')}
                resizeMode="contain"
              />

          </View>
          <View >
            {this.state.data.map((item, i) => {
              return (
                <ListItem
                    avatar = {{uri: item.source_url}}
                    key={i}
                    style={{flex: 1,}}
                    title={item.title.rendered.toUpperCase()}>


                </ListItem>

              );

            })}
          </View>

        </ScrollView>

      );
    }

}
const styles = StyleSheet.create({
  header: {
      height: 80,
      marginTop: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderBottomWidth: 4,
      borderBottomColor: '#ccc'
  },

})
export default Events;
