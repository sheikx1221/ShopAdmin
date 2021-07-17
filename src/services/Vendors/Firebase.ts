import firebase from 'firebase';
import { Vendor } from '../../entities/Vendor.entity';
import { ToastAndroid } from 'react-native';

async function SaveVendor(vendor: Vendor): Promise<boolean>{
    try {
        delete vendor.id;
        const res = await firebase.database().ref('Vendors').push({
            ...vendor
        });

        if (res) {
            return true;
        }
        else {
            throw "No Response from Firebase";
        }
    }
    catch(err){
        handlerErrors(err.message ? err.message : err);
        return false; 
    }
}

async function GetVendors(): Promise<Vendor[] | boolean>{
    try {
        const res = await firebase.database().ref('Vendors').once('value');
        const vendors: Vendor[] = [];
        for (let key of Object.keys(res.val())){
            const vendor: Vendor = res.val()[key];
            vendor.id = key;
            vendors.push(vendor);
        }
        return vendors;
    }
    catch(err) {
        handlerErrors(err.message ? err.message : err);
        return false;
    }
}

function handlerErrors(message: string){
    ToastAndroid.show(message, ToastAndroid.SHORT);
}

export const VendorFirebaseFunctions = {
    SaveVendor, GetVendors
}

