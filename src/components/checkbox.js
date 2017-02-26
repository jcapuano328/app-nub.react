import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {Font} from '../services/style';

var Box = React.createClass({
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
        let width = 18;//(this.state.width*0.9) || 20;
        let height = 18;//(this.state.height*0.9) || 20;
        let size = Math.min(width, height);
        return (
            <View style={{
                width: size,
                height: size,
                borderRadius: 3,
                borderColor: 'black',
                borderWidth: 2,
                marginTop: 1,
                marginBottom: 1,
                marginLeft: 2,
                marginRight: 2
            }} onLayout={this.onLayout}>
                {this.props.selected
                    ? <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginLeft:1, marginRight:1, marginTop:-1}}>
                        <Text style={{fontSize: this.props.fontSize || Font.medium(), fontWeight: 'bold', textAlign: 'center', color: this.props.color || 'black'}}>X</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
});


var Checkbox = React.createClass({
    onSelected() {
        return () => {
            this.props.onSelected && this.props.onSelected(!this.props.selected);
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={this.onSelected()}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                    {this.props.labelpos == 'left' ? this.renderLabel(this.props.label) : null}
                    <Box selected={this.props.selected} fontSize={this.props.labelFontSize} color={this.props.color} />
                    {this.props.labelpos != 'left' ? this.renderLabel(this.props.label) : null}
                </View>
            </TouchableOpacity>
        );
    },
    renderLabel(label) {
        return (<Text style={{fontSize: this.props.labelFontSize || Font.smallmedium(), textAlign: 'left'}}>{label}</Text>)
    }
});

module.exports = Checkbox;
