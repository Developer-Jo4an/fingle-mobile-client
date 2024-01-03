import {mainGreenColor, mainOrangeColor, mainRedColor} from '../../../styles/global';

export const styles = {
    totalHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 20 
    },
    totalHeaderText: {
        fontSize: 24,

        fontWeight: 600
    },
    totalHeaderValue: amount => ({
        fontSize: 28,

        color: amount === 0 ? mainOrangeColor : amount > 0 ? mainGreenColor : mainRedColor
    }),
    totalHeaderInfoWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    totalHeaderTextLabel: {
        color: 'lightgray'
    }
}