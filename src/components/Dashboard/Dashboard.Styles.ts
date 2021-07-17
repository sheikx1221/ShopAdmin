import { Theme } from "@react-navigation/native";
import { Dimensions, StyleProp, ViewStyle } from 'react-native';

export class DashboardStyles {
    private THEME: Theme;
    private WIDTH: number;
    private HEIGHT: number;

    constructor(theme: Theme){
        this.THEME = theme;
        const { width, height } = Dimensions.get('screen');
        this.WIDTH = width;
        this.HEIGHT = height;
    }

    Container(height: number): StyleProp<ViewStyle> {
        return{
            height: height, 
            width: this.WIDTH, 
            backgroundColor: this.THEME.colors.border,
        }
    }

    SubView(): StyleProp<ViewStyle> {
        return {
            padding: '10%',
            paddingTop: '5%',
            paddingLeft: 0,
            paddingBottom: '5%',
            marginLeft: 25
        }
    }

    SubText() {
        return {
            fontSize: 18, 
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background, 
            fontFamily: 'Nunito-SemiBold'
        }
    }

    Heading() {
        return {
            fontSize: 28, 
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background, 
            fontFamily: 'Nunito-Bold'
        }
    }

    GraphBody() {
        return {
            width: '95%', 
            alignSelf: 'center', 
            backgroundColor: this.THEME.colors.card, 
            borderRadius: 20, 
            height: "70%", 
            shadowColor: this.THEME.colors.card, 
            elevation: 6, 
            opacity: 1
        }
    }

    GraphHeading() {
        return {
            fontSize: 18, 
            paddingLeft: '6%', 
            paddingTop: '3%', 
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background, 
            fontFamily: 'Nunito-SemiBold'
        }
    }

    SearchBar() {
        return { 
            backgroundColor: 'white', 
            width: '110%', 
            alignSelf: 'center', 
            borderRadius: 30
        }
    };

    PlaceHolderText() {
        return { 
            fontSize: 14, 
            fontFamily: 'Nunito-SemiBold', 
            padding: '3%'
        }
    }

    SearchHeading() {
        return {
            fontSize: 28, 
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background, 
            fontFamily: 'Nunito-Bold', 
            paddingTop: '5%', 
            marginLeft: '-6%'
        }
    }









}