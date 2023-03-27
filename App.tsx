import React, { useRef } from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ContactCardList from './src/components/contact-card/ContactCardList';
import RandomScrollButton from './src/components/random-scroll-button/RandomScrollButton';


const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const ref = useRef(null);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    const onPress = () => {
        const randomIndex = Math.random() * 10

        // @ts-ignore
        ref.current?.scrollToIndex({
            index: randomIndex,
            animated: true
        })
    };

    return (
        <>
            <SafeAreaView>
                <StatusBar
                    barStyle = { isDarkMode ? 'light-content' : 'dark-content' }
                    backgroundColor = { backgroundStyle.backgroundColor }
                />
                <ContactCardList ref = { ref } />
            </SafeAreaView>
            <RandomScrollButton onPress = { onPress } />
        </>
    );
};

export default App;
