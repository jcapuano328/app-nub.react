import React from 'react';
import { connect } from 'react-redux';
import {About} from 'react-native-nub';
import {logo} from '../resources';

const AboutView = (props) => {
    return (
        <About logo={logo}
            title={'About React Native Nub Sample'}
            version={props.version}
            releasedate={props.releasedate}
            description={'A basic example using Nub components for React Native'}
            dependencies={[
                {description: 'react-redux', url: 'https://github.com/reactjs/react-redux'},
                {description: 'react-native-router-flux', url: 'https://github.com/aksonov/react-native-router-flux'},
                {description: 'react-native-drawer', url: 'https://github.com/root-two/react-native-drawer'}
            ]}
        />
    );
}

const mapStateToProps = (state) => ({
    version: state.info.version,
    releasedate: state.info.releasedate
});

module.exports = connect(
  mapStateToProps
)(AboutView);
