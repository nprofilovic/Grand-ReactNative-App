import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";



export default class ProductItem extends Component {
	render() {
		return (
            <TouchableOpacity style={[css.cards]}>
                <Image source={{uri: this.props.product.images[0].src}}></Image>

                <Text>{this.props.product.name}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={{paddingBottom: 12}}>${this.props.product.price}</Text>
                </View>
            </TouchableOpacity>
		);
	}

}