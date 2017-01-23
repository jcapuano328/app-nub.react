import React from 'react';
import NavMenu from './navMenu';
import NavMenuItem from './navMenuItem';

let NavDrawerMenu = React.createClass({
    render() {
        let MenuItem = this.props.menuItem || NavMenuItem;
        return (
            <NavMenu
                items={this.props.items.map((item,i) =>
                    <MenuItem key={i+1} item={item} icons={this.props.icons} onPress={this.props.onSelect} />
                )}
            />
        );
    }
});

export default NavDrawerMenu;
