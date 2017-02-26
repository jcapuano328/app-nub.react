import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Checkbox from './checkbox';
import {Font} from '../services/style';

var MultiSelectList = React.createClass({
    onSelected(item) {
        return (b) => {
            item.selected = b;
            this.props.onChanged && this.props.onChanged(item);
        }
    },
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: this.props.labelFontSize || Font.medium(), backgroundColor: 'silver', textAlign: 'center'}}>{this.props.title}</Text>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}>
                    {this.props.items.map((item,i) => {
                        return (
                            <Checkbox key={i} label={item.name} labelFontSize={item.fontSize || this.props.itemFontSize} selected={item.selected} onSelected={this.onSelected(item)}/>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
});

module.exports = MultiSelectList;
