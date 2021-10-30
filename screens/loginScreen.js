import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const loginScreen = () => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        // behavior="padding"
        >
            <View style={styles.inputcontainer}>
                <TextInput placeholder="Email" style={styles.input} />
            </View>

            <View style={styles.inputcontainer} >
            <TextInput placeholder="Password" style={styles.input}  secureTextEntry/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                // onPress={ ()=>{}} 
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
    backgroundColor: "#b7e4c7",
},
inputcontainer: {
    width: '80%',
},
input: {
    backgroundColor: "#d8f3dc",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
},
buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
},
button: {
    backgroundColor: '#52b788',
    width: '90%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
},
buttonText: {
    color: "#fff"
},
buttonOutline: {
    backgroundColor: '#d8f3dc',
    borderColor: "#52b788",
    borderWidth: 2,
},
buttonOutlineText: {
    color: '#52b788',
    fontWeight: "bold"
},
})
