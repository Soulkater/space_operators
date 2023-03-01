import {Link} from "react-router-native";
import {View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { JoinSessionButtonQuit, JoinSessionButtonStart, JoinSessionButtonWrapper, JoinSessionContent, JoinSessionPlayerName, JoinSessionPlayerNamePret, JoinSessionPlayersTitleContainer, JoinSessionPlayersTitle, JoinSessionPlayersContainer, JoinSessionWrapper, NavigationButtons } from "./style";


// fonts
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

// Les images utilisées dans la page
const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-creation-session.png');
const START_SESSION_BUTTON = require('../../../assets/bouton-demarrer.png');
const QUIT_SESSION_BUTTON = require('../../../assets/bouton-retour.png');

const JoinSession = () => {
    // Pour gérer le chargement de la Google Font 'Russo One'
    // let [fontLoaded] = useFonts({
    //     "Russo-One": require("../../../assets/fonts/RussoOne-Regular.ttf")
    // });

    return (
    <ImageBackground source={BACKGROUND_IMAGE} >
        <JoinSessionContent>
            
            <JoinSessionWrapper>
                    
                <JoinSessionPlayersTitleContainer>
                    <JoinSessionPlayersTitle>
                        JOUEURS CONNECTES
                    </JoinSessionPlayersTitle>
                </JoinSessionPlayersTitleContainer>
                    
                <JoinSessionPlayersContainer>
                    <JoinSessionPlayerName>JOUEUR 1 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret>JOUEUR 2 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerName>JOUEUR 3 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName>JOUEUR 4 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName>JOUEUR 5 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret>JOUEUR 6 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerNamePret>JOUEUR 7 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerName>JOUEUR 8 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName>JOUEUR 9 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret>JOUEUR 10 : Pret</JoinSessionPlayerNamePret>
                </JoinSessionPlayersContainer>
            </JoinSessionWrapper>

            <JoinSessionButtonWrapper>
                <NavigationButtons>
                    <JoinSessionButtonStart>Pret <Image source={START_SESSION_BUTTON}></Image></JoinSessionButtonStart>
                </NavigationButtons>

                <Link to="/">
                    <NavigationButtons>
                        <JoinSessionButtonQuit><Image source={QUIT_SESSION_BUTTON}></Image> Retour</JoinSessionButtonQuit>
                    </NavigationButtons>
                </Link>
            </JoinSessionButtonWrapper>
            
        </JoinSessionContent>
    </ImageBackground>
    );
}
export default JoinSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});