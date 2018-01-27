import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import { Icon, ListItem, Avatar  } from 'react-native-elements';

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
      console.log(this.state.data);
      return(
        <View style={styles.container} >
             <ImageBackground
              source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2017/08/nova-kolekcija.jpg'}}
              resizeMode="cover"
              style={styles.container}>
              <Image
                source={require('../image/logobros.png')}
                resizeMode="contain"
                style={styles.logo}
              />
           </ImageBackground>

        </View>

      );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  logo: {
    
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
  }
})
export default Home;
