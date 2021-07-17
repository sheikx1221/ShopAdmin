import React from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CommonStyles } from '../../themes/CommonStyles';
import Dashboard from '../../components/Dashboard/Dashboard';
import MenuItems from '../../components/MenuItems';
import { Menu } from './Menu';

const HomeScreen = (props) => {
    const theme = useTheme();
    const commonStyles = new CommonStyles(theme);
    return(
        <View style={commonStyles.DashBoardView()}>
            <Dashboard screen={"Employees"}/>
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