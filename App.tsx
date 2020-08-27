import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from 'src/navigation/stack/MainStack';
import {navigationRef} from 'src/navigation/NavigationServices';
import {Provider} from 'react-redux';
import configureStore from 'src/store/Store';

const store = configureStore();

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
