import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Icon, ListItem,  } from 'react-native-elements';

const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/media';

class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Icon type="font-awesome" name="home" size={24} />
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
      console.log(this.state.data.source_url);
      return(
        <View>
            <View>
              <Image source={{uri: this.state.data.source_url}} />
            </View>
            <Text>Home page is good</Text>
        </View>

      );
    }

}

export default Home;
