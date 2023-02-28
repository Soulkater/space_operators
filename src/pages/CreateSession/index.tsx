import {View, Text, StyleSheet, ImageBackground } from "react-native";
import { CreateSessionButtonQuit, CreateSessionButtonStart, CreateSessionButtonWrapper, CreateSessionContent, CreateSessionPlayerName, CreateSessionPlayersTitle, CreateSessionPlayersTitleWrapper, CreateSessionPlayersWrapper, CreateSessionTitle, CreateSessionWrapper } from "./style";


const BACKGROUND_IMAGE = require('../../../assets/fond-ecran-creation-session.png');

const CreateSession = () =>
    <ImageBackground source={BACKGROUND_IMAGE}>
        <CreateSessionContent>

        <CreateSessionPlayersTitleWrapper>
            <CreateSessionTitle>ID PARTIE : 5426</CreateSessionTitle>
        </CreateSessionPlayersTitleWrapper>
            <CreateSessionWrapper>
                    
                <CreateSessionPlayersTitle>
                    JOUEURS CONNECTES
                </CreateSessionPlayersTitle>
                    
                <CreateSessionPlayersWrapper>
                        <CreateSessionPlayerName>JOUEUR 1</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 2</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 3</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 4</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 5</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 6</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 7</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 8</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 9</CreateSessionPlayerName>
                        <CreateSessionPlayerName>JOUEUR 10</CreateSessionPlayerName>
                </CreateSessionPlayersWrapper>
            </CreateSessionWrapper>

            <CreateSessionButtonWrapper>
                <CreateSessionButtonStart>Demarrer</CreateSessionButtonStart>
                <CreateSessionButtonQuit>Retour</CreateSessionButtonQuit>
            </CreateSessionButtonWrapper>
            
        </CreateSessionContent>
    </ImageBackground>


export default CreateSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});