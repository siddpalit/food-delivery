//TODO: update to better colour, stolen from my own nextjs project
//    possible nord colour scheme, ide style https://www.nordtheme.com/

import {extendTheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#fdf9f3', '#e5e9f0')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('#FF6188','#78DCE8' ), //TODO: FIX
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#A9DC76', '#FC9867')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    grassTeal: '#FFD866',
    monoPink: '#FF6188',
    monoOrange: '#FC9867',
    monoYellow: '#FFD866',
    monoGreen: '#A9DC76',
    monoBlue: '#78DCE8',
    monoPurple: '#AB9DF2'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme
