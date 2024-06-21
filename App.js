import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomTabBar from './src/BottomTabBar';

export default function App() {
  // สร้าง state สำหรับเก็บเวลาปัจจุบัน
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect สำหรับอัปเดตเวลาแบบเรียลไทม์ทุกวินาที
  useEffect(() => {
    // อัปเดตเวลาใน state ทุก ๆ วินาที
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // ล้าง interval เมื่อ component ถูก unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.largeText}>Open up App.js to start working on your app!</Text>
        <Text style={styles.Text}>Current Time: {currentTime.toLocaleTimeString()}</Text>
      </View>
      <BottomTabBar />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121211',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  largeText: {
    fontSize: 20,
    marginBottom: 20, // ตั้งระยะห่างด้านล่างตามต้องการ
    color: '#ffffff',
  },
  Text: {
    fontSize: 15,
    marginBottom: 20, // ตั้งระยะห่างด้านล่างตามต้องการ
    color: '#ffffff',
  },
});