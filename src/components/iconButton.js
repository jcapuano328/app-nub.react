import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import GetImage from '../services/getImage';
let getImage = GetImage();

var IconButton = React.createClass({
    render() {
        let style = this.props.border ? {
            borderColor: 'gray', borderRightWidth: 1, borderStyle: 'solid'
        } : null;
        return (
            <TouchableOpacity onPress={this.props.onPress} style={style}>
                <Image
                    style={{marginLeft: 5, marginRight: 5, width: this.props.width || 32, height: this.props.height || 32, resizeMode: this.props.resizeMode || 'contain'}}
                    source={getImage(this.props.image)} />
            </TouchableOpacity>
        );
    }
});

module.exports = IconButton;
