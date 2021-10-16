import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <View style={styles.header}>
                <FontAwesomeIcon icon={faCog} />
                <Text>Tesla Model S</Text>
                <FontAwesomeIcon icon={faToolbox} />
            </View>
        </View>
    );
};

export default CarItem;