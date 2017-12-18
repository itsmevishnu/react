import React, {Component} from 'react';
import {View, 
    Text,
    StyleSheet,
    Dimensions, 
    Button
} from 'react-native';
// import { Button } from 'react-native-elements';
var { height } = Dimensions.get('window');
var number = 10;
var box_height = height/10;
export default class Home extends Component { 
    render() {
        return (
            <View style={style.container}>
            <View style={style.box1}><Text style={style.header}>Dr. Brian</Text></View>
            
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            
            <Button
            onPress={testMe}
            title="Send Button"
            style={style.button}
            accessibilityLabel="Learn more about this purple button"
            />
            </View>
        );
    }
}

function testMe() {
    alert("Send");
}
const style =StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },  
    box1: {
        height: box_height,
        backgroundColor:'#fff'
    },
    box2: {
        height: box_height,
        backgroundColor:'#CCEAFF',
    },
    header: {
        height: box_height,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', 
        backgroundColor: '#05A5D1'
        
    },
    button: {
        height: box_height,
        backgroundColor:"#05A5D1",
        color: 'white',
    }
});