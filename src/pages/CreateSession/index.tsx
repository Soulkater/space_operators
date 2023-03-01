import {Link} from "react-router-native";
import {StyleSheet, ImageBackground, Image } from "react-native";
import { CreateSessionButtonQuit, CreateSessionButtonStart, CreateSessionButtonWrapper, CreateSessionContent, CreateSessionPlayerName, CreateSessionPlayerNamePret, CreateSessionPlayersTitleContainer, CreateSessionPlayersTitle, CreateSessionPlayersTitleWrapper, CreateSessionPlayersContainer, CreateSessionTitle, CreateSessionWrapper, NavigationButtons } from "./style";


// fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Les images utilisées dans la page
const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-creation-session.png');
const START_SESSION_BUTTON = require('../../../assets/bouton-demarrer.png');
const QUIT_SESSION_BUTTON = require('../../../assets/bouton-retour.png');

const CreateSession = () => {
    // Pour gérer le chargement de la Google Font 'Russo One'
    let [fontLoaded] = useFonts({
        "Russo-One": require("../../../assets/fonts/RussoOne-Regular.ttf")
    });

    if (!fontLoaded) {
        return <AppLoading/>;
    }

    return (
    <ImageBackground source={BACKGROUND_IMAGE} >
        <CreateSessionContent>

            <CreateSessionPlayersTitleWrapper>
                <CreateSessionTitle style={[{fontFamily: "Russo-One"}]}>ID PARTIE : 5426</CreateSessionTitle>
            </CreateSessionPlayersTitleWrapper>
            
            <CreateSessionWrapper>
                    
                <CreateSessionPlayersTitleContainer>
                    <CreateSessionPlayersTitle style={[{fontFamily: "Russo-One"}]}>
                        JOUEURS CONNECTES
                    </CreateSessionPlayersTitle>
                </CreateSessionPlayersTitleContainer>
                    
                <CreateSessionPlayersContainer>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 1 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 2 : Pret</CreateSessionPlayerNamePret>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 3 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 4 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 5 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 6 : Pret</CreateSessionPlayerNamePret>
                    <CreateSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 7 : Pret</CreateSessionPlayerNamePret>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 8 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerName style={[{fontFamily: "Russo-One"}]}>JOUEUR 9 : Attente</CreateSessionPlayerName>
                    <CreateSessionPlayerNamePret style={[{fontFamily: "Russo-One"}]}>JOUEUR 10 : Pret</CreateSessionPlayerNamePret>
                </CreateSessionPlayersContainer>
            </CreateSessionWrapper>

            <CreateSessionButtonWrapper>
                <NavigationButtons>
                    <CreateSessionButtonStart style={[{fontFamily: "Russo-One"}]}>Demarrer <Image source={START_SESSION_BUTTON}></Image></CreateSessionButtonStart>
                </NavigationButtons>

                <Link to="/">
                    <NavigationButtons>
                        <CreateSessionButtonQuit style={[{fontFamily: "Russo-One"}]}><Image source={QUIT_SESSION_BUTTON}></Image> Retour</CreateSessionButtonQuit>
                    </NavigationButtons>
                </Link>
            </CreateSessionButtonWrapper>
            
        </CreateSessionContent>
    </ImageBackground>
    );
}
export default CreateSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});