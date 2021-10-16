import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },
    header: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    headerTitle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'white'
    },
    backgroundImage: {
        width: '100%',
        height: '105%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    batterySection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12
    },
    batteryText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    status: {
        alignItems: 'center'
    },
    statusText: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 3
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 175
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        padding: 18,
        marginLeft: 13,
        marginRight: 13
    }
});

export default styles;