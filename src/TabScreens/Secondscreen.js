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
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }}
                    resizeMode='cover'
                    source={require('../Resources/bg.png')}>

                    <Text style={{ marginTop: 50, marginLeft: 30, fontSize: 30, fontWeight: '700' }}>Second Screen</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 50, marginLeft: 30, marginRight: 30, height: 200, borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>This is Content Screen</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }


}
