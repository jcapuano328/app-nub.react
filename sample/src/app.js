'use strict';
import React from 'react';
import {View,Text} from 'react-native';
import { Router } from 'react-native-router-flux';
import routes, {MenuItems} from './routes';
import {NavDrawer} from 'react-native-nub';
import { Provider } from 'react-redux';
import store from './stores/store';


let App = React.createClass({    
    render () {
        console.log('App render',View);
        return (            
            <Provider store={store}>
                <NavDrawer items={MenuItems}>
                    <Router style={{flex:1}} scenes={routes} />
                </NavDrawer>                
            </Provider>            
        );
    }
});

module.exports = App;
