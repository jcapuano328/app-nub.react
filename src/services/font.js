import {/*PixelRatio,*/Dimensions} from 'react-native';
import {XTRASMALL,SMALL,SMALLMEDIUM,MEDIUM,MEDIUMLARGE,LARGE,XTRALARGE} from '../constants/font';

let scaled = (size) => {
    //let ratio = PixelRatio.get();
    let dimensions = Dimensions.get('window');
    return size * dimensions.fontScale;
}

module.exports = {
    xtrasmall() {
        return scaled(XTRASMALL);
    },
    small() {
        return scaled(SMALL);
    },
    smallmedium() {
        return scaled(SMALLMEDIUM);
    },
    medium() {
        return scaled(MEDIUM);
    },
    mediumlarge() {
        return scaled(MEDIUMLARGE);
    },
    large() {
        return scaled(LARGE);
    },
    xtralarge() {
        return scaled(XTRALARGE);
    }
}
