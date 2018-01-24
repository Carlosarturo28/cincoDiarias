import { Router, Scene, Stack } from 'react-native-router-flux';
import React from 'react';
import { AsyncStorage } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Onboarding from './Onboarding';
import App from './Components/Home/App';
import Launcher from './Components/Launcher/Launcher';
import SavedCard from './Components/SavedCard/SavedCard';
import Styles from './styles';

const Rutas = () => (
  <Router>
    <Stack key="root" transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}>
      <Scene key="launcher" component={Launcher} hideNavBar initial/>
      <Scene key="onboarding" component={Onboarding} hideNavBar reset/>
      <Scene key="home" component={App} type='reset' hideNavBar />
      <Scene key="saved" component={SavedCard} title='Saved Cards' navBarButtonColor='white' navigationBarStyle={Styles.navBar}/>
    </Stack>
  </Router>
);

export default Rutas;