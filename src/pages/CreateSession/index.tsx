import {View, Text, StyleSheet } from "react-native";

const CreateSession = () =>
    <View style={styles.container}>
        <Text>Page Create Session</Text>
    </View>

export default CreateSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});