import { Theme } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

export class CustomSaveFormStyles {
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
            height: '38%',
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 20
        } 
    }

    Title() {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 12,
            marginLeft: 25,
            color: this.THEME.colors.text,
        };
    }

    SubTitle() {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 20,
            marginLeft: 25,
            color: this.THEME.colors.text        
        }
    }

    SubForm(): StyleProp<ViewStyle> {
        return {
            backgroundColor: this.THEME.colors.border,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: '5%',
            paddingBottom: 20,
        }
    }

    Label() {
        return {
            marginLeft: 10,
            fontSize: 18,
            fontFamily: 'Nunito-Bold',
            padding: 10,
            color: this.THEME.colors.background,
            textTransform: "uppercase"
        }
    }

    Button() {
        return {
            backgroundColor: this.THEME.dark ? this.THEME.colors.background : this.THEME.colors.text,
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background,
            fontSize: 18,
            fontFamily: 'Nunito-SemiBold',
            textAlign: 'center',
            width: '90%',
            alignSelf: 'flex-start',
            borderRadius: 10,
            padding: 10,
            marginLeft: 20,
        }    
    }
}