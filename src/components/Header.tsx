import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../assets/images/logo/logo.png';

interface HeaderProps {
    tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
    const tasksCounterText = tasksCounter == 1 ? 'tarefa' : 'tarefas';

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Miner💎Tasks</Text>

            <View style={styles.tasks}>
                <Text style={styles.tasksCounter}>Você tem </Text>
                <Text style={styles.tasksCounterBold}>
                    {tasksCounter} {tasksCounterText}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(true) + 16,
        paddingHorizontal: 24,
        paddingBottom: 60,
        backgroundColor: '#444',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tasks: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    tasksCounter: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Inter-Regular',
    },
    tasksCounterBold: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Inter-Bold',
    },
    logo: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Inter-Bold',
    },
});
