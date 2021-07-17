import { Theme } from "@react-navigation/native";
import { StyleProp, TextStyle, ViewStyle, Dimensions } from "react-native";

export class CommonStyles {
    private readonly THEME: Theme;
    private WIDTH: number;
    private HEIGHT: number;
    constructor(theme: Theme) {
        this.THEME = theme;
        const { width, height } = Dimensions.get("screen");
        this.WIDTH = width;
        this.HEIGHT = height;
    }

    H2(textAlign?: TextStyle["textAlign"]): StyleProp<TextStyle>{
        if (!textAlign) textAlign = "left";
        return {
            color: this.THEME.colors.text,
            fontSize:24,
            textAlign:textAlign,
            padding:4,
            paddingLeft:20,
            letterSpacing:1,
            fontFamily: 'Nunito-Bold'
        }
    }
    H3(textAlign: TextStyle["textAlign"]) {
        if(!textAlign) textAlign = "left";
        return{
            color:this.THEME.colors.text,
            fontSize:18,
            textAlign:textAlign,
            padding:4,
            fontFamily: 'Nunito-Bold'
        }
    };
    MainViewHeading() {
        return {
            backgroundColor: this.THEME.colors.background,
            flex: 1,
            marginTop: '20%'
        }
    }
    Input() {
        return({
            width: "90%",
            padding: 10,
            margin: 4,
            marginTop:1,
            borderRadius: 10,
            backgroundColor:this.THEME.colors.card,
            alignSelf:'center',
            color:'white',
            fontSize:19
        });
    }
    SingleButton(marginBottom: number) {
        if(!marginBottom) marginBottom = 10;
        return({
            width:"80%",
            alignSelf:'center',
            backgroundColor:this.THEME.colors.card,
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background,
            fontSize:23,
            fontWeight:'bold',
            textAlign:'center',
            borderRadius:10,
            padding:10,
            margin:10,
            marginBottom:marginBottom
        });
    }
    SingleContrast(marginBottom: number) {
        if(!marginBottom) marginBottom = 10;
        return({
            width:"80%",
            alignSelf:'center',
            backgroundColor:this.THEME.colors.text,
            color: this.THEME.dark ? this.THEME.colors.text : this.THEME.colors.background, 
            fontSize:23,
            borderColor:this.THEME.colors.card,
            borderWidth:0.5,
            fontWeight:'bold',
            textAlign:'center',
            borderRadius:10,
            padding:10,
            margin:10,
            marginBottom:marginBottom
        });
    }
    FormTitle() {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 15,
            color: this.THEME.colors.text,
        };
    }
    SubTitle() {
        return {
            textAlign: 'left',
            fontFamily: 'Nunito-Bold',
            fontSize: 25,
            color: this.THEME.colors.text        
        }
    }
    MainView(): StyleProp<ViewStyle>{
        return {
            backgroundColor: this.THEME.colors.background,
            marginTop: this.HEIGHT * 0.02,
            paddingTop: '5%',
            flex: 1,
            marginLeft: 25
        }
    }
    DashBoardView():StyleProp<ViewStyle> {
        return {
            backgroundColor: this.THEME.colors.background,
            flex: 1,
            marginTop: this.HEIGHT * 0.02,
        }
    }
}