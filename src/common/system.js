
/**
 * 判断是否为iOS
 */

import { Platform } from 'react-native'

export default {
    isIOS: Platform.OS === 'ios'
}