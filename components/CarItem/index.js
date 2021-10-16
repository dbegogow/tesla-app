import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <View style={styles.header}>
                <FontAwesomeIcon icon={faCog} />
                <Text>Settings</Text>
                <Text>Tesla Model S</Text>
                <Text>Surprise</Text>
            </View>
        </View>
    );
};

export default CarItem;