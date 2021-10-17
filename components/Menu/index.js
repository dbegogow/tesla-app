import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faKey, faWrench, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
    return (
        <View style={styles.menuItems}>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Media</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faClock} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Software Updates</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faThermometerHalf} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Climate</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faCar} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Controls</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faBolt} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Charging</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Location</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faShoppingBag} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Upgrades</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Phone Key</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faWrench} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Services</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={faExclamationTriangle} size={24} />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>Roadside assistance</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Menu;