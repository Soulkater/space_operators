import {View, Text, StyleSheet } from "react-native";

const CloseApp = () =>
    <View style={styles.container}>
        <Text>Page Close App</Text>
    </View>

export default CloseApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});