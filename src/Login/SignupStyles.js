import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    backIcon: {
        marginLeft: 30,
        marginTop: 50
    },
    txtEmail: {
        textAlign: 'left',
        marginLeft: 30,
        marginRight: 30,
        height: 45,
        color: 'black',
        fontSize: 18
    },
    txtPwd: {
        textAlign: 'left',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 26,
        height: 45,
        color: 'black',
        fontSize: 18
    },
    txtForPwd: {
        alignSelf: "flex-end",
        fontSize: 16,
        color: 'white',
        marginRight: 25,
        marginTop: 30
    },
    viewBtnSign: {
        height: 45,
        marginTop: 70,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        shadowRadius: 3,
        shadowColor: 'gray',
    },
    viewBtnLogin: {
        height: 45,
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        shadowRadius: 3,
        shadowColor: 'gray',
    },
    btnTxtLogin: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    viewLine: {
        marginHorizontal: 30,
        height: 1,
        backgroundColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: 'black',
    },
})