import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

function index(): React.JSX.Element {
    return (
        <View>
            <Text>This is the about screen</Text>
            <Link href={"/about"}>About </Link>
        </View>
    )
}

export default index