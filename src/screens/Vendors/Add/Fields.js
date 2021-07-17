import { Alert } from 'react-native';

function notEmpty(type, field, value){
    if (value !== "") return true;
    else {
        Alert.alert('Validation Error', `${field} in ${type} is blank!.`);
        return false
    };
}

function checkLength(type, field, value){
    if (value.length > 3) return true;
    else {
        Alert.alert('Validation Error', `${field} in ${type} has length less than 3.`);
        return false;
    }
}

function isPhone(type, field, value) {
    if (/[a-zA-Z]/g.test(value)) {
        Alert.alert('Validation Error', `${field} in ${type} includes Alphabets. Phone Numbers cannot have alphabets`)
        return false
    }
    else if (value.length === 11) return true;
    else {
        Alert.alert('Validation Error', `${field} in ${type} has length less than 11. Phone Numbers must be of length 11 exactly.`)
        return false
    };
}

function isNumber(type, field, value) {
    if (/[a-zA-Z]/g.test(value)) {
        Alert.alert('Validation Error', `${field} in ${type} includes Alphabets. Numbers cannot have alphabets`)
        return false
    }
    else return true;
}

function validateEmail(type, field, value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function verifyPageNumberFormat(type, field, value){
    const re = /([A-Z]*)\w+\/[0-9]{1,3}/g;
    const test = re.test(value);
    if (test) return true;
    else {
        Alert.alert('Validation Error', 'Page Number should be of the format Book/PageNumber');
        return false;
    }
}

function AddVendorFields(
    Name, setName,
    Phone, setPhone,
    Email, setEmail,
    Whatsapp, setWhatsapp,
    ShopName, setShopName,
    ShopPlace, setShopPlace, ListOfShops,
    ShopAddress, setShopAddress,
    ShopPhone, setShopPhone,
    StartingBalance, setStartingBalance,
    DayVendor, setDayVendor, ListDays,
    TurnDays, setTurnDays, ListTurns,
    pageNumber, setPageNumber
){
    const Data = [
        {
            "Basic Information": [
                {
                    Field: "Name",
                    Description: "ENTER VENDOR NAME",
                    Function: setName,
                    Value: Name,
                    Required: true,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Phone",
                    Description: "ENTER VENDOR PHONE",
                    Function: setPhone,
                    Value: Phone,
                    Required: false,
                    Validate: [isPhone],
                    Keyboard: "Number"                 
                },
                {
                    Field: "Email",
                    Description: "ENTER VENDOR EMAIL",
                    Function: setEmail,
                    Value: Email  ,
                    Required: false,
                    Validate: [validateEmail],
                    Keyboard: "Email"                  
                },
                {
                    Field: "Whatsapp",
                    Description: "ENTER VENDOR WHATSAPP",
                    Function: setWhatsapp,
                    Value: Whatsapp,
                    Required: false,
                    Validate: [isPhone],
                    Keyboard: "Number"                   
                }
            ]
        },
        {
            "Shop Information":[
                {
                    Field: "Name",
                    Description: "ADD A SHOP NAME",
                    Function: setShopName,
                    Value: ShopName,
                    Required: true,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Place",
                    Description: "SELECT A SHOP PLACE",
                    Function: setShopPlace,
                    Value: ShopPlace,
                    List: ListOfShops,
                    Required: true,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Address",
                    Description: "ADD A SHOP ADDRESS",
                    Function: setShopAddress,
                    Value: ShopAddress,
                    Required: false,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Phone",
                    Description: "ADD A SHOP PHONE",
                    Function: setShopPhone,
                    Value: ShopPhone,
                    Required: false,
                    Validate: [notEmpty, isPhone],
                    Keyboard: "Number"
                }
            ]
        },
        {
            "Payment Information": [
                {
                    Field: "Starting Balance",
                    Description: "LAST BALANCE IN BOOK",
                    Function: setStartingBalance,
                    Value: StartingBalance,
                    Required: true,
                    Validate: [isNumber],
                    Keyboard: "Number"
                },
                {
                    Field: "Vendor's Day",
                    Description: "SELECT VENDOR'S DAY",
                    Function: setDayVendor,
                    Value: DayVendor,
                    List: ListDays,
                    Required: false,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Vendor's Turn",
                    Description: "SELECT PAYMENT TURN",
                    Function: setTurnDays,
                    Value: TurnDays,
                    List: ListTurns,
                    Required: false,
                    Validate: [notEmpty, checkLength],
                    Keyboard: "Text"
                },
                {
                    Field: "Page Number",
                    Description: "SELECT PAGE NUMBER",
                    Function: setPageNumber,
                    Value: pageNumber,
                    Required: true,
                    Validate: [notEmpty, checkLength, verifyPageNumberFormat],
                    Keyboard: "Text"
                }
            ]
        }
    ];

    return Data;
}

export default AddVendorFields;