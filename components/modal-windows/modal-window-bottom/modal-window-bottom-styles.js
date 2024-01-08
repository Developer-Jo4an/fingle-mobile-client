import {mainGrayBackground, modalWindowBackground} from '../../../styles/global'
import { windowHeight } from '../../../functions/functions'

export const styles = {
    modalWindowBottomBackground: animation => ({
        flex: 1,

        opacity: animation,

        backgroundColor: modalWindowBackground
    }),
    modalWindowBottomContent: animation => ({
        flex: 1,

        backgroundColor: '#fff',

        justifyContent: 'flex-end',

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        opacity: animation,

        position: 'absolute',
        left: 0,
        right: 0,

        bottom: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-windowHeight, 0]
        }),
    }),
    modalWindowBottomHideBtnWrapper: {
        alignItems: 'center',

        paddingTop: 5,
        paddingBottom: 5,
    },
    modalWindowBottomHideBtn: {
        width: 25,
        height: 10,

        backgroundColor: mainGrayBackground,

        borderRadius: 6
    }
}