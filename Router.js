import { Router, Scene, Stack } from 'react-native-router-flux';
import React from 'react';
import Onboarding from './Onboarding';
import App from './Components/Home/App';

const Rutas = () => (
  <Router>
    <Stack key="root">
      <Scene key="onboarding" component={Onboarding} hideNavBar />
      <Scene key="home" component={App} type='reset' hideNavBar initial />
    </Stack>
  </Router>
);

export default Rutas;