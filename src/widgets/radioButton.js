'use strict';

var React = require('react');
import { View, TouchableOpacity, Text, Image } from 'react-native';

var RadioButton = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onSelected}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                    {this.props.labelpos == 'left' ? this.renderLabel() : null}
                    {this.props.imagepos == 'left' ? this.renderImage() : null}
                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 12.5,
                        borderColor: 'black',
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
                                backgroundColor: 'black',
                                marginTop: 3.75,
                                marginLeft: 3.75,
                            }}/>
                            : null
                        }
                    </View>
                    {this.props.labelpos != 'left' ? this.renderLabel() : null}
                    {this.props.imagepos != 'left' ? this.renderImage() : null}
                </View>
            </TouchableOpacity>
        );
    },
    renderLabel(label) {
        if (this.props.label) {
            return (
                <Text style={{fontSize: 18, textAlign: 'left'}}>{this.props.label}</Text>
            );
        }
        return null;
    },
    renderImage() {
        if (this.props.image) {
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
