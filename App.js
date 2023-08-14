import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from './components/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;