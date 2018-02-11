import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

class More extends React.Component {
    state = {
      modalVisible: false,
    };
    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="ellipsis-h" size={24} />
      }
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    render(){
      return(
        <View style={{marginTop: 22}}>
        <Modal
          style={{flex: 1, padding: 40, backgroundColor: 'rgba(0,0,0, 0.9)'}}
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    

      );
    }

}

export default More;
