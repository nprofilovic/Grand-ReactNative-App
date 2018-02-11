import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'


const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.url} />
        
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}
const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/posts?per_page=5';
export default class extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            data:[],
            imagesSlider: [
                require('../img/bros-banner.jpg'),
                require('../img/novagodina.jpg'),
                
            ]
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
        console.log('====================================');
        console.log(this.state.data);
        console.log('====================================');
        return (
            <View style={{flex:1}}>
                <Swiper
                    autoplay
                    height={240}
                >
                {
                    this.state.data.map((item, i) => <Slider 
                        url={{uri: item.better_featured_image.source_url}}
                       
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}