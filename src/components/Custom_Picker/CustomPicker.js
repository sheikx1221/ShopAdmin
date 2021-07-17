import React, { useState, useEffect } from 'react';
import { Modal, Text, TouchableOpacity, View, FlatList } from 'react-native'; 
import { useTheme } from '@react-navigation/native';
import { CustomPickerStyles } from './CustomPicker.Styles';

const PickerItems = (props) => {
    const menu = props.menu;
    const { colors, dark } = useTheme();
    return (
        <TouchableOpacity key={menu} style={{
            borderBottomWidth: 0.6,
            borderColor: dark ? colors.text : colors.card,
            padding: '5%',
        }} onPress={()=>props.onPressHandler(menu)}>
            <Text style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 16,
                color: colors.text
            }}>{menu}</Text>
        </TouchableOpacity>
    )
}

const CustomPicker = (props) => {
    const { List, Function, SelectedValue, Field, state } = props.properties;
    const { colors, dark } = useTheme();
    const styles = new CustomPickerStyles({ colors, dark });
    const [Value, setSelectedValue] = useState(SelectedValue ? SelectedValue.toUpperCase() : "NOTHING SELECTED");
    
    return (
        <Modal 
            visible={state}
            transparent={true}
            onDismiss={()=>props.handlerPicker(false)}
            onRequestClose={()=>props.handlerPicker(false)}
        >
            <View style={styles.MainView()}>
                <View style={styles.SubView()}>
                    <Text style={styles.Title()}>SELECT {Field.toUpperCase()}</Text>
                    <Text style={styles.SubTitle()}>{Value}</Text>
                    <View style={{marginBottom: 10}}></View>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        data={List}
                        renderItem={({item, index})=>(
                            <PickerItems menu={item} onPressHandler={(valueSelected)=>{
                                setSelectedValue(valueSelected.toUpperCase());
                                Function(valueSelected.toUpperCase());
                            }}/>
                        )}
                        keyExtractor={(item, index)=>index+""}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CustomPicker;