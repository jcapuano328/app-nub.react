import {Platform} from 'react-native';
import { scale, fontScale, moderateScale, verticalScale} from './scaling';

let height = {
    ...Platform.select({
      ios: {
        height: verticalScale(64),
      },
      android: {
        height: verticalScale(56),//scale(44),
      },
    })
};


module.exports = {
    Font: {
        title() {
            return fontScale(20);
        },
        subtitle() {
            return fontScale(16);
        },
        xtrasmall() {
            return fontScale(6);
        },
        small() {
            return fontScale(8);
        },
        smallmedium() {
            return fontScale(10);
        },
        medium() {
            return fontScale(12);
        },
        mediumlarge() {
            return fontScale(16);
        },
        large() {
            return fontScale(20);
        },
        xlarge() {
            return fontScale(22);
        },
        xxlarge() {
            return fontScale(24);
        },
		fontScale: fontScale
    },
    Padding: {
        pad(size) {
            return scale(size);
        }
    },
    Scaling: {
        titleBarHeight: height.height,
        scale: scale,	
		fontScale: fontScale,
		moderateScale: moderateScale,		
        verticalScale: verticalScale  
    }
}
