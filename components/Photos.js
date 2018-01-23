import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Photos extends React.Component {
    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="photo" size={24} />
      }
    }

    render(){
      return(
        <View>
            <Text>Photos page</Text>
        </View>

      );
    }

}

export default Photos;
