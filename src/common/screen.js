
/**
 * 设备宽高、 像素比、 ISO顶部高度为20、 android为0
 */

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}