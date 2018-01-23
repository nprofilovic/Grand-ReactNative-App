import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class More extends React.Component {

    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="ellipsis-h" size={24} />
      }
    }
    render(){
      return(
        <View>
            <Text>More page</Text>
        </View>

      );
    }

}

export default More;
