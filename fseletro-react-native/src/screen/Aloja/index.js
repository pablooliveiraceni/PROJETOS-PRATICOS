import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';


import IO from 'react-native-vector-icons/Ionicons';

const menu = <IO name="menu" size={30} color="#000" />;




// CSS
import styles from '../style.js';

const Aloja = ({navigation}) => {

    return (
        <View style={styles.container} >

           <View style={styles.block1}>
                <View style={styles.menu}><TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity></View>
            </View>
            

            <View style={styles.main}>
                
                <View style={styles.box1}>
                    <Text style={styles.texto}>
                       Projeto pratico versão mobile fseletro.
                    </Text>
                </View>
            </View>

            
            
        </View>
    );
}

export default Aloja;


