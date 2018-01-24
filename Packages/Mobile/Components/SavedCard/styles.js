import React from "react";
import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#44C9E2'
    },
    externalCard: {
        width: '100%',
        paddingBottom: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '90%',
        borderRadius: 12,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'white',
        shadowColor: '#0096A6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        paddingRight: 24,
        shadowRadius: 4,
        elevation: 4
    },
    word: {
        textAlign: 'left',
        fontSize: 24,
        fontFamily: 'Montserrat-Medium',
        color: '#00213F',
        marginTop: 10,
        marginLeft: 26,
        marginBottom: 4,
        backgroundColor: 'transparent'
    },
    description: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Montserrat-Light',
        color: '#666666',
        marginLeft: 26,
        marginBottom: 16,
        backgroundColor: 'transparent'
    },
    topPadding: {
        paddingTop: 24
    }
})