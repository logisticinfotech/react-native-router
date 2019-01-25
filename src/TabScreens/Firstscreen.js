import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

export default class Firstscreen extends Component {

    static navigationOptions = {
        tabBarLabel: "First",
        header: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../Resources/home.png")}
                style={[{ tintColor: tintColor, width: 18, height: 18 }]}
            />
        ),
    };
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    Ç
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(214, 240, 239)" }}>
                <Text style={{ marginTop: 50, marginLeft: 30, fontSize: 30, fontWeight: '700', }}>First Screen</Text>
                <View style={{
                    height: '77%', backgroundColor: 'white', margin: 25, borderRadius: 20, overflow: 'hidden', shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                }}>
                    <Image source={require("../Resources/image1.jpg")} style={{ width: '100%', height: '75%' }} />
                    <Text style={{ fontSize: 17, margin: 10, textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>A simple tab bar on the bottom of the screen that lets you switch between different routes.</Text>
                </View>
            </View>
        );
    }
}
