import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { AppearanceProvider } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, Fontisto, Entypo, FontAwesome5 } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import ThemeLight from './src/themes/LightTheme';
import ThemeDark from './src/themes/DarkTheme';
import { DrawerStyle } from './src/themes/DrawerStyles';


import firebaseapp from './src/services/Firebase';
import LogIn from './src/screens/LogIn/Login';
import Signup from './src/screens/LogIn/Signup';
// EMPLOYEES
import EmployeeHomeScreen from './src/screens/Employees/Home';
// CUSTOMERS
import CustomerHomeScreen from './src/screens/Customers/Home';
import AddCustomer from './src/screens/Customers/Add/AddCustomer';
// VENDORS
import VendorHomeScreen from './src/screens/Vendors/Home';
import AddVendorScreen from './src/screens/Vendors/Add/AddVendor';
import ShowVendors from './src/screens/Vendors/View/ShowVendors';
import VendorScreen from './src/screens/Vendors/Vendor/Vendor';

const MainDrawer = createDrawerNavigator();

const CustomerStack = createStackNavigator();
const VendorStack = createStackNavigator();
const EmployeesStack = createStackNavigator();
const SalesStack = createStackNavigator();
const AuthStack = createStackNavigator();

function randomScreen(){
  return (
    <View>
      <Text style={{alignSelf:'center', marginTop:'50%', fontSize:34, fontWeight:'bold'}}>TEST SCREEN</Text>
    </View>
  );
}
function CommonStackOptions(label, toggleDrawer, hideDrawer, handlerMode, mode){
  const { colors } = useTheme();
  return({
    headerShown: false
  });
}
function _VendorStack(props, handlerMode, mode){  
  return (
    <VendorStack.Navigator>
      <VendorStack.Screen name="Home" component={VendorHomeScreen} options={CommonStackOptions()}/>
      <VendorStack.Screen name="Add_Vendor" component={AddVendorScreen} options={CommonStackOptions()}/>
      <VendorStack.Screen name="View_Vendors" component={ShowVendors} options={CommonStackOptions()}/>
      <VendorStack.Screen name="View_Vendor" component={VendorScreen} options={CommonStackOptions()}/>
    </VendorStack.Navigator>
  )
}
function _CustomerStack(props, handlerMode, mode){
  return (
    <CustomerStack.Navigator >
      <CustomerStack.Screen name="Customer_Home" component={CustomerHomeScreen} options={CommonStackOptions()}/>
      <CustomerStack.Screen name="Add_Customer" component={AddCustomer} options={CommonStackOptions()}/>
    </CustomerStack.Navigator>
  )
}
function _EmployeeStack(){
  return (
    <EmployeesStack.Navigator>
      <EmployeesStack.Screen name="Employee_Home" component={EmployeeHomeScreen} options={CommonStackOptions()}/>
    </EmployeesStack.Navigator>
  )
}
function _SalesStack(){
  return (
    <SalesStack.Navigator>
      <SalesStack.Screen name="Sales_Home" component={randomScreen} options={CommonStackOptions()}/>
    </SalesStack.Navigator>
  )
}
function _MainDrawer(props){
  const { mode, handlerMode } = props;
  const { colors, dark } = useTheme();
  return (
    <MainDrawer.Navigator 
      drawerContentOptions={{
          labelStyle: DrawerStyle.labelStyles(dark ? colors.text : colors.background),
      }}
      drawerContent={(props)=>(
        <View style={{ flex: 1 }}>
          <View
            style={DrawerStyle.headerStyle(colors.border)}
          >
            <TouchableOpacity onPress={()=>handlerMode()} style={DrawerStyle.themeLabelStyle()}>
              {mode === "dark" ? (
                <Entypo name="light-up" size={35} color={colors.background} style={{}} />
              ) : (
                <MaterialIcons name="nightlight-round" size={35} color={colors.background} style={{}} />
              )}
            </TouchableOpacity>
            <Text style={DrawerStyle.headerLabel(colors.background)}>
              SSNCH {'\n'}Shop Admin
          </Text>
            <Text style={DrawerStyle.userLabelStyle(colors)}>Welcome Hassan Nasir</Text>
          </View>
          <DrawerItemList {...props} />
        </View>
      )}
      >
      <MainDrawer.Screen name="Customers" component={_CustomerStack}/>
      <MainDrawer.Screen name="Vendors" component={_VendorStack} />
      <MainDrawer.Screen name="Employees" component={_EmployeeStack} />
      <MainDrawer.Screen name="Sales" component={_SalesStack} />
    </MainDrawer.Navigator>
  )
}
function _AuthStack(props){
  const { handlerLogin } = props;
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" children={(props)=><LogIn props={props} handlerLogin={handlerLogin}/>} options={CommonStackOptions("SSNCH",()=>{},true)}/>
      <AuthStack.Screen name="Signup" component={Signup} options={CommonStackOptions("SSNCH",()=>{},true)}/>
    </AuthStack.Navigator>
  )
}
export default function App() {
  firebaseapp.initalize();
  const [logged, setLogged] = useState(false);
  const [splash, setSplash] = useState(true);
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState({...DefaultTheme, colors:ThemeLight});
  const { width, height } = Dimensions.get('screen');
  const [loaded, setLoaded] = useState(false);
  function changeMode(value){
    if(value) return mode;
    console.log(mode);
    if(mode === 'light'){
      setTheme({...DarkTheme, colors:ThemeDark });
      setMode('dark');
    }
    else{
      setTheme({...DefaultTheme, colors:ThemeLight});
      setMode('light');
    }
  }

  useEffect(()=>{
    async function getAdminKey(){
      await AsyncStorage.getItem('@AdminKey').then(res=>{
        console.log(res);
        if(res) setLogged(true);
      }).catch(err=>{
        console.log(err);
      });
    }
    async function loadFonts(){
      await Font.loadAsync({
        'Nunito': require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
        'Nunito-SemiBold': require('./assets/fonts/Nunito/Nunito-SemiBold.ttf'),
        'Nunito-Bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
        'Nunito-Regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf')
      }).then(res=>{
        console.log("FONTS LOADED!");
      }).catch(Err=>{
        console.log(Err);
      });
      setLoaded(true); 
    }
    loadFonts();
    getAdminKey();
    setSplash(false);
  },[]);

  return (
    <AppearanceProvider>
      <StatusBar 
        // backgroundColor={mode == "dark" ? DarkTheme.colors.background : DefaultTheme.colors.notification } 
        style={mode==="dark"?"light":"dark"}
      />
      {loaded && (
        <NavigationContainer theme={theme}>
          {splash ?
            <Image source={require('./assets/splash.png')} style={{ width: width, height: height + 30 }} resizeMode="contain" />
            :
            <>
              {logged ?
                <_MainDrawer
                  handlerMode={changeMode}
                  mode={mode}
                />
                :
                <_AuthStack
                  handlerLogin={setLogged}
                  handlerMode={changeMode}
                  mode={mode}
                />}
            </>
          }
        </NavigationContainer>
      )}
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
