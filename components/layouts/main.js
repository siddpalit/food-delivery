import Head from 'next/head';
//import NavBar from '../navbar';
import {Box, Container} from '@chakra-ui/react';
//import Footer from '../footer';
const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Homepage of the Food Delivery App" />
                <meta name="author" content="Jake Sumner" />
                <meta name="author" content="Sidd Palit" />
                <meta name="author" content="Buket Karadeniz" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="FDA's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Food Delivery Application</title>
            </Head>
            {/*<SideBar path={router.asPath} />*/}
            <Container maxW="container.xl" pt={10}>
                {/*<NavBar path={router.asPath} />*/}
                {children}
                {/*<Footer/>*/}
            </Container>


        </Box>

    )
}

export default Main