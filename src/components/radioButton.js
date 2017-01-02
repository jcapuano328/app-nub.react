import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

var RadioButton = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onSelected}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                    {this.renderLabel('left')}
                    {this.renderImage('left')}
                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 12.5,
                        borderColor: this.props.color || 'black',
                        borderWidth: 2,
                        marginTop: 3,
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        {this.props.selected
                            ? <View style={{
                                width: 12.5,
                                height: 12.5,
                                borderRadius: 6.25,
                                backgroundColor: this.props.color || 'black',
                                marginTop: 3.75,
                                marginLeft: 3.75,
                            }}/>
                            : null
                        }
                    </View>
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
                <Text style={{fontSize: 18, textAlign: 'left'}} numberOfLines={1} adjustsFontSizeToFit={true}>{this.props.label}</Text>
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
