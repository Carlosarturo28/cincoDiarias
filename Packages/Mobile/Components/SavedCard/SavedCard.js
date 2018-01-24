import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, ScrollView, Text, View, Dimensions, Image, ToastAndroid } from 'react-native';
import Styles from './styles';
import Utils from '../../Utils';
import Api from '../Integrations/Api';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SavedCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedCards: null,
            haveSavedCards: false
        }
    }

    componentDidMount() {
        this.getSavedCards();
    }

    async getSavedCards() {
        Utils.obtenerUserId()
            .then(user => {
                console.log(user);
                Api.consultarSavedCards(user)
                    .then(savedCards => {
                        console.log(`hola, este es: ${JSON.stringify(savedCards)}`);
                        this.setState({ savedCards: savedCards });
                    })
            })
            .catch(err => {
                throw err;
            })
    }


    renderLoadingView() {
        return <Spinner visible />;
    }

    renderEmptyStateSavedCard = () => {
        if (this.savedCards != null) {
            this.setState({ haveSavedCards: true })
        } else {
            this.setState({ haveSavedCards: false })
        }
        if (!this.state.haveSavedCards) {
            return (
                <View style={Styles.emptyState}>
                    <Image style={Styles.emptyStateImg}
                        source={require('../../assets/img/emptyStateHome.png')}
                    />
                </View>
            )
        } else {
            return null
        }
    }

    renderSavedCard = savedCards => {

        const array = savedCards.map(item => {
            return (<View style={Styles.externalCard}>
                <View style={Styles.card}>
                    <Text style={Styles.word}>{item.word}</Text>
                    <Text style={Styles.description}>{item.description}</Text>
                </View>
            </View>);
        })

        return array;
    };

    render() {
        const contenido = this.state.savedCards === null ?
            this.renderLoadingView() :
            this.renderSavedCard(this.state.savedCards);
        return (
            <ScrollView style={Styles.container}>
                {contenido}
            </ScrollView>
        )
    }
}