import React, { Component } from 'react';
import { Platform, StyleSheet, AsyncStorage, Text, View, KeyboardAvoidingView, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./LoginStyles";
import * as validation from "../Helper/Validate"
import * as Alerts from '../Helper/Alerts'
import * as constant from '../Helper/Constants'
var { EventEmitter } = require("fbemitter");


export default class Login extends Component {
    static navigationOptions = {
        title: "Login"
    }
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            modalVisible: false,
        };
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    btnLoginPress = () => {
        let email = this.state.email;
        let pwdValue = this.state.password;
        Keyboard.dismiss();

        if (!validation.validateEmail(email)) {
            Alerts.showAlert(constant.commonConstant.invalidEmail);
        } else if (!validation.validatePassword(pwdValue)) {
            Alerts.showAlert(constant.commonConstant.invalidPassword);
        }
        else {
            this.setModalVisible(!this.state.modalVisible)
            let userData = {
                email: this.state.email,
                password: this.state.password,
            }
            AsyncStorage.setItem("userData", JSON.stringify(userData))

            constant.commonConstant.emitter.emit("loginEvent", "ok");

        }
    }
   
    render() {
        const { navigate } = this.props.navigation
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }}
                    resizeMode='cover'
                    source={require('../Resources/bg.png')}>

                    <View style={styles.viewLogo}>
                        <Image source={require('../Resources/logo.png')}></Image>
                    </View>

                    <View style={{ marginTop: 80 }}>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={txt => this.setState({ email: txt })}
                            value={this.state.email}
                            placeholder="Email ID"
                            style={styles.txtEmail}
                            onSubmitEditing={() => {
                                this.Password.focus();
                            }}
                        />
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={txt => this.setState({ password: txt })}
                            placeholder="Password"
                            style={styles.txtPwd}
                            value={this.state.password}
                            secureTextEntry={true}
                            returnKeyType="done"
                            ref={input => {
                                this.Password = input;
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={styles.txtForPwd}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.btnLoginPress}>
                            <View style={styles.viewBtnLogin}>
                                <Text style={styles.btnTxtLogin}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', marginTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>New User? Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}
