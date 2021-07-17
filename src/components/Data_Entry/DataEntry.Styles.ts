import { Theme } from "@react-navigation/native";
import { Dimensions, StyleProp, ViewStyle } from 'react-native';

export class DataEntryStyles {
    private THEME: Theme;
    private WIDTH: number;
    private HEIGHT: number;

    constructor (theme: Theme){
        this.THEME = theme;
        const { width, height } = Dimensions.get('screen');
        this.WIDTH = width;
        this.HEIGHT = height;
    }

    MainView() {
        return {
            flex: 1,
            marginTop: '10%',
            backgroundColor: this.THEME.colors.background
        }
    }

    FormStyle() {
        return {
            backgroundColor: this.THEME.colors.border,
            width: '95%',
            borderRadius: 10,
            marginTop: '2%',
            paddingBottom: 20,
            maxHeight: this.HEIGHT * 0.65,
            zIndex: -2
        }
    }

    nextButtons(): StyleProp<ViewStyle> {
        return {
            width: '95%',
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            position: 'absolute',
            bottom: 30,  
            justifyContent: 'space-between'
        }
    }

    TextColor() {
        return this.THEME.colors.text;
    }

    FormLabel() {
        return {
            marginLeft: 15,
            fontSize: 18,
            fontFamily: 'Nunito-Bold',
            padding: 10,
            color: this.THEME.colors.background,
            textTransform: "uppercase"
        }
    }

    FormInput() {
        return {
            backgroundColor: this.THEME.colors.background,
            color: this.THEME.colors.text ,
            fontSize: 18,
            fontFamily: 'Nunito-SemiBold',
            textAlign: 'center',
            width: '80%',
            alignSelf: 'flex-start',
            borderRadius: 10,
            padding: 10,
            marginLeft: 20,
        }
    }

}