import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, StatusBar, TouchableOpacity, Text, Linking, Modal, View, Dimensions, Image, ToastAndroid } from 'react-native';
import Styles from './styles';
import SwiperContainer from './SwiperContainer';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        word: 'Experience',
        description: 'Knowledge that you get from doing a job, or from doing, seeing, or feeling something',
        example: 'You’ve obviously had experience of babysitting.',
        grammar: 'noun'
      },
      {
        word: 'Experience',
        description: 'Knowledge that you get from doing a job, or from doing, seeing, or feeling something',
        example: 'You’ve obviously had experience of babysitting.',
        grammar: 'noun'
      },
      {
        word: 'Experience',
        description: 'Knowledge that you get from doing a job, or from doing, seeing, or feeling something',
        example: 'You’ve obviously had experience of babysitting.',
        grammar: 'noun'
      }],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      modalVisible: false,
    }
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false, });
  }

  renderCard = card => {
    return (
      <View style={Styles.externalCard}>
        <View style={Styles.card}>
          <Text style={Styles.word}>{card.word}</Text>
          <Text style={Styles.description}>{card.description}</Text>
          <Text style={Styles.example}>{card.example}</Text>
          <Text style={Styles.grammar}>{card.grammar}</Text>
        </View>
      </View>
    )
  };

  renderEmptyState = () => {
    if (this.state.swipedAllCards) {
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

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    console.log(this.state)
    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />

        <View style={Styles.about}>
          <TouchableOpacity onPress={() => this.openModal()}>
            <Image style={Styles.aboutImg}
              source={require('../../assets/img/about.png')}
            />
          </TouchableOpacity>
        </View>
        <SwiperContainer
          modalVisible={this.state.modalVisible}
          onSwiped={this.onSwiped}
          title={this.state.titles}
          cards={this.state.cards}
          // cardIndex={this.state.cardIndex}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
        />
        {this.renderEmptyState()}
        <View style={Styles.saved}>
          <TouchableOpacity onPress={() => ToastAndroid.show('A pikachu appeared nearby!', ToastAndroid.SHORT)}>
            <Image style={Styles.savedImg}
              source={require('../../assets/img/savedCards.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType={'fade'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={Styles.modalContainer}>
            <View style={Styles.innerContainer}>
            <Image style={Styles.logo}
            source={require('../../assets/img/logo.png')}
          />
              <Text style={Styles.modalFontTitle}>Learn new vocabulary everyday!</Text>
              <Text style={Styles.modalFont}>The idea is simple, you learn five word per day. That's it. </Text>
              <Text style={Styles.modalFont}>Swipe left the one you don't want to save. Swipe right the one you want to save for later (ala Tinder).</Text>
              <Text style={Styles.modalFontCredit}>Designed and Developed by</Text>
              <Text style={Styles.link} onPress={() => Linking.openURL('https://twitter.com/cartur28/')}>Carlos Navarro</Text>
            </View>
            <View style={Styles.close}>
            <TouchableOpacity onPress={() => this.closeModal()}>
                <Image style={Styles.closeImg}
                  source={require('../../assets/img/close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
