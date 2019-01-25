import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    txtEmail: {
        textAlign: 'left',
        marginLeft: 25,
        marginRight: 25,
        paddingLeft: 20,
        height: 50,
        color: 'black',
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: 'gray',
        shadowOffset: { height: 0, width: 0 },
    },
    txtPwd: {
        textAlign: 'left',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 26,
        paddingLeft: 20,
        height: 50,
        color: 'black',
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: 'gray',
        shadowOffset: { height: 0, width: 0 },
    },
    txtForPwd: {
        alignSelf: "flex-end",
        fontSize: 16,
        color: 'white',
        marginRight: 25,
        marginTop: 30
    },
    viewBtnLogin: {
        height: 45,
        marginTop: 35,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    btnTxtLogin: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
})