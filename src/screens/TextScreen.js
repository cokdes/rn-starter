import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name,setName] = useState('')
    return (
        <View>
            <Text>Please input Password</Text>

            <TextInput
            type="password" 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />

            { name.length < 5 ? <Text>Password must be more than 5 character</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        padding:3,
        borderColor:"black",
        borderWidth:1
    }
});

export default TextScreen
