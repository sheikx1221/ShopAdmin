import React from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CommonStyles } from '../../themes/CommonStyles';
import Dashboard from '../../components/Dashboard/Dashboard';
import MenuItems from '../../components/MenuItems';
import { Menu } from './Menu';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = (props) => {
    const { colors, dark } = useTheme();
    const commonStyles = new CommonStyles({colors, dark });
    return(
        <View style={commonStyles.DashBoardView()}>
            <StatusBar 
                backgroundColor={colors.border}
                style="light"
            />
            <Dashboard screen={"Customers"}/>
            <FlatList 
                data={Menu}
                renderItem={({item})=>(
                    <MenuItems 
                        menu={item}
                        onPressHandler={()=>props.navigation.navigate(item.Navigate)}
                    />
                )}
                keyExtractor={({ScreenName})=>ScreenName}
            />
        </View>
    )
}

export default HomeScreen;