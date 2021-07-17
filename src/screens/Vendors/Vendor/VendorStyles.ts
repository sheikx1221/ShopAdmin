import { Theme } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

export class VendorStyles {
    private THEME: Theme;
    constructor(theme: Theme){
        this.THEME = theme;
    }

    ContactView(): StyleProp<ViewStyle> {
        return {
            marginTop: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    }

    ActionButtonsView(): StyleProp<ViewStyle> {
        return {
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    ActionButtonColor(): string {
        return this.THEME.colors.border
    }
}