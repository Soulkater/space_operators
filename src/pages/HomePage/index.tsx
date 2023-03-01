import React from 'react';
import {Link} from "react-router-native";
import {ImageBackground } from "react-native";
import {HomeButtons, HomeContent, HomeTitle, TextButtons} from "./style";

// fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";

// l'image de fond
const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-menu.png');

const Home = () => {
    // Pour gérer le chargement de la Google Font 'Russo One'
    let [fontLoaded] = useFonts({
        "Russo-One": require("../../../assets/fonts/RussoOne-Regular.ttf")
    });

    if (!fontLoaded) {
        return <AppLoading/>;
    }

    return (
        <ImageBackground source={BACKGROUND_IMAGE} resizeMode={"cover"}>

            <HomeContent>

                <HomeTitle style={[{fontFamily: "Russo-One"}]}>Space {'\n'} Operators</HomeTitle>

                <Link to="/CreateSession">
                    <HomeButtons>
                        <TextButtons style={[{fontFamily: "Russo-One"}]}>Créer une partie</TextButtons>
                    </HomeButtons>
                </Link>

                <Link to="/JoinSession">
                    <HomeButtons>
                        <TextButtons style={[{fontFamily: "Russo-One"}]}>Rejoindre une partie</TextButtons>
                    </HomeButtons>
                </Link>

                <Link to="/HistorySession">
                    <HomeButtons>
                        <TextButtons style={[{fontFamily: "Russo-One"}]}>Historique</TextButtons>
                    </HomeButtons>
                </Link>

                <Link to="/CloseApp">
                    <HomeButtons>
                        <TextButtons style={[{fontFamily: "Russo-One"}]}>Quitter</TextButtons>
                    </HomeButtons>
                </Link>

            </HomeContent>

        </ImageBackground>
    )
}

export default Home;