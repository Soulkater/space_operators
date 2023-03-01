import {Link} from "react-router-native";
import {StyleSheet, ImageBackground, Image } from "react-native";
import { JoinSessionButtonQuit, JoinSessionButtonStart, JoinSessionButtonWrapper, JoinSessionContent, JoinSessionPlayerName, JoinSessionPlayerNamePret, JoinSessionPlayersTitleContainer, JoinSessionPlayersTitle, JoinSessionPlayersContainer, JoinSessionWrapper, NavigationButtons } from "./style";


// fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Les images utilisées dans la page
const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-creation-session.png');
const START_SESSION_BUTTON = require('../../../assets/bouton-demarrer.png');
const QUIT_SESSION_BUTTON = require('../../../assets/bouton-retour.png');

const JoinSession = () => {
    // Pour gérer le chargement de la Google Font 'Russo One'
    let [fontLoaded] = useFonts({
        "Russo-One": require("../../../assets/fonts/RussoOne-Regular.ttf")
    });

    if (!fontLoaded) {
        return <AppLoading/>;
    }

    return (
    <ImageBackground source={BACKGROUND_IMAGE} >
        <JoinSessionContent>
            
            <JoinSessionWrapper>
                    
                <JoinSessionPlayersTitleContainer>
                    <JoinSessionPlayersTitle style={[{fontFamily: "Russo-One"}]}>
                        JOUEURS CONNECTES
                    </JoinSessionPlayersTitle>
                </JoinSessionPlayersTitleContainer>
                    
                <JoinSessionPlayersContainer>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 1 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 2 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 3 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 4 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 5 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 6 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 7 : Pret</JoinSessionPlayerNamePret>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 8 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 9 : Attente</JoinSessionPlayerName>
                    <JoinSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 10 : Pret</JoinSessionPlayerNamePret>
                </JoinSessionPlayersContainer>
            </JoinSessionWrapper>

            <JoinSessionButtonWrapper>
                <NavigationButtons>
                    <JoinSessionButtonStart style={[{fontFamily: "Russo-One"}]}>Pret <Image source={START_SESSION_BUTTON}></Image></JoinSessionButtonStart>
                </NavigationButtons>

                <Link to="/">
                    <NavigationButtons>
                        <JoinSessionButtonQuit style={[{fontFamily: "Russo-One"}]}><Image source={QUIT_SESSION_BUTTON}></Image> Retour</JoinSessionButtonQuit>
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