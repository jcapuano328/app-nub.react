import React, {PropTypes} from 'react';
import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';
import NavMenu from './navDrawerMenu';

let NavigationDrawer = React.createClass({
    getInitialState() {
        return {
            open: false
        };
    },
    onSelect(e) {
        //this.setState({open:false});
        this.drawer.close();
        if (this.props.onSelect) {            
            this.props.onSelect(e);
        } else if (Actions[e]) {
            Actions[e]();
        }
    },
    render(){
        return (
            <Drawer
                ref={c => this.drawer = c}
                type="overlay"
                side="left"
                open={this.state.open}
                onOpen={()=>this.setState({open: true})}
                onClose={()=>this.setState({open: false})}
                content={this.renderContent()}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                {this.props.children}
            </Drawer>
        );
    },
    renderContent() {
        if (this.props.content) {
            return this.props.content;
        }
        return (
            <NavMenu menuItem={this.props.menuItem} items={this.props.items} icons={this.props.icons} onSelect={this.onSelect} />
        );
    }
});

export default NavigationDrawer;
