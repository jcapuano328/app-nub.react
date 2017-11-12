import React from 'react';
import { View, Text } from 'react-native';
import SpinButton from './spinButton';
import {Font} from '../services/style';

var SpinSelect = React.createClass({
    render() {
        let appearance = this.props.appearance || 'light';
        return (
            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {this.props.label
                    ? <View style={{flex: 10}}>
                        <Text adjustsFontSizeToFit>{this.props.label}</Text>
                    </View>
                    : null
                }
                <View style={{flex: 5}}>
                    <SpinButton image={this.props.imagedown||'chevron-left'+'-'+appearance} scale={.9} onPress={this.props.onPrev} />
                </View>
                <View style={{flex: 60, alignItems: 'center'}}>
                    <Text style={{alignSelf: 'stretch', fontSize: this.props.fontSize || Font.medium(), justifyContent: 'center', textAlign: 'center'}}>
                        {this.props.value}
                    </Text>
                </View>
                <View style={{flex: 5}}>
                    <SpinButton image={this.props.imageup||'chevron-right'+'-'+appearance} scale={.9} onPress={this.props.onNext} />
                </View>
            </View>
        );
    }
});

module.exports = SpinSelect;
