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
      <Button 
        onPress={() => props.navigation.navigate('Colors')} 
        title="Go To Color Screen"
      />
      <Button 
        onPress={() => props.navigation.navigate('Square')} 
        title="Go To Square Screen"
      />
      <Button 
        onPress={() => props.navigation.navigate('Text')} 
        title="Go To Text Screen"
      />
      <Button 
        onPress={() => props.navigation.navigate('Box')} 
        title="Go To Box Screen"
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
