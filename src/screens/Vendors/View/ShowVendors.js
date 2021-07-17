import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CommonStyles } from '../../../themes/CommonStyles';
import { ShowVendorStyles } from './ShowVendor.Styles';
import { Octicons } from '@expo/vector-icons';
import { Places } from '../../../services/Vendors/Database';
import { VendorFirebaseFunctions } from '../../../services/Vendors/Firebase';
import { wrapInVendors } from '../../../entities/Vendor.entity';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('screen');
const ShowVendors = (props) => {
    const theme = useTheme();
    const commonStyles = new CommonStyles(theme);
    const styles = new ShowVendorStyles(theme);

    const [selectedPlace, setSelectedPlace] = useState("   All   ");
    const [name, setName] = useState();
    const [loading, setLoading] = useState(false);
    const [vendors, setVendors] = useState();

    async function getVendorsWithCriteria(){
        setLoading(true);
        const vendors = await VendorFirebaseFunctions.GetVendors();
        if (typeof vendors == "boolean") {
            setVendors([]);
        }
        else {
            setVendors(vendors);
        }
        setLoading(false);
    }

    function filterByPlace([...vendors]){
        if (selectedPlace === "   All   ") return vendors;
        return vendors.filter((vendor, index)=>{
            if (vendor.Place === selectedPlace) return true;
            else return false;
        })
    }

    useEffect(() => {
        if (!vendors) getVendorsWithCriteria();
    }, []);

    return (
        <SafeAreaView style={commonStyles.MainView()}>
            <StatusBar 
                backgroundColor={theme.colors.background}
                style={ theme.dark ? "light" : "dark" }
            />
            <Text style={commonStyles.FormTitle()}>VIEW VENDORS</Text>
            <Text style={commonStyles.SubTitle()}>LIST OF VENDORS</Text>

            {/* SEARCH BAR */}
            <View
                style={styles.SearchBar()}
            >
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.SearchBarText()}
                    keyboardType="numbers-and-punctuation"
                    autoCapitalize="characters"
                    placeholder="SEARCH VENDOR NAME"
                    placeholderTextColor={styles.getTextColor()}
                />
                <TouchableOpacity style={{ flex: 0.1 }}>
                    <Octicons name="search" color={styles.getTextColor()} size={20} />
                </TouchableOpacity>
            </View>
            {/* TAGS FOR PLACES */}
            <View style={styles.TagsView()}>
                {["   All   ", ...Places].map((item, index) => (
                    <TouchableOpacity
                        key={index + ""}
                        onPress={() => setSelectedPlace(item)}
                        style={styles.FlexRowView(selectedPlace === item)}
                    >
                        <Text style={styles.TagsText(selectedPlace === item)}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* LIST VENDORS */}
            {loading && (
                <View style={styles.IndicatorView()}>
                    <ActivityIndicator
                        size={100}
                        color={styles.IndicatorColor()}
                    />
                    <Text style={styles.IndicatorText()}>LOADING VENDORS{"\n"}PLEASE WAIT</Text>
                </View>
            )}
            {!loading && (
                <FlatList
                    data={vendors ? filterByPlace(wrapInVendors(vendors)) : []}
                    style={{ marginLeft: -10 }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.ListView()} onPress={() => {
                            props.navigation.navigate("View_Vendor", {
                                vendor: item
                            })
                        }}>
                            {/* BOOK PAGE */}
                            <View style={styles.PageView()}>
                                <Text style={styles.PageText()}>{item.PageNumber.replace("/", "\n")}</Text>
                            </View>
                            {/* NAME | ADDRESS | TURN OVER */}
                            <View style={styles.CenterView()}>
                                <View >
                                    <Text style={styles.VendorName()}>{item.VendorName.toUpperCase()}</Text>
                                </View>
                                <View >
                                    <Text style={styles.Address()}>{`${item.Place}`}</Text>
                                </View>
                                <View >
                                    <Text style={styles.Turn()}>{`${item.VendorDay} | ${item.VendorTurn} TURN`}</Text>
                                </View>
                            </View>
                            {/* BALANCE */}
                            <View style={styles.BalanceView()}>
                                <Text style={styles.BalanceText()}>BALANCE</Text>
                                <Text style={styles.BalanceText()}>{item.StartingBalance}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

export default ShowVendors;