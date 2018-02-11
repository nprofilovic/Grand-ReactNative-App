import React from 'react';
import { View, 
         Text, 
         StyleSheet, 
         ScrollView, 
         Image, 
         Dimensions, 
         Platform,
         TouchableWithoutFeedback,
         Modal,
         StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageElement from './ImageElement';
resizeMode: 'contain'

const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/posts?per_page=9';

class Photos extends React.Component {
    constructor(){
      super();

      this.state = {
        modalVisible: false,
        modalImage: require('../img/bros-banner.jpg'),
        images: [
            require('../img/bros-banner.jpg'),
            require('../img/get-1.jpg'),
            require('../img/novagodina.jpg'),
            require('../img/bros-banner.jpg'),
        ]
      }
    }
    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="photo" size={24} />
      }
    }

    

    getImage(){
      return this.state.modalImage;
    }
    
    f
    setModalVisible(visible, imageKey){
      
      this.setState({modalImage: this.state.images[imageKey]});
        this.setState({modalVisible: visible});
        
      }
    render(){
      console.log('====================================');
      console.log(this.state.images);
      console.log('====================================');
      let images = this.state.images.map((val, key) => {
        return <TouchableWithoutFeedback key={key} onPress={() => {this.setModalVisible(true, key)}}>
                <View style={styles.imagewrap}>
                  <ImageElement imgsource={val} ></ImageElement>
                </View>
               </TouchableWithoutFeedback>
      })
      
      return(
       <ScrollView> 
        <View style={styles.container}>
            
            <Modal style={styles.modal} animationType={'fade'}
                    transparent={true} visible={this.state.modalVisible}
                    onRequestClose={() => {}} >

                    <View style={styles.modal}>
                      <Text style={styles.text} 
                            onPress={() => {this.setModalVisible(false)}}>Close</Text>
                      <ImageElement imgsource={this.state.modalImage}></ImageElement>
                    </View>

            </Modal>

            {images}
        </View>
        </ScrollView>
      );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
    paddingTop: 30,
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3) - 12,
    width: (Dimensions.get('window').width/2) - 4,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    color: '#fff',

  }
})
export default Photos;
