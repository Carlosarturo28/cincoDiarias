import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, ScrollView, Modal, Text, View, Dimensions, Image, ToastAndroid } from 'react-native';
import Styles from './styles';
import Utils from '../../Utils';
import Api from '../Integrations/Api';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SavedCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedCards: null,
            haveSavedCards: false,
            modalVisible: false,
            cardIndex: null
        }
    }

    componentDidMount() {
        this.getSavedCards();
    }

    openModal(index) {
        this.setState({ modalVisible: true, cardIndex: index });
    }

    renderCardOpened() {
        return (
            <View style={Styles.modalContainer}>
                <View style={Styles.externalCard}>
                    <View style={Styles.card}>
                        <Text style={Styles.wordOpen}>{this.state.savedCards[this.state.cardIndex].word}</Text>
                        <Text style={Styles.descriptionOpen}>{this.state.savedCards[this.state.cardIndex].description}</Text>
                        <Text style={Styles.example}>{this.state.savedCards[this.state.cardIndex].example}</Text>
                        <Text style={Styles.grammar}>{this.state.savedCards[this.state.cardIndex].grammar}</Text>
                    </View>
                </View>
                <View style={Styles.close}>
                    <TouchableOpacity onPress={() => this.closeModal()}>
                        <Image style={Styles.closeImg}
                            source={require('../../assets/img/close.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    closeModal() {
        this.setState({ modalVisible: false, });
    }

    async getSavedCards() {
        Utils.obtenerUserId()
            .then(user => {
                Api.consultarSavedCards(user)
                    .then(savedCards => {
                        this.setState({ savedCards: savedCards });
                    })
            })
            .catch(err => {
                throw err;
            })
    }

    renderCards() {
        const render = this.state.savedCards.length == 0 ?
            <View style={Styles.emptyState}>
                <Image style={Styles.emptyStateImg}
                    source={require('../../assets/img/emptyStateSavedCards.png')}
                />
            </View>
         :
        this.renderSavedCard(this.state.savedCards);
        return render;
    }

    renderLoadingView() {
        return <Spinner visible />;
    }

    cutString = value => {
        if (value.length > 64) return value.substring(0, 64) + '...';
        return value;
    }

    renderSavedCard = savedCards => savedCards.map((item, index) => (
        <TouchableOpacity key={item._id} onPress={() => this.openModal(index)}>
            <View style={Styles.externalCard}>
                <View style={Styles.card}>
                    <Text style={Styles.word}>{item.word}</Text>
                    <Text style={Styles.description}>{this.cutString(item.description)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    ));

    render() {
        const modalContent = this.state.cardIndex === null ?
            contenido :
            this.renderCardOpened();

        const contenido = this.state.savedCards === null ?
            this.renderLoadingView() :
            this.renderCards();


        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.topPadding}>
                </View>
                {contenido}
                <Modal
                    transparent
                    visible={this.state.modalVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}
                >
                    {modalContent}
                </Modal>
            </ScrollView>
        )
    }
}