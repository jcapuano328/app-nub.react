import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
//import Arrow from './arrow';
import Icons from '../resources';

var SpinButton = React.createClass({
    getInitialState() {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            viewHeight: 100
        };
    },
    onLayout(e) {
        if (this.state.width != e.nativeEvent.layout.width /*||
            this.state.height != e.nativeEvent.layout.height*/) {
            this.setState({
                x: e.nativeEvent.layout.x,
                y: e.nativeEvent.layout.y,
                width: e.nativeEvent.layout.width,
                height: e.nativeEvent.layout.height
            });
        }
    },
    render() {
        let dim = Math.max(Math.min(this.state.height, this.state.width), 24);
        //let height = this.props.height || (this.state.height*(this.props.scale||.8)) || 32;
        //let width = this.props.width || (this.state.width*(this.props.scale||.8)) || 32;
        let height = this.props.height || (dim*(this.props.scale||.8)) || 32;
        let width = this.props.width || (dim*(this.props.scale||.8)) || 32;        
        let size = Math.min(height,width)
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{flex: 1, justifyContent:'center',alignItems: 'center'}}
                onLayout={this.onLayout}>
                {/*<Arrow size={this.props.size} direction={dir} />*/}
                <Image source={Icons[this.props.image]}
                    style={{height: height, width: width, resizeMode: this.props.resizeMode || 'stretch'}}/>
            </TouchableOpacity>
        );
    }
});

module.exports = SpinButton;
