import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Icon, ListItem, Avatar  } from 'react-native-elements';
import Header from './Header';
import Banner from './Banner';
import ContentContainer from './ContentContainer';
import Slide from './Slider';

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

    render(){
      return(
        <ScrollView style={styles.container} >
             <Header />
             <Slide />
             <ContentContainer />
        </ScrollView>
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
