import { Router, Scene, Stack } from 'react-native-router-flux';
import React from 'react';
import { AsyncStorage } from 'react-native';
import Onboarding from './Onboarding';
import App from './Components/Home/App';
import Launcher from './Components/Launcher/Launcher';

const Rutas = () => (
  <Router>
    <Stack key="root">
      <Scene key="launcher" component={Launcher} hideNavBar initial/>
      <Scene key="onboarding" component={Onboarding} hideNavBar reset/>
      <Scene key="home" component={App} type='reset' hideNavBar />
    </Stack>
  </Router>
);

export default Rutas;