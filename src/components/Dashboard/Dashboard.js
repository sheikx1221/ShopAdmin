import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import{ useTheme } from '@react-navigation/native';
import { DashboardStyles } from './Dashboard.Styles';
// import styles from '../../themes/DashboardStyles';

const Dashboard = (props) => {
    const { colors, dark } = useTheme();
    const styles = new DashboardStyles({ colors, dark });
    const { width, height } = Dimensions.get('screen');
    const dashBoardHeight = function(){
        switch(props.screen){
            case "Employees":
                return height * 0.10;
            case "Customers": 
                return height * 0.15;
            default: 
                return height * 0.45;    	
        }
    }
    const IgnoreGraphIn = ["Employees","Customers"];
    return(
        <View style={styles.Container(dashBoardHeight())}>
            <View style={styles.SubView()}>
                {props.screen === "Customers" ? (
                    <>
                    <View style={styles.SearchBar()}>
                        <Text style={styles.PlaceHolderText()}>Search Customer</Text>
                    </View>
                    <Text style={styles.SearchHeading()}>Customer Dashboard</Text>
                    </>
                ):(
                    <>
                    <Text style={styles.SubText()}>{props.screen}</Text>
                    <Text style={styles.Heading()}>Dashboard</Text>
                    </>
                )}
            </View>
            {!IgnoreGraphIn.includes(props.screen) && (
                <View style={styles.GraphBody()}>
                    <Text style={styles.GraphHeading()}>PAYMENTS OVERVIEW</Text>
                </View>
            )}
        </View>
    )
}

export default Dashboard;