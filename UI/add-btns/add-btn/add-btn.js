import { mainGreenColor } from '../../../styles/global';

export const styles = {
    addBtn: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    addBtnWrapper: disabled => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,

        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,

        opacity: disabled ? 0.5 : 1,

        backgroundColor: mainGreenColor
    }),
    addBtnText: {
        color: '#fff',

        fontSize: 16
    }
}