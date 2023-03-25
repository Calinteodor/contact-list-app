/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ContactCardList from './src/components/contact-card/ContactCardList';
import RandomScrollButton from "./src/components/random-scroll-button/RandomScrollButton";


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const ref = useRef(null);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    const handlePress = () => {
        ref.current?.scrollTo({ behaviour: 'smooth'})
    };

    return (
          <SafeAreaView style={backgroundStyle}>
              <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={backgroundStyle.backgroundColor}
              />
              <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  ref = { ref }
                  style={backgroundStyle}>
                  <View
                      style={{
                          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
                  }}>
                      <ContactCardList />
                  </View>
              </ScrollView>
              <RandomScrollButton onPress = { handlePress } />
          </SafeAreaView>
    );
}

export default App;
