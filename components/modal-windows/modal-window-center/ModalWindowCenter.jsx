import { Modal, View, Text } from 'react-native'

import { styles } from './modal-window-center'

const ModalWindowCenter = ({ visible, ...props }) => {

    return (
        <Modal
            visible={visible[0]}
            animationType={'fade'}
        >
        </Modal>
    )
}

export default ModalWindowCenter