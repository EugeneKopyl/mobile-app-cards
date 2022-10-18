import {Image, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function Nav() {
    return (
        <View style={styles.mainNav}>
            <Image
                source={require('../../assets/icons/settings.svg')}
                style={{ width: 32, height: 32 }}
            />
            <Image
                source={require('../../assets/icons/Home-icon.svg')}
                style={{ width: 32, height: 32 }}
            />
            <Image
                source={require('../../assets/icons/menu.svg')}
                style={{ width: 32, height: 32 }}
            />
            <StatusBar></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    mainNav: {
        width: '100%',
        padding: '10px',
        flexDirection: 'row',
        position: 'absolute',
        bottom: '0px',
        height: '7%',
        borderStyle: 'dashed',
        borderTopWidth: '2px',
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuItem: {
        padding: '5px',
        color: '#ccc'
    }
});
