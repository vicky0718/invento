import React, { useState } from 'react';
import {
   View, Text, TextInput, CheckBox, StyleSheet, Button, ScrollView
  } from 'react-native';

const AddCustomersScreen = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [isIndividual, setIsIndividual] = useState(false);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('');
  const [mobieNumber, setMobileNum] = useState('');
  const [phoneNumber, setPhoneNum] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingPincode, setBillingPincode] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');
  const [shippingPincode, setShippingPincode] = useState('');

  const handleSameAsBilling = () => {
    setShippingAddress(billingAddress);
    setShippingCity(billingCity);
    setShippingState(billingState);
    setShippingPincode(billingPincode);
  };

  return (
    <div style={styles.container}>
      <Text style={styles.heading}>Customer Details:</Text>
     
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
       <Text>Customer Type: </Text>
       <View style={{ width: 100}} />
       <CheckBox
         value={isBusiness}
         onValueChange={value => setIsBusiness(value)}
       />
       <Text>Business</Text>
       <View style={{ width: 100 }} />
       <CheckBox
         value={isIndividual}
         onValueChange={value => setIsIndividual(value)}
       />
       <Text>Individual</Text>
     </View>
     <View style={{ height: 25 }} />
     <TextInput
       style={styles.input}
       placeholder="Name" 
       value={name}
       onChangeText={setName}
       
     />
     <View style={{ height: 10 }} />
     {isBusiness && ( // Conditionally render the company name field
     <TextInput
       style={styles.input}
       placeholder="Company Name"
       value={companyName}
       onChangeText={setCompanyName}
     />)}
     <View style={{ height: 10 }} />
     <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
       keyboardType="email-address"
     />
     <View style={{ height: 10 }} />
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
       <TextInput
         style={styles.input}
         placeholder="Phone Number"
         value={phoneNumber}
         onChangeText={setPhoneNum}
         keyboardType="phone-pad"
       />
       <View style={{width:50}} />
       <TextInput
         style={styles.input}
         placeholder="Mobile Number"
         value={mobieNumber}
         onChangeText={setMobileNum}
         keyboardType="phone-pad"
       />
     </View>
     <Text style={styles.heading}>Address Details:</Text>
     <View style={{ width: 100}}/>
     
     
     <View style={styles.MainButton}>
       <Button title="Same as Billed" onPress={handleSameAsBilling}  />
     </View>


     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
       <TextInput
       multiline
         style={styles.AddressContainer}
         placeholder="Billing Address"
         value={billingAddress}
         onChangeText={text => setBillingAddress(text)}
       />
       <View style={{width:115}}/>
       <TextInput
       multiline
         style={styles.AddressContainer}
         placeholder="Shipping Address"
         value={shippingAddress}
         onChangeText={text => setShippingAddress(text)}
       />
     </View>
     <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop:15}}>
       <TextInput
         style={styles.input}
         placeholder="Billing City"
         value={billingCity}
         onChangeText={text => setBillingCity(text)}
       />
       <View style={{width:115}}/>
       <TextInput
         style={styles.input}
         placeholder="Shipping City"
         value={shippingCity}
         onChangeText={text => setShippingCity(text)}
       />
     </View>
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
       <TextInput
         style={styles.input}
         placeholder="Billing State"
         value={billingState}
         onChangeText={text => setBillingState(text)}
       />
       <View style={{width:115}}/>
       <TextInput
         style={styles.input}
         placeholder="Shipping State"
         value={shippingState}
         onChangeText={text => setShippingState(text)}
       />
     </View>
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
       <TextInput
         style={styles.input}
         placeholder="Billing Pincode"
         value={billingPincode}
         onChangeText={text => setBillingPincode(text)}
       />
       <View style={{width:115, marginBottom: "80px"}}/>
       <TextInput
         style={styles.input}
         placeholder="Shipping Pincode"
         value={shippingPincode}
         onChangeText={text => setShippingPincode(text)}
       />
     </View>
     
    </div>
    
  );
};

const styles = StyleSheet.create({
  
  container: {
    padding: "20px",
    height: "1000px",
    overflowY: "scroll"
  },

  heading:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    paddingTop: 20
  },
 
  input: {
    height: 40,
    width: "100%",
    borderColor: 'orange',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:24,
    padding: "20px" 
  },

  MainButton: {
    height: 40,
    width: 600,
    paddingLeft:400,
    paddingBottom:70
  },

  AddressContainer: {
    height:120,
    width: 300,
    borderRadius: 24,
    borderColor: 'orange',
    borderWidth: 1,
    padding: "20px"
  },

});
export default AddCustomersScreen;