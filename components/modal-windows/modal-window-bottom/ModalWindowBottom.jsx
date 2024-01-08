import { Modal, View, Animated, Text, Pressable, TouchableNativeFeedback } from 'react-native'
import { useEffect, useRef } from 'react'

import { clickGrayBackground } from '../../../styles/global'
import { styles } from './modal-window-bottom-styles'

const ModalWindowBottom = ({ visible, ...props }) => {

    const showAnimation = useRef(new Animated.Value(0)).current

    const animObj = (value, dur) => ({
        toValue: value,
        duration: dur,
        useNativeDriver: false
    })

    useEffect(() => Animated.timing(showAnimation, animObj(visible[0] ? 1 : 0, 150)).start(), [visible[0]])

    const hideModalWindow = () => Animated.timing(showAnimation, animObj(0, 350)).start(() => setTimeout(() => visible[1](false), 300))

    return (
        <Modal
            animationType={'none'}
            visible={ visible[0] }
            transparent
            statusBarTranslucent
        >
            <Animated.View style={ styles.modalWindowBottomBackground(showAnimation) }>
                <Animated.View style={ styles.modalWindowBottomContent(showAnimation) }>
                    <View style={ styles.modalWindowBottomHideBtnWrapper }>
                        <TouchableNativeFeedback onPress={ hideModalWindow } background={TouchableNativeFeedback.Ripple(clickGrayBackground, true)}>
                            <View style={ styles.modalWindowBottomHideBtn }></View>
                        </TouchableNativeFeedback>
                    </View>
                    { props.children }
                </Animated.View>
            </Animated.View>
        </Modal>
    )
}

export default ModalWindowBottom
