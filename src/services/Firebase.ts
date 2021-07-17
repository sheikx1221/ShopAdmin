import firebase from 'firebase';
import { LoginObject, SignUpObject } from './Interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
let ActiveUser = null;
var firebaseConfig = {
    apiKey: "AIzaSyA7aZQlzGiydhBXnWQj7NklEcs3h2KzoVY",
    authDomain: "ssnch-app.firebaseapp.com",
    projectId: "ssnch-app",
    storageBucket: "ssnch-app.appspot.com",
    messagingSenderId: "49710110482",
    appId: "1:49710110482:web:686f10d072ec58056685cb",
    measurementId: "G-11TC493KW8"
};
function initalize(){
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase running!");
    }
}
async function LogInUser(UserObject: LoginObject){
    await firebase.auth().signInWithEmailAndPassword(UserObject.Email, UserObject.Password).then((res)=>{
        return true;
    }).catch(err=>{
        throw err;
    });
}
async function SignUpUser(UserObject: SignUpObject){
    await firebase.auth().createUserWithEmailAndPassword(UserObject.Email, UserObject.Password).then(()=>{
        const rootRef = firebase.database().ref().child('Admin');
        rootRef.push({
            UserName: UserObject.Username,
            Phone: UserObject.Phone,
            Email: UserObject.Email,
        }).then(async(res)=>{
            await AsyncStorage.setItem('@AdminKey',res.key.toString());
        });
    }).catch(err=>{
        throw err;
    });
}
function UpdateActiveUser(user){
    ActiveUser = user;
}
const MainFirebase = {
    initalize,
    LogInUser,
    SignUpUser,
    UpdateActiveUser
}
export default MainFirebase;