import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, AsyncStorage, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./SignupStyles";
import * as validation from "../Helper/Validate"
import * as Alerts from '../Helper/Alerts'
import * as constant from '../Helper/Constants'
export default class Signup extends Component {
    static navigationOptions = {
        title: "Login"
    }
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    btnSigninPress = () => {
        let email = this.state.email;
        let pwdValue = this.state.password;
        Keyboard.dismiss();

        if (!validation.validateEmail(email)) {
            Alerts.showAlert(constant.commonConstant.invalidEmail);
        } else if (!validation.validatePassword(pwdValue)) {
            Alerts.showAlert(constant.commonConstant.invalidPassword);
        }
        else {
            let userData = {
                email: this.state.email,
                password: this.state.password,
            }
            AsyncStorage.setItem("userData", JSON.stringify(userData))
            constant.commonConstant.emitter.emit("loginEvent", "ok");
        }
    }
    back = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, backgroundColor: "#F3FDFE" }}>
                <View style={styles.viewLogo}>
                    <Image source={require('../Resources/logo.png')}></Image>
                </View>
                <View style={{ marginTop: 70 }}>
                    <TextInput
                        autoCapitalize="none"
                        onChangeText={txt => this.setState({ email: txt })}
                        value={this.state.email}
                        placeholder="Email ID"
                        placeholderTextColor="black"
                        style={styles.txtEmail}
                        onSubmitEditing={() => {
                            this.Password.focus();
                        }}
                    />
                    <View style={styles.viewLine}></View>
                    <TextInput
                        autoCapitalize="none"
                        onChangeText={txt => this.setState({ password: txt })}
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={styles.txtPwd}
                        value={this.state.password}
                        secureTextEntry={true}
                        returnKeyType="done"
                        ref={input => {
                            this.Password = input;
                        }}
                    />
                    <View style={styles.viewLine}></View>
                    <TouchableOpacity onPress={this.btnSigninPress}>
                        <View style={styles.viewBtnSign}>
                            <Text style={styles.btnTxtLogin}>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.back}>
                        <View style={styles.viewBtnLogin}>
                            <Text style={styles.btnTxtLogin}>Back to Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
