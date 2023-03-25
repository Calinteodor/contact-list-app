/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ContactCardList from './src/components/contact-card/ContactCardList';
import RandomScrollButton from './src/components/random-scroll-button/RandomScrollButton';
import { useFetch } from './src/helpers/useFetch';

const size = 30
const url = `https://random-data-api.com/api/v2/users?size=${size}&is_xml=true`;


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const { data, loading } = useFetch(url)

    const ref = useRef(null);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    const onPress = () => {
        const randomIndex = Math.random() * size

        // @ts-ignore
        ref.current?.scrollToIndex({
            index: randomIndex,
            animated:true
        })
    };

    return (
        <>
            <SafeAreaView>
                <StatusBar
                    barStyle = { isDarkMode ? 'light-content' : 'dark-content' }
                    backgroundColor = { backgroundStyle.backgroundColor }
                />
                <ContactCardList
                    data = { data }
                    key = { data }
                    loading = { loading }
                    ref = { ref } />
            </SafeAreaView>
            <RandomScrollButton onPress = { onPress } />
        </>
    );
}

export default App;
