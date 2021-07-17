import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native';
import { useTheme, useIsFocused } from '@react-navigation/native';
import { CommonStyles } from '../../themes/CommonStyles';
import { DataEntryStyles } from './DataEntry.Styles';
import { SimpleLineIcons } from '@expo/vector-icons';
// import DataEntryStyles from '../../themes/DataEntryStyles';
import CustomPicker from '../Custom_Picker/CustomPicker';
import SaveForm from '../Custom_Save_Box/CustomSaveForm';
// import { FormTitle, SubTitle } from '../themes/CommonStyles';

const DataEntry = (props) => {
    const theme = useTheme();
    const commonStyles = new CommonStyles(theme);
    const styles = new DataEntryStyles(theme);

    const [totalItems, setTotalItems] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [keys, setKeys] = useState([]);
    const isFocused = useIsFocused();
    const [loaded, setLoaded] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [showSaveForm, setShowSaveForm] = useState(false);
    const [propsPicker, setPropsPicker] = useState(undefined);
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [keyboardHideListener, ] = useState(()=>{ Keyboard.addListener('keyboardDidHide', keyboardHide)});

    function keyboardHide() {
        setShowKeyboard(false);
    }

    useEffect(() => {
        if (!isFocused) return;
        const AllKeys = [];
        setTotalItems(props.Data.length);
        setCurrentIndex(0);
        for (let data of props.Data) {
            AllKeys.push(Object.keys(data)[0]);
        }
        setKeys(AllKeys);
        setLoaded(true);
    }, [isFocused]);

    function cutDataDown(KeyName) {
        if (KeyName) {
            return props.Data[currentIndex][KeyName];
        }
    }

    function ValidateInformation() {
        const LENGTH = props.Data.length;
        const KEYS = keys;
        let validated = true;
        mainLoop:
        for (let index = 0; index < LENGTH; index++) {
            const ArrayObject = props.Data[index][KEYS[index]];
            for(let object of ArrayObject) {
                if (object.Required && object.Value === "") {
                    Alert.alert('Validation Error', `${object.Field} in ${KEYS[index]} is required, Please Add A value`);
                    validated = false;
                    break mainLoop;
                }
                else if (object.Value !== "") {
                    for (let func of object.Validate) {
                        console.log(func, object.Field);
                        const result = func(KEYS[index], object.Field, object.Value);
                        if (!result) {
                            validated = false;
                            break mainLoop;
                        }
                    }
                }
            }
        }

        if (validated) return true;
        else return false;
    }

    return (
        <View style={commonStyles.MainView()}>
            {(showPicker && propsPicker) && (
                <CustomPicker 
                    properties={propsPicker}
                    handlerPicker={setShowPicker}
                    state={showPicker}
                />
            )}
            {showSaveForm && (
                <SaveForm 
                    handlerForm={setShowSaveForm}
                    state={showSaveForm}
                    FormName={props.FormTitle}
                    Validate={ValidateInformation}
                    Save={props.Save}
                    Reset={()=>{
                        setCurrentIndex(0);
                        setShowSaveForm(false);
                    }}
                />
            )}
            {/* FORM NAME */}
            <Text style={commonStyles.FormTitle()}>{props.FormTitle}</Text>
            {/* INFORMATION TYPE */}
            <Text style={commonStyles.SubTitle()}>{keys.length > 0 && keys[currentIndex].toUpperCase()}</Text>
            {/* FORM DATA ENTRY */}
            <View style={styles.FormStyle()}>
                {loaded && (
                    <FlatList
                        data={cutDataDown(keys[currentIndex])}
                        renderItem={({ item }) => (
                            <View >
                                <Text style={styles.FormLabel()}>
                                    {`${item.Required ? "*" : ""}${item.Field}`}
                                </Text>
                                {item.List ? (
                                    <TouchableOpacity 
                                        onPress={()=>{
                                            setShowPicker(true)
                                            setPropsPicker({
                                                List: item.List,
                                                SelectedValue: item.Value,
                                                Function: item.Function,
                                                Field: item.Field
                                            });
                                        }}
                                    >
                                        <Text style={styles.FormInput()}>
                                            {item.Value ? item.Value: item.Description}
                                        </Text>
                                    </TouchableOpacity>
                                    ) : (
                                    <TextInput
                                        value={item.Value}
                                        onChangeText={(text) => item.Function(text)}
                                        style={styles.FormInput()}
                                        placeholder={item.Description}
                                        placeholderTextColor={styles.TextColor()}
                                        onTouchStart={()=>setShowKeyboard(true)}
                                        keyboardType={
                                            item.Keyboard == "Text" ? "default" : 
                                            item.Keyboard == "Number" ? "number-pad" : 
                                            item.Keyboard == "Email" ? "email-address" : 
                                            "default"
                                        }
                                    />
                                )}
                            </View>
                        )}
                        keyExtractor={(item, index) => index + ""}
                    />
                )}
            </View>
            {/* NEXT BUTTONS */}
            {!showKeyboard && (
                <View style={styles.nextButtons()}>
                    <TouchableOpacity
                        onPress={() => {
                            const previousIndex = currentIndex - 1;
                            if (previousIndex >= 0) setCurrentIndex(previousIndex);
                        }}
                    >
                        <SimpleLineIcons
                            name="arrow-left"
                            size={70}
                            color={styles.TextColor()}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const nextIndex = currentIndex + 1;
                            if (nextIndex < totalItems) setCurrentIndex(nextIndex);
                            if (nextIndex == totalItems) setShowSaveForm(true);
                        }}
                    >
                        <SimpleLineIcons
                            name="arrow-right"
                            size={70}
                            color={styles.TextColor()}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default DataEntry;