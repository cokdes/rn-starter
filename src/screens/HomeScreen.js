import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen aloha</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')} 
        title="Go To Components"
      />
      <Button 
        onPress={() => props.navigation.navigate('Counter')} 
        title="Go To Counter Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
