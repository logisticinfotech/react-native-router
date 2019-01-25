import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground } from 'react-native';

export default class Secondscreen extends Component {

    static navigationOptions = {
        tabBarLabel: "Third",
        header: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../Resources/gallery.png")}
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

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(214, 240, 239)" }}>
                <Text style={{ marginTop: 50, marginLeft: 30, fontSize: 30, fontWeight: '700', }}>Second Screen</Text>
                <View style={{
                    height: '77%', backgroundColor: 'white', margin: 25, borderRadius: 20, overflow: 'hidden', shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                }}>
                    <Image source={require("../Resources/image2.jpg")} style={{ width: '100%', height: '75%' }} />
                    <Text style={{ fontSize: 16, margin: 10, textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>React navigation’s stackNavigator provides a way for your app to navigate between screens and manage navigation history.</Text>
                </View>
            </View>
        );
    }


}
