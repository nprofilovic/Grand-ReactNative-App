import React from 'react';
import { View, Image } from 'react-native';

class ImageElement extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => {
          return <Icon type="font-awesome" name="home" size={24} />
        }
    }
    render(){
        return(
            <View style={styles.image}>
                <Text>Image Element</Text>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
})

export default ImageElement;