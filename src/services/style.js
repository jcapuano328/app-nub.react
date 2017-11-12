import {PixelRatio,Dimensions,Platform} from 'react-native';
const pixelRatio = PixelRatio.get();
const { width, height } = Dimensions.get('window');

const scale = () => {  
    /*      
    switch (true){
        case (pixelRatio < 1.4):
            return 0.8;            
            
        case (pixelRatio < 2.4):
            return 1.15;
            
        case (pixelRatio < 3.4):
            return 1.35;
            
        default:
            return 1.5;
      }                
      */      
      let factor = 1.0;
      if (pixelRatio == 1) {
          factor = 1;
      } else if (pixelRatio > 1 && pixelRatio <= 1.5) {
          factor = 1.5;
      } else if (pixelRatio > 1.5 && pixelRatio <= 2) {
          factor = 1;
      } else if (pixelRatio > 2 && pixelRatio <= 2.5) {
          factor = 1.15;//0.75;
      } else if (pixelRatio > 2.5 && pixelRatio <= 3) {
          factor = 1.35;
      } else if (pixelRatio > 3 && pixelRatio <= 3.5) {
          factor = 1.65;
      } else if (pixelRatio > 3.5) {
          factor = 2;
      }
      return factor;        
}
const scaledFont = (size) => {
    if (pixelRatio < 1.4){
        return Math.sqrt((height*height)+(width*width))*(size/175);
      }
    return Math.sqrt((height*height)+(width*width))*(size/100);        
}

const scaled = (size) => {
    return size * scale();
    //return PixelRatio.getPixelSizeForLayoutSize(size);// / pixelRatio;// * scale();        
    //return size;
}
const inversescaled = (size) => {
    return size / scale();
}

const fontscaled = (size) => {
    /*
    return size;
    
    switch(size) {
        case 6:
        size = 8;
        break;
        case 8:
        size = 11;
        break;
        case 10:
        size = 13;
        break;
        case 12:
        size = 16;
        break;
        case 14:
        size = 19;
        break;
        case 18:
        size = 24;
        break;
        case 22:
        size = 29;
        break;
        default:
        break;
    }
    */
    return scaled(size);
}

module.exports = {
    Font: {
        xtrasmall() {
            return fontscaled(6);
        },
        small() {
            return fontscaled(8);
        },
        smallmedium() {
            return fontscaled(10);
        },
        medium() {
            return fontscaled(12);
        },
        mediumlarge() {
            return fontscaled(14);
        },
        large() {
            return fontscaled(18);
        },
        xtralarge() {
            return fontscaled(22);
        }
    },
    Padding: {
        pad(size) {
            return scaled(size);
        }
    },
    Scaling: {
        scale: scaled,
        inversescale: inversescaled        
    }
}
