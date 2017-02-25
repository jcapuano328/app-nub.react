import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Font from '../services/font';

var Button = React.createClass({
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
        if (//this.state.width != e.nativeEvent.layout.width ||
            //this.state.height != e.nativeEvent.layout.height
            this.state.width == 0
        ) {
            this.setState({
                x: e.nativeEvent.layout.x,
                y: e.nativeEvent.layout.y,
                width: e.nativeEvent.layout.width,
                height: e.nativeEvent.layout.height
            });
        }
    },
    render() {
        let width = (this.state.width*0.9) || 25;
        let height = (this.state.height*0.9) || 25;
        let buttonsize = Math.min(width, height);        
        return (
            <View style={{
                width: buttonsize,
                height: buttonsize,
                borderRadius: buttonsize * 0.5,
                borderColor: this.props.color || 'black',
                borderWidth: 2,
                marginTop: 1,
                marginBottom: 1,
                marginLeft: 2,
                marginRight: 2
            }} onLayout={this.onLayout}>
                {this.props.selected
                    ? <View style={{
                        width: buttonsize * 0.5,
                        height: buttonsize * 0.5,
                        borderRadius: buttonsize * 0.25,
                        backgroundColor: this.props.color || 'black',
                        marginTop: buttonsize / 6.66,
                        marginLeft: buttonsize / 6.66
                    }}/>
                    : null
                }
            </View>
        );
    }
});


var RadioButton = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onSelected} onLayout={this.onLayout}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                    {this.renderLabel('left')}
                    {this.renderImage('left')}
                    <Button selected={this.props.selected} color={this.props.color} />
                    {this.renderLabel('right')}
                    {this.renderImage('right')}
                </View>
            </TouchableOpacity>
        );
    },
    renderLabel(pos) {
        let labelpos = this.props.labelpos || 'right';
        if (this.props.label && labelpos == pos) {
            return (
                <Text style={{fontSize: this.props.labelFontSize || Font.medium(), textAlign: 'left'}} numberOfLines={1} adjustsFontSizeToFit={true}>{this.props.label}</Text>
            );
        }
        return null;
    },
    renderImage(pos) {
        let imagepos = this.props.imagepos || 'right';
        if (this.props.image && imagepos == pos) {
            return (
                <Image style={{
                        height: this.props.imageheight || 64,
                        width: this.props.imagewidth || 64,
                        resizeMode: 'stretch',
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    source={this.props.image}
                />
            );
        }
        return null;
    }
});

module.exports = RadioButton;
