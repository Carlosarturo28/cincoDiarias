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
        paddingRight: 24
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
    wordOpen: {
        textAlign: 'left',
        fontSize: 36,
        fontFamily: 'Montserrat-Medium',
        color: '#00213F',
        marginTop: 16,
        marginLeft: 26,
        marginBottom: 16,
        backgroundColor: 'transparent'
    },
    descriptionOpen: {
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
    closeImg: {
        width: 40,
        height: 40,
    },
    close: {
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    topPadding: {
        paddingTop: 24
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
    modalContainer: {
        zIndex: 99,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',        
      }
})