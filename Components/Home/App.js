import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, StatusBar, Text, View, Dimensions, Image, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import Styles from './styles';

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
      cardIndex: 0
    }
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
  return (
    <View style={Styles.container}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <View style={Styles.about}>
        <TouchableWithoutFeedback onPress={() => ToastAndroid.show('A pikachu appeared nearby!', ToastAndroid.SHORT)}>
          <Image style={Styles.aboutImg}
            source={require('../../assets/img/about.png')}
          />
        </TouchableWithoutFeedback>
      </View>
      <Swiper
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={this.onSwiped}
        backgroundColor='#6EBECD'
        disableTopSwipe={true}
        disableBottomSwipe={true}
        onTapCard={console.log('Tap')}
        titles={this.state.titles}
        cards={this.state.cards}
        cardIndex={this.state.cardIndex}
        cardHorizontalMargin={0}
        cardVerticalMargin={80}
        renderCard={this.renderCard}
        onSwipedAll={this.onSwipedAllCards}
        overlayLabels={{
          left: {
            element:
              <Image style={{ width: '25%', height: '20%' }}
                source={require('../../assets/img/discard.png')}
              />,
            style: {
              label: {
                textAlign: 'center',
                backgroundColor: '#DB6666',
                color: 'white',
                borderColor: '#DB6666',
                borderRadius: 40,
                width: 40,
                height: 40,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
              }
            }
          },
          right: {
            element: <Image style={{ width: '25%', height: '20%' }}
              source={require('../../assets/img/save.png')}
            />,
            style: {
              label: {
                textAlign: 'center',
                backgroundColor: '#93D07C',
                color: 'white',
                borderColor: '#93D07C',
                borderRadius: 40,
                width: 80,
                height: 80
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginLeft: -2,
                marginTop: -2,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
              }
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      >
      </Swiper>
      {this.renderEmptyState()}
      <View style={Styles.saved}>
        <TouchableWithoutFeedback onPress={() => ToastAndroid.show('A pikachu appeared nearby!', ToastAndroid.SHORT)}>
          <Image style={Styles.savedImg}
            source={require('../../assets/img/savedCards.png')}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
}
