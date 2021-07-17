import { Text, View, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { CommonStyles } from '../../themes/CommonStyles';
import FirebaseFunctions from "../../services/Firebase";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = ({handlerLogin, props}) => {
    const { colors, dark } = useTheme();
    const commonStyles = new CommonStyles({ colors, dark });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showActitvity, setShowActivity] = useState(false);
    useEffect(()=>{
        setShowActivity(false);
    },[]);
    return(
        <View style={commonStyles.MainViewHeading()}>
            <Text style={commonStyles.H2("center")}>Admin App</Text>
            <Text style={[commonStyles.H3(),{marginTop:'10%',marginBottom:'5%'}]}>Enter Your Credentials</Text>

            <Text style={commonStyles.H3()}>Email Address</Text>
            <TextInput 
                value={email}
                onChangeText={(text)=>setEmail(text)}
                keyboardType="email-address"
                style={commonStyles.Input()}
            />

            <Text style={commonStyles.H3()}>Password</Text>
            <TextInput 
                value={password}
                onChangeText={(text)=>setPassword(text)}
                keyboardType="visible-password"
                style={commonStyles.Input()}
            />       

            <View>
                {showActitvity ? (
                    <ActivityIndicator size={70} color={colors.card} style={{alignSelf:'center', alignContent:'center', marginTop:'20%'}}/>
                ) : (
                    <>
                    <TouchableOpacity style={{marginTop:'10%'}} onPress={async()=>{
                        if(email && password){
                            setShowActivity(true);
                            await FirebaseFunctions.LogInUser({
                                Email: email,
                                Password: password
                            }).then(res => {
                                AsyncStorage.setItem('@AdminKey', email);
                                handlerLogin(true);
                            }).catch(err=>{
                                Alert.alert('SSNCH Shop Admin',"Database Issue Occured\n"+err.message);
                                setShowActivity(false);
                            });
                        }
                        else{
                            Alert.alert("SSNCH Shop Admin","Please Complete All Fields");
                        }
                    }}>
                        <Text style={commonStyles.SingleButton()}>Log In</Text>    
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
                        <Text style={commonStyles.SingleContrast()}>Sign up</Text>
                    </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    )
}

export default LogIn;