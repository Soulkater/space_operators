import {View, Text, StyleSheet } from "react-native";
import {Link} from "react-router-native";
import { HomeContent, HomeTitle } from "./style";


const Home = () =>
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

        <Link to="/CloseApp">
            <Text>Quitter</Text>
        </Link>
    </HomeContent>

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});