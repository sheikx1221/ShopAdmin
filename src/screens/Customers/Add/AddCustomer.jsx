import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CommonStyles } from '../../../themes/CommonStyles';
import { useTheme } from '@react-navigation/native';
import { AddCustomerStyles } from './AddCustomer.styles';
import { StatusBar } from 'expo-status-bar';

const AddCustomer = (props) => {
    const { colors, dark } = useTheme();
    const commonStyles = new CommonStyles({ colors, dark });
    const styles = new AddCustomerStyles({ colors, dark });

    return (
        <View style={commonStyles.MainView()}>
            <StatusBar style={dark ? "light" : "dark"}/>
            <Text style={commonStyles.FormTitle()}>ADD CUSTOMER</Text> 
            <Text style={commonStyles.SubTitle()}>CUSTOMER INFORMATION</Text>           
        </View>
    )
}

export default AddCustomer;