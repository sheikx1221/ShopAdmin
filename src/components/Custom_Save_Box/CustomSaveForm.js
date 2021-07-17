import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CustomSaveFormStyles } from './Custom_Save.Styles';

const SaveForm = (props) => {
    const { colors, dark } = useTheme();
    const styles = new CustomSaveFormStyles({ colors, dark });

    const [validated, setValidated] = useState(false);
    const [showActitvity, setShowActivity] = useState(false);
    const { state, handlerForm, FormName, Validate, Save, Reset } = props;
    return (
        <Modal style={{ flex: 1 }} visible={state} transparent={true} onRequestClose={()=>handlerForm(false)} onDismiss={()=>handlerForm(false)}>
            <View style={styles.MainView()}>
                <View style={styles.SubView()}>
                    <Text style={styles.Title()}>{FormName.toUpperCase()}</Text>
                    <Text style={styles.SubTitle()}>SAVE INFORMATION</Text>
                
                    <View style={styles.SubForm()}>
                        <Text style={styles.Label()}>VALIDATE INFORMATION</Text>
                        <TouchableOpacity onPress={()=>{
                            if (validated) return;
                            const check = Validate();
                            if ( check ) setValidated(true);
                        }}>
                            <Text style={styles.Button()}>{validated ? "INFORMATION VALIDATED" : "VALIDATE"}</Text>
                        </TouchableOpacity>

                        <Text style={styles.Label()}>SAVE INFORMATION</Text>
                        <TouchableOpacity onPress={async()=>{
                            setShowActivity(true)
                            if (!validated) {
                                Alert.alert('Validation Error', 'Please Validate Before Saving!');
                            }
                            else {
                                const res = await Save();
                                if (res) Reset();
                            }
                            setShowActivity(false);
                        }}>
                            {showActitvity && (
                                <ActivityIndicator 
                                    color={colors.text}
                                    size={20}
                                    style={styles.Button()}
                                />
                            )}
                            {!showActitvity && (
                                <Text style={styles.Button()}>SAVE TO DATABASE</Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={{height: 50}}></View>
                </View>
            </View>
        </Modal>
    );
}
export default SaveForm;