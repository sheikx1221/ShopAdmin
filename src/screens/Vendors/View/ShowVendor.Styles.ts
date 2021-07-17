import { Theme } from "@react-navigation/native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export class ShowVendorStyles {
    private THEME: Theme;
    constructor(Theme: Theme){
        this.THEME = Theme;
    }

    FlexRowView(selected: boolean): StyleProp<ViewStyle>{
        return {
            backgroundColor: selected ? this.THEME.colors.card : this.THEME.colors.background,
            borderRadius: 10,
            borderWidth: this.THEME.dark ? 1 : 0.6,
            marginRight: 5,
            marginVertical: 10,
            borderColor: selected ? this.THEME.colors.background: this.THEME.colors.card
        }
    }
    SearchBar(): StyleProp<ViewStyle>{
        return {
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: this.THEME.colors.card,
            borderRadius: 10,
            borderWidth: this.THEME.dark ? 1 : 0.6,
            marginVertical: 10,
            borderColor: this.THEME.colors.background,
            marginLeft: -5
        }
    }
    SearchBarText() :StyleProp<TextStyle> {
        return {
            fontSize: 13,
            flex: 0.9,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontFamily: 'Nunito-SemiBold',
            textAlign: "left",
            color: this.getTextColor()
        }
    }
    getTextColor(): string {
        return this.THEME.dark ? this.THEME.colors.text: this.THEME.colors.background
    }
    TagsView():StyleProp<ViewStyle> {
        return { 
            flexDirection: 'row', 
            flexWrap: 'wrap',
            marginRight: 10,
            marginLeft: -5
        }
    }
    TagsText(selected: boolean):StyleProp<TextStyle> {
        return {
            fontSize: 12,
            padding: 10,
            fontFamily: 'Nunito-Bold',
            textAlign: "center",
            color: this.THEME.dark ? this.THEME.colors.text : selected ? this.THEME.colors.background : this.THEME.colors.text
        }
    }
    ListView(): StyleProp<ViewStyle> {
        return {
            flexDirection: 'row',
            borderColor: this.THEME.colors.text,
            borderWidth: 1,
            borderRadius: 10,
            width: '95%',
            alignSelf: 'flex-start',
            marginBottom: 10,
        }
    }
    PageView(): StyleProp<ViewStyle> {
        return {
            flex: 0.15,
            borderRightWidth: 1,
            borderColor: this.THEME.colors.card,
            justifyContent: 'center',
            backgroundColor: this.THEME.colors.card,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            paddingVertical: 10
        }
    }
    PageText(): StyleProp<TextStyle> {
        return {
            fontSize: 10,
            fontFamily: 'Nunito-Bold',
            textAlign: 'center',
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background
        }
    }
    CenterView(): StyleProp<ViewStyle> {
        return {
            flex: 0.60,
            alignItems: 'flex-start',
            paddingLeft: 10,
            paddingVertical: 10
        }
    }
    VendorName(): StyleProp<TextStyle> {
        return {
            fontSize: 20,
            fontFamily: 'Nunito-Bold',
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.card,
        }
    }
    Address(): StyleProp<TextStyle> {
        return {
            fontSize: 14,
            fontFamily: 'Nunito-Bold',
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.card,
        }
    }
    Turn(): StyleProp<TextStyle> {
        return {
            fontSize: 12,
            fontFamily: 'Nunito-Bold',
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.card,
        }
    }
    BalanceView(): StyleProp<ViewStyle> {
        return {
            flex: 0.25,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    BalanceText(): StyleProp<TextStyle> {
        return {
            fontFamily: 'Nunito-Bold',
            fontSize: 15,
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.card,
            width: '100%'
        }
    }
    IndicatorView(): StyleProp<ViewStyle> {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }
    }
    IndicatorColor(): string {
        return this.THEME.colors.border
    }
    IndicatorText(): StyleProp<TextStyle> {
        return {
            fontSize: 18,
            fontFamily: 'Nunito-Bold',
            textAlign: 'center',
            color: this.THEME.colors.text,
            marginTop: 40
        }
    }
}