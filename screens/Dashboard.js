import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardHeaderText}>Dashboard</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>User Management</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Brand</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Category</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Attribute</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Products</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Orders</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Report</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Company Settings</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Menu</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  dashboardHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dashboardHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  componentBox: {
    width: '30%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  componentText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  defaultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Dashboard;