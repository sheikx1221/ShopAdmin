import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const MenuItems = (props) => {
    const menu = props.menu;
    const { colors, dark } = useTheme();
    return(
        <TouchableOpacity key={menu.ScreenName} style={{
            borderBottomWidth: 0.6,
            borderColor: dark ? colors.text : colors.card,
            padding: '5%',
        }} onPress={props.onPressHandler}>
            <Text style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 19,
                color: colors.text
                
            }}>{menu.ScreenName}</Text>
            <Text style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: colors.text
            }}>{menu.Description}</Text>
        </TouchableOpacity>
    )
}

export default MenuItems;