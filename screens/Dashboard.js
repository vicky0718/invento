import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Products</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Users</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Reports</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Brands</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Categories</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Stores</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Attributes</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Orders</Text>
          <Text style={styles.defaultValue}>0</Text>
        </View>
        <View style={styles.componentBox}>
          <Text style={styles.componentText}>Companies</Text>
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
    backgroundColor: '#FFD580',
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
    marginTop: 50
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