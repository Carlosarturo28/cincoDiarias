import React from "react";
import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
    box1: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    externalCard: {
        width: '100%',
        paddingTop: 20,
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
        fontSize: 36,
        fontFamily: 'Montserrat-Medium',
        color: '#00213F',
        marginTop: 16,
        marginLeft: 26,
        marginBottom: 16,
        backgroundColor: 'transparent'
    },
    description: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'Montserrat-Light',
        color: '#666666',
        marginTop: 10,
        marginLeft: 26,
        backgroundColor: 'transparent'
    },
    example: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Montserrat-LightItalic',
        color: '#999999',
        marginTop: 10,
        marginLeft: 26,
        backgroundColor: 'transparent'
    },
    grammar: {
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: '#B3B3B3',
        marginTop: 10,
        marginLeft: 26,
        marginBottom: 24,
        backgroundColor: 'transparent'
    },
    about: {
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginRight: 18,
        marginTop: 30,
    },
    emptyState: {
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    emptyStateImg: {
        width: '80%',
        height: 250
    },
    saved: {
        zIndex: 2,
        position: 'absolute',
        marginLeft: width-208,
        marginRight: 18,
        marginTop: height-82,
    },
    savedImg: {
        width: 190,
        height: 44,
    },
    aboutImg: {
        width: 30,
        height: 30,
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
});