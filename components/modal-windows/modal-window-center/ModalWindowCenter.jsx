import { Modal } from 'react-native'

import { styles } from './modal-window-center'

const ModalWindowCenter = ({ visible, ...props }) => {

    return (
        <Modal
            visible={visible[0]}
            animationType={'fade'}
            transparent
            statusBarTranslucent
        >{ props.children }</Modal>
    )
}

export default ModalWindowCenter