import React, { useReducer } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

const reducer = (state,action) => {
    switch (action.type){
        case 'increase':
            return {...state, counter : state.counter+action.payload};
        case 'decrease':
            return {...state, counter : state.counter+action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter : 0});

    return (
        <View>
            <Text style={styles.textStyle}>Counter</Text>
            <Button title="Increase" onPress={() =>{
                dispatch({
                    type:"increase", payload:1
                })
            }}/>
            <Button title="Decrease" onPress={() =>{
                dispatch({
                    type:"decrease", payload:-1
                })
            }}/>
            <Text> Current count = {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});


export default CounterScreen;
