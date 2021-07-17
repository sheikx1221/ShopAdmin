import React,{ useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MainView, H2, H3, Input, SingleButton } from '../../themes/CommonStyles';
import FirebaseFunctions from '../../services/Firebase';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUserName] = useState("");
    const [showActitvity, setShowActivity] = useState(false);

    const { colors, dark } = useTheme();
    return (
        <View style={MainView(colors)}>
            <Text style={H2(colors, "center")}>Admin App</Text>
            <Text style={[H3(colors),{marginTop:'10%',marginBottom:'5%'}]}>Signup using your credentails</Text>
        
            <ScrollView >
                <Text style={H3(colors)}>Username</Text>
                <TextInput 
                    value={username}
                    onChangeText={(text)=>setUserName(text)}
                    keyboardType="default"
                    style={Input(colors)}
                />

                <Text style={H3(colors)}>Email Address</Text>
                <TextInput 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    keyboardType="email-address"
                    style={Input(colors)}
                />

                <Text style={H3(colors)}>Password</Text>
                <TextInput 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    keyboardType="visible-password"
                    style={Input(colors)}
                />            

                <Text style={H3(colors)}>Phone Number</Text>
                <TextInput 
                    value={phone}
                    onChangeText={(text)=>setPhone(text)}
                    keyboardType="number-pad"
                    style={Input(colors)}
                />      
                <> 
                    {showActitvity ? (
                        <ActivityIndicator size={70} color={colors.card} style={{alignSelf:'center', alignContent:'center', marginTop:'5%'}}/>
                    ) : (
                        <TouchableOpacity style={{marginTop:'5%'}} onPress={async()=>{
                                if(email && password && phone && username){
                                    setShowActivity(true);
                                    await FirebaseFunctions.SignUpUser({
                                        Email: email,
                                        Password: password,
                                        Phone: phone,
                                        Username: username
                                    }).then(()=>{
                                        Alert.alert('SSNCH Shop Admin','Welcome to SSNCH Admin App');
                                        setShowActivity(false);
                                        props.navigation.goBack();
                                    }).catch(err=>{
                                        Alert.alert("SSNCH Shop Admin","Database Issue\n"+ err);
                                    });
                                }
                                else{
                                    Alert.alert("SSNCH Shop Admin","Please Complete All Fields");
                                }
                            }}>
                                <Text style={SingleButton(colors)}>Sign Up</Text>    
                        </TouchableOpacity>
                    )}
                </>
                                 
            </ScrollView>
        </View>
    )
}

export default Signup;