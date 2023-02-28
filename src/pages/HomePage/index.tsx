import {View, Text, StyleSheet, Button, BackHandler } from "react-native";
import {Link} from "react-router-native";
import { HomeContent, HomeTitle } from "./style";


const Home = () => {

    // fonction qui ferme l'application
    const handlePress = () => {
        BackHandler.exitApp();
    };

    return (
        <HomeContent>
            <HomeTitle>Space Operators</HomeTitle>

            <Link to="/CreateSession">
                <Text>Créer une partie</Text>
            </Link>

            <Link to="/JoinSession">
                <Text>Rejoindre une partie</Text>
            </Link>

            <Link to="/HistorySession">
                <Text>Historique</Text>
            </Link>

            {/* // Bouton qui ferme l'application */}
            <View>
                <Button title="Fermer l'application" onPress={handlePress} />
                <Text>Quitter</Text>
            </View>
            
        </HomeContent>
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});