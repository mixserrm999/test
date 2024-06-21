import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabBar = () => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Home Button Pressed')}
      >
        <Icon name="home" size={24} color="#fff" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Shop Button Pressed')}
      >
        <Icon name="cart" size={24} color="#fff" />
        <Text style={styles.buttonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Inventory Button Pressed')}
      >
        <Icon name="archive" size={24} color="#fff" />
        <Text style={styles.buttonText}>Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Setting Button Pressed')}
      >
        <Icon name="cog" size={24} color="#fff" />
        <Text style={styles.buttonText}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default BottomTabBar;
