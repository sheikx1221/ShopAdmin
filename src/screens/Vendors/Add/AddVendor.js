import React, { useEffect, useState } from 'react';
import { View, Alert, BackHandler } from 'react-native';
import DataEntry from '../../../components/Data_Entry/DataEntry';
import FieldsData from './Fields';
import { Places } from '../../../services/Vendors/Database';
import { VendorFirebaseFunctions } from '../../../services/Vendors/Firebase';

const AddVendorScreen = (props) => {
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Whatsapp, setWhatsapp] = useState("");
    const [ShopName, setShopName] = useState("");
    const [ShopPlace, setShopPlace] = useState("");
    const [ShopAddress, setShopAddress] = useState("");
    const [ShopPhone, setShopPhone] = useState("");
    const [StartingBalance, setStartingBalance] = useState("");
    const [DayVendor, setDayVendor] = useState("");
    const [TurnDays, setTurnDays] = useState("");
    const [pageNumber, setPageNumber] = useState("");

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            backHandler.remove();
        }
    }, []);

    function onBackPress() {
        Alert.alert(`EXIT ADD NEW VENDOR`, "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "YES", onPress: () => {
                    props.navigation.goBack();
                }
            }
        ]);
        return true;
    }

    async function onSavePress() {
        try {
            const res = await VendorFirebaseFunctions.SaveVendor({
                PageNumber: pageNumber,
                Place: ShopPlace,
                StartingBalance: StartingBalance,
                Address: ShopAddress,
                ShopPhone: ShopPhone,
                ShopName: ShopName,
                VendorName: Name,
                id: "",
                VendorDay: DayVendor,
                VendorEmail: Email,
                VendorPhone: Phone,
                VendorTurn: TurnDays,
                VendorWhatsapp: Whatsapp
            });
            
            if (res) {
                Alert.alert(
                    'New Vendor Added to Database',
                    `${Name} was added successfully in the database`,
                    [
                        {
                            text: "Save Another",
                            onPress: () => { 
                                setName("");
                                setPhone("");
                                setEmail("");
                                setWhatsapp("");
                                setShopName("");
                                setShopPlace("");
                                setShopAddress("");
                                setShopPhone("");
                                setStartingBalance("");
                                setDayVendor("");
                                setTurnDays("");
                                setPageNumber("");                              
                            },
                        },
                        {
                            text: "Exit",
                            onPress: ()=> { 
                                props.navigation.goBack();
                            }
                        }
                    ]
                );
                return true;
            }
        }
        catch(err) {
            Alert.alert('Failed to Add Vendor into Database', 'Reason: ', err.message ? err.message : err);
            return false;
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <DataEntry 
                Data={FieldsData(
                    Name, setName,
                    Phone, setPhone,
                    Email, setEmail,
                    Whatsapp, setWhatsapp,
                    ShopName, setShopName,
                    ShopPlace, setShopPlace, Places,
                    ShopAddress, setShopAddress,
                    ShopPhone, setShopPhone,
                    StartingBalance, setStartingBalance,
                    DayVendor, setDayVendor, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    TurnDays, setTurnDays, ["7 Days", "14 Days", "21 Days", "28 Days", "1 Month", "1.5 Month", "2 Months", "3 Months", "4 Months", "6 Months"],
                    pageNumber, setPageNumber
                )}
                FormTitle="ADD VENDOR"
                navigation={props.navigation}
                Save={onSavePress}
            />
        </View>
    );
}

export default AddVendorScreen;