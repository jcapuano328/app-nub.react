import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene } from 'react-native-router-flux';
import {NavBar} from 'react-native-nub';
import {HomeView,AboutView,ItemsView,ItemView,SubItemView,NavigableView} from '../views';
import {accept as acceptItem,select as selectItem,create as createItem} from '../actions/item';
import {accept as acceptSubItem} from '../actions/subitem';
import Icons from '../resources';


const rightButtons = [
    {image:'refresh-dark', onPress: () => console.log('Press refresh!')},
    {image:'info-dark', onPress: () => Actions.about() }
];

const navBarOpts = {
    style: {
        backgroundColor: 'gray'
    },
    textcolor: 'white',
    menu: 'menu-dark',
    left: 'chevron-left-dark',
    onBack: Actions.pop,
    rightButtons: rightButtons
};
const navBarActionListOpts = {
    ...navBarOpts,
    rightButtons: [
        {image:'add', onPress: (props) => {
            props.createItem();
            Actions.item();
        }},
        ...rightButtons
    ]
};
const navBarActionItemOpts = {
    ...navBarOpts,
    rightButtons: [
        {image:'accept', onPress: (props) => {
            props.acceptItem();
            Actions.pop();
        }},
        {image:'discard', onPress: () => Actions.pop()}
    ]
};

const NavBarMain = NavBar(navBarOpts);
const NavBarActionList = connect(null, {createItem,selectItem})(NavBar(navBarActionListOpts));
const NavBarActionItem = connect(null, {acceptItem})(NavBar(navBarActionItemOpts));
const NavBarActionSubItem = connect(null, {acceptItem:acceptSubItem})(NavBar(navBarActionItemOpts));

export const MenuItems = [
    {key: 'home',name: 'Home', image: 'home-light'},
    {key: 'items',name: 'Items', image: Icons['items-light']},
    {key: 'about',name: 'About', image: 'info-light'}
];

export default Actions.create(
    <Scene key="root" navBar={NavBarMain}>
        <Scene key="home" type='reset' component={HomeView} title="" />
        <Scene key="items" navBar={NavBarActionList} component={ItemsView} title="Items" initial={true} />
        <Scene key="item" navBar={NavBarActionItem} component={ItemView} title="Item" />
        <Scene key="subitem" navBar={NavBarActionSubItem} component={SubItemView} title="SubItem" />
        <Scene key="about" component={AboutView} title="About" />
    </Scene>
);
