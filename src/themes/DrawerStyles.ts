import { Colors } from '../services/Interfaces';

const labelStyles = (color: string) => {
    return({
        color: color,
        fontFamily: "Nunito-SemiBold",
        fontSize: 20,
    });
}
const headerStyle = (color: string) => {
    return({
        backgroundColor: color,
        height: 140,
        padding: '15%'
    });
}
const headerLabel = (color: string) => {
    return({
        color: color,
        fontSize: 22,
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    });
}
const userLabelStyle = (colors: Colors)=>{
    return({
        color: colors.background,
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center'
    })
}
const themeLabelStyle = () => {
    return ({
        alignSelf: 'flex-end',
        // marginTop: '-10%',
        marginRight: '-10%',
        marginBottom: '-10%'
    });
}
export const DrawerStyle = {
    labelStyles,
    headerStyle,
    headerLabel,
    userLabelStyle,
    themeLabelStyle
}