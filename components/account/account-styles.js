import { mainGreenColor, mainOrangeColor, mainRedColor } from '../../styles/global';

export const styles = {
    account: {
        alignSelf: 'stretch',

        borderRadius: 10,

        overflow: 'hidden',

        backgroundColor: '#fff'
    },
    accountInfoWrapper: {
        height: 45,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingLeft: 10,
        paddingRight: 10,
    },
    accountInfoLeftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    accountSign: {
        width: 40,
        height: 25,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 6,

        backgroundColor: 'red'
    },
    accountName: {
        fontSize: 16
    },
    accountSignCash: {
        fontSize: 14,

        color: '#fff'
    },
    accountSignCardNumber: {
        position: 'absolute',
        top: 6,
        left: 6,

        width: 9,
        height: 4,

        borderRadius: 2,

        backgroundColor: '#fff'
    },
    accountSignCardType: {
        position: 'absolute',
        right: 6,
        bottom: 6,

        width: 6,
        height: 6,

        borderRadius: 3,

        backgroundColor: '#fff'
    },
    accountCountWrapper: {

    },
    accountCountValue: count => ({
        color: count === 0 ? mainOrangeColor : count > 0 ? mainGreenColor : mainRedColor
    })
}









