import { PixelRatio } from 'react-native';

export class FunctionGlobal {
    static ScaledSize(size: number) {
        return PixelRatio.roundToNearestPixel(size / PixelRatio.getFontScale());
        // return PixelRatio.roundToNearestPixel(size / PixelRatio.getFontScale())
      }

}