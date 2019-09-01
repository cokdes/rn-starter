import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ComponentsScreen = () => {
    const friends=[
        {name:"Friends#1"},
        {name:"Friends#2"},
        {name:"Friends#3"},
    ]
    return (
        <View>
            <Text style={styles.textStyle}>Testing Text component screen</Text>
            <Text>Hi There!</Text>
            <FlatList 
                keyExtractor={friend=>friend.name}
                data={friends} 
                renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;