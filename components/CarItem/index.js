import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <View style={styles.header}>
                <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
                <Text style={styles.headerTitle}>Tesla Model S</Text>
                <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
            </View>
        </View>
    );
};

export default CarItem;