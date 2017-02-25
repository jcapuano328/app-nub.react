import {PixelRatio} from 'react-native';
import {XTRASMALL,SMALL,SMALLMEDIUM,MEDIUM,MEDIUMLARGE,LARGE,XTRALARGE} from '../constants/font';

module.exports = {
    xtrasmall() {
        let scale = 1;//PixelRatio.getFontScale();
        return XTRASMALL * scale;
    },
    small() {
        let scale = 1;//PixelRatio.getFontScale();
        return SMALL * scale;
    },
    smallmedium() {
        let scale = 1;//PixelRatio.getFontScale();
        return SMALLMEDIUM * scale;
    },
    medium() {
        let scale = 1;//PixelRatio.getFontScale();
        return MEDIUM * scale;
    },
    mediumlarge() {
        let scale = 1;//PixelRatio.getFontScale();
        return MEDIUMLARGE * scale;
    },
    large() {
        let scale = 1;//PixelRatio.getFontScale();
        return LARGE * scale;
    },
    xtralarge() {
        let scale = 1;//PixelRatio.getFontScale();
        return XTRALARGE * scale;
    }
}
