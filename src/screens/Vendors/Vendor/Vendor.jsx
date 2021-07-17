import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { wrapInVendor } from '../../../entities/Vendor.entity';
import { CommonStyles } from '../../../themes/CommonStyles';
import { VendorStyles } from './VendorStyles';
import { Ionicons, Entypo, Fontisto } from '@expo/vector-icons';

const VendorScreen = (props) => {
    const vendor = wrapInVendor(props.route.params.vendor);
    const { colors, dark } = useTheme();
    const commonStyles = new CommonStyles({ colors, dark });
    const styles = new VendorStyles({ colors, dark });

    return (
        <View style={commonStyles.MainView()}>
            <View style={{ marginTop: '5%' }}></View>
            {/* HEADINGS */}
            <View >
                <Text style={commonStyles.FormTitle()}>VIEW VENDOR</Text>
                <Text style={commonStyles.SubTitle()}>{vendor.VendorName.toUpperCase()}</Text>
            </View>
            {/* CONTACT NOW */}
            <View style={styles.ContactView()}>
                <Text style={commonStyles.H3()}>CONTACT VENDOR</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.ActionButtonsView()}>
                        <Ionicons name="call" size={20} color={styles.ActionButtonColor()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ActionButtonsView()}>
                        <Entypo name="message" size={25} color={styles.ActionButtonColor()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ActionButtonsView()}>
                        <Fontisto name="whatsapp" size={20} color={styles.ActionButtonColor()} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* VENDOR DETAILS */}
            <View style={{ }}>
                
            </View>
            {/* BUTTONS */}
            <View style={{ }}>

            </View>
        </View>
    )
}

export default VendorScreen;