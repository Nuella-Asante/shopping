import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const loginScreen = () => {

    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
        style={styles.container}
        // behavior="padding"
        >

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ella's Fast Food</Text>
            </View>

            <View style={styles.inputcontainer}>
                <TextInput placeholder="Email" style={styles.input} />
            </View>

            <View style={styles.inputcontainer} >
            <TextInput placeholder="Password" style={styles.input}  secureTextEntry/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={()=> {navigation.navigate("Home")}} 
                style={styles.button} >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                // onPress={() => {}}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
        
    )
}

export default loginScreen

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff6cc",
},
inputcontainer: {
    width: '80%',
},
input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 10,
},
buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
},
button: {
    backgroundColor: '#ffe566',
    width: '90%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
},
buttonText: {
    color: "#fff",
    fontWeight: 'bold',
},
buttonOutline: {
    backgroundColor: '#fff',
    borderColor: "#ffe566",
    borderWidth: 2,
},
buttonOutlineText: {
    color: '#4d6a6d',
    fontWeight: "bold"
},

titleContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
},
title:{
    fontSize: 26,
    fontWeight: 'bold',
    padding: 5,
    color: '#4d6a6d',
},
})
