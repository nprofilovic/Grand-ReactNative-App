import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

class ImageElement extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => {
          return <Icon type="font-awesome" name="home" size={24} />
        }
    }
    render(){
        return(
           
                <Image source={this.props.imgsource} style={styles.image} ></Image>
                
       

           
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null ,
       
        
        alignSelf: 'stretch',
        padding: 4,
        margin: 4,
        
       
    }
})

export default ImageElement;