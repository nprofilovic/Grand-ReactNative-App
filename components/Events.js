import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import { List, Icon, ListItem, Avatar } from 'react-native-elements';
import HTML from 'react-native-render-html';



class Events extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Icon type="font-awesome" name="calendar" size={24} />
    }
  }
    constructor(props){
      super(props);

      this.state = {
        loading: false,
        data: [],
        page: 1,
        refreshing: false,
        siteTitle: ''
      };
    }


    fetchData = () => {
 
      const { page } = this.state;
      const url = `http://www.bros-jeans.com/wp-json/wp/v2/posts?page=${page}&results=20`;
   
      this.setState({ loading: true });
      fetch(url)
        .then(res => { 
          return res.json()
        })
        .then(res => {
          const arrayData = [...this.state.data, ...res]
          this.setState({
            data: page === 1 ? res : arrayData,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });
    };
    componentDidMount(){
      const urlSiteDetail = "http://www.bros-jeans.com/wp-json"
      fetch(urlSiteDetail)
      .then(res => {
 
        return res.json()
      })
      .then(res => {
        this.setState({
         siteTitle: res.name
        });
      })
      .catch(error => {
 
      });
 
      this.fetchData();
      
    }
    
    renderHeader = () => {
      return (
        <View style={styles.header} >
          <Image source={require('../img/logobros.png')} resizeMode="contain"  />
        </View>
        )
    };
    renderFooter = () => {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      );
    };

    handleRefresh = () => {
      this.setState(
        {
          page: 1,
          refreshing: true
        },
        () => {
          this.fetchData();
        }
      );
    };

    handleLoadMore = () => {
      this.setState(
        {
          page: this.state.page + 1
        },
        () => {
          this.fetchData();
        }
      );
    };
    
    render(){
     
      return(
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
          <FlatList
            
            data={this.state.data}
            keyExtractor={item => item.id}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            renderItem={({ item }) =>{
              if(((item.title.rendered).trim() != "") && ((item.title.rendered).trim() != "Copy"))
              return (<View>
                
                <ListItem
                  roundAvatar
                  title={<HTML html={`${item.title.rendered}`} />}
                 // avatar={{uri: item.better_featured_image.source_url}}
                  containerStyle={{ borderBottomWidth: 0, }} 
                />
                <View
                  style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                  }}
                /></View>
              )
            }}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
      </List>

      );
    }

}
const styles = StyleSheet.create({
  header: {
      height: 60,
      marginTop: 10,
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
