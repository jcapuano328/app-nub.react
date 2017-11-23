import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

//Guideline sizes are based on standard ~5" screen mobile device
//const guidelineBaseWidth = 350;
//const guidelineBaseHeight = 680;

//Guideline sizes are based on Nexus 7 v1 (2012)
const guidelineBaseWidth = 600;
const guidelineBaseHeight = 966;
const guidelineBaseRatio = 1.33;

const widthFactor = width / guidelineBaseWidth;
const heightFactor = height / guidelineBaseHeight;
const pixelFactor = pixelRatio / guidelineBaseRatio;
	//guidelineBaseRatio / pixelRatio;

//console.log('>>>>>', 'scaling', 'pixelRatio', pixelRatio, pixelFactor);
//console.log('>>>>>', 'scaling', 'horz', guidelineBaseWidth, width, widthFactor);
//console.log('>>>>>', 'scaling', 'vert', guidelineBaseHeight, height, heightFactor);

const scale = size => widthFactor * size;
const verticalScale = size => heightFactor * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
const fontScale = moderateScale//;size => scale(size, factor = 1.5) * pixelFactor * factor;

export {scale, fontScale, verticalScale, moderateScale};