import React from 'react';
import NavMenu from './navMenu';
import NavMenuItem from './navMenuItem';

let NavDrawerMenu = React.createClass({
    render() {
        return (
            <NavMenu
                items={this.props.items.map((item,i) =>
                    <NavMenuItem key={i+1} item={item} icons={this.props.icons} onPress={this.props.onSelect} />
                )}
            />
        );
    }
});

export default NavDrawerMenu;
