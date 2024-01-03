import { mainGreenColor, mainOrangeColor, mainRedColor } from '../../../styles/global';

export const styles = {
    totalHeaderValue: amount => ({
        fontSize: 28,

        color: amount === 0 ? mainOrangeColor : amount > 0 ? mainGreenColor : mainRedColor
    }),
    totalHeaderTextLabel: {
        color: 'lightgray'
    }
}