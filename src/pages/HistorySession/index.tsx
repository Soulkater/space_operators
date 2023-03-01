import {Link} from "react-router-native";
import {View, Text, StyleSheet, ImageBackground, Image, ScrollView  } from "react-native";
import { HistorySessionButtonQuit, HistorySessionButtonWrapper, HistorySessionContent, History, HistorySessionPlayersTitleWrapper, HistorySessionPlayersContainer, HistorySessionTitle, HistorySessionWrapper, NavigationButtons } from "./style";



// fonts
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

// Les images utilisées dans la page
const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-historique.png');
const START_SESSION_BUTTON = require('../../../assets/bouton-demarrer.png');
const QUIT_SESSION_BUTTON = require('../../../assets/bouton-retour.png');

const HistorySession = () => {
    // Pour gérer le chargement de la Google Font 'Russo One'
    // let [fontLoaded] = useFonts({
    //     "Russo-One": require("../../../assets/fonts/RussoOne-Regular.ttf")
    // });

    return (
    <ImageBackground source={BACKGROUND_IMAGE} >
        <HistorySessionContent>

            <HistorySessionPlayersTitleWrapper>
                <HistorySessionTitle>HISTORIQUE DES PARTIES</HistorySessionTitle>
            </HistorySessionPlayersTitleWrapper>
            
            <HistorySessionWrapper>
                    
                <HistorySessionPlayersContainer>
                    <ScrollView>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                        <History>PARTIE 256 - 10 JOUEURS - 8 TOURS</History>
                    </ScrollView>
                </HistorySessionPlayersContainer>
            </HistorySessionWrapper>

            <HistorySessionButtonWrapper>
                <Link to="/">
                    <NavigationButtons>
                        <HistorySessionButtonQuit><Image source={QUIT_SESSION_BUTTON}></Image> Retour</HistorySessionButtonQuit>
                    </NavigationButtons>
                </Link>
            </HistorySessionButtonWrapper>
            
        </HistorySessionContent>
    </ImageBackground>
    );
}
export default HistorySession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});