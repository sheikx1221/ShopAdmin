import { Theme } from "@react-navigation/native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export class CustomPickerStyles {
    private THEME: Theme;
    constructor(theme: Theme){
        this.THEME = theme;
    }

    MainView(): StyleProp<ViewStyle> {
        return {
            backgroundColor: this.THEME.dark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    }

    SubView(): StyleProp<ViewStyle> {
        return {
            backgroundColor: this.THEME.colors.background,
            width: '95%',
            height: '90%',
            borderRadius: 15,
            paddingTop: 10,
            paddingBottom: 20
        }  
    }

    Title(): StyleProp<TextStyle> {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 12,
            marginLeft: 25,
            color: this.THEME.colors.text,
        };
    }

    SubTitle(): StyleProp<TextStyle> {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 20,
            marginLeft: 25,
            color: this.THEME.colors.text        
        }
    }
}