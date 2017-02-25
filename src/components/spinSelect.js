import React from 'react';
import { View, Text } from 'react-native';
import SpinButton from './spinButton';
import Font from '../services/font';

var SpinSelect = React.createClass({
    render() {
        return (
            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {this.props.label
                    ? <View style={{flex: 10}}>
                        <Text>{this.props.label}</Text>
                    </View>
                    : null
                }
                <View style={{flex: 5}}>
                    <SpinButton direction={'prev'} onPress={this.props.onPrev} />
                </View>
                <View style={{flex: 60, alignItems: 'center'}}>
                    <Text style={{alignSelf: 'stretch', fontSize: this.props.fontSize || Font.medium(), justifyContent: 'center', textAlign: 'center'}}>
                        {this.props.value}
                    </Text>
                </View>
                <View style={{flex: 5}}>
                    <SpinButton direction={'next'} onPress={this.props.onNext} />
                </View>
            </View>
        );
    }
});

module.exports = SpinSelect;
