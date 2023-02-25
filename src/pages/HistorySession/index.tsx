import {View, Text, StyleSheet } from "react-native";

const HistorySession = () =>
    <View style={styles.container}>
        <Text>Page History</Text>
    </View>

export default HistorySession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});