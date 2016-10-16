'use strict';

var React = require('react');
import { View, Text, ScrollView } from 'react-native';
var RadioButton = require('./radioButton');

var RadioButtonGroup = React.createClass({
    onSelected(b) {
        return () => {
            this.props.onSelected && this.props.onSelected(b.value);
        }
    },
    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                {this.renderLabel()}
                {this.renderContainer()}
                {/*
                    let dir = this.props.direction == 'vertical' ? 'column' : 'row';
                    let justify = this.props.justifyContent || (dir == 'column' ? 'flex-start' : 'center');
                    let align = this.props.justifyContent || (dir == 'column' ? 'flex-start' : 'center');
                    let margin = dir == 'column' ? 0 : 0;

                <View style={{flex: 1, flexDirection: dir, margin: margin, justifyContent: justify, alignItems: align, alignSelf: 'stretch'}}>
                    {this.props.buttons.map((b,i) => {
                        return (
                            <RadioButton key={i} label={b.label} labelpos={b.labelpos}
                                image={b.image} imagepos={b.imagepos} imageheight={b.imageheight} imagewidth={b.imagewidth}
                                selected={b.value==this.props.state} onSelected={this.onSelected(b)} />
                        );
                    })}
                </View>
                */}
            </View>
        );
    },
    renderContainer() {
        if (this.props.direction == 'vertical') {
            return (
                <ScrollView
                    contentContainerStyle={{justifyContent:'flex-start',alignItems:'flex-start'}}
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}>
                    {this.renderButtons()}
                </ScrollView>
            );
        }

        return (
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'stretch'}}>
                {this.renderButtons()}
            </View>
        );
    },
    renderLabel() {
        if (this.props.title) {
            return (
                <Text style={{fontSize: 18, backgroundColor: 'silver', textAlign: 'center'}}>{this.props.title}</Text>
            );
        }
        return null;
    },
    renderButtons() {
        return this.props.buttons.map((b,i) =>
            <RadioButton key={i} label={b.label} labelpos={b.labelpos}
                image={b.image} imagepos={b.imagepos} imageheight={b.imageheight} imagewidth={b.imagewidth}
                selected={b.value==this.props.state} onSelected={this.onSelected(b)} />
        );
    }
});

module.exports = RadioButtonGroup;
