import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image,  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const cart = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="chevron-back-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("Home")}} />
                <Ionicons name="menu-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("")}}/>
            </View>

            <View style={styles.cartHeader}>
                <Text style={styles.cartText}>Shopping Cart</Text>
            </View>


            <ScrollView style={styles.itemsCOntainer} >
                <View style={styles.cartItemsContainer}>
                    <View style={styles.cartItemImg}>
                        <Image source={require('../img/b2.jpg')}  style={styles.cimg}/>
                    </View>
                    <View style={styles.cartItemInfo}>
                        <Text style={styles.productName}>Mango Momma</Text>
                        <View style={styles.rating}>
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                        </View>
                        <Text style={styles.priceText}>Ghc 299.99</Text>
                    </View>
                    <View style={styles.cartItemBtn}>
                        <View style={styles.trash}>
                            <Ionicons name="close-outline" size={25} color="#ffe566" style={styles.close}/>
                        </View>

                        <View  style={styles.add}>
                            <Ionicons name="remove-circle-outline" size={20} color="#ffe566"/>
                                <Text> 01 </Text>
                            <Ionicons name="add-circle-outline" size={20} color="#ffe566"/>
                        </View>
                        
                    </View>
                </View>                                 
                <View style={styles.cartItemsContainer}>
                    <View style={styles.cartItemImg}>
                    <Image source={require('../img/b3.jpg')}  style={styles.cimg}/>
                    </View>
                    <View style={styles.cartItemInfo}>
                        <Text style={styles.productName}>Mushroom Burgers</Text>
                        <View style={styles.rating}>
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                        </View>
                        <Text style={styles.priceText}>Ghc 600.00</Text>
                    </View>
                    <View style={styles.cartItemBtn}>
                        <View style={styles.trash}>
                            <Ionicons name="close-outline" size={25} color="#ffe566" style={styles.close}/>
                        </View>

                        <View  style={styles.add}>
                            <Ionicons name="remove-circle-outline" size={20} color="#ffe566"/>
                                <Text> 02 </Text>
                            <Ionicons name="add-circle-outline" size={20} color="#ffe566"/>
                        </View>
                        
                    </View>
                </View>                                 
                <View style={styles.cartItemsContainer}>
                    <View style={styles.cartItemImg}>
                    <Image source={require('../img/pexels-daria-shevtsova-1260968.jpg')}  style={styles.cimg}/>
                    </View>
                    <View style={styles.cartItemInfo}>
                        <Text style={styles.productName}>Hawaiian Pizza</Text>
                        <View style={styles.rating}>
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                            <Ionicons name="star" size={16} color="#ffe566" />
                        </View>
                        <Text style={styles.priceText}>Ghc 599.99</Text>
                    </View>
                    <View style={styles.cartItemBtn}>
                        <View style={styles.trash}>
                            <Ionicons name="close-outline" size={25} color="#ffe566" style={styles.close}/>
                        </View>

                        <View  style={styles.add}>
                            <Ionicons name="remove-circle-outline" size={20} color="#ffe566"/>
                                <Text> 02 </Text>
                            <Ionicons name="add-circle-outline" size={20} color="#ffe566"/>
                        </View>
                        
                    </View>
                </View>      

                <View style={styles.codeContainer}>
                    <TextInput style={styles.code} placeholder='Enter promo code'  keyboardType= "numeric"/>
                    <View style={styles.apply}>
                        <Text style={styles.applyTxt}>Apply</Text>
                    </View>
                </View>     

                <View style={styles.detailsContainer}>
                    <View  style={styles.details}>
                        <Text style={styles.detailsLeft}>Subtotal</Text>
                        <Text style={styles.detailsRight}>Ghc 1499.98</Text>
                    </View>
                    <View  style={styles.details}>
                        <Text style={styles.detailsLeft}>Tax</Text>
                        <Text style={styles.detailsRight}>Ghc 30.50</Text>
                    </View>
                    <View  style={styles.details}>
                        <Text style={styles.detailsLeft}>Shipping</Text>
                        <Text style={styles.detailsRight}>Ghc 250.00</Text>
                    </View>
                    <View  style={styles.details}>
                        <Text style={styles.detailsLeft}>Cart Total</Text>
                        <Text style={styles.detailsRight}>Ghc 1780.48</Text>
                    </View>
                </View>       

                <View style={styles.checkOutContainer}>
                    <TouchableOpacity  style={styles.checkOutBtn}>
                        <Text style={styles.checkOut}>Check Out</Text>
                    </TouchableOpacity>
                </View>               
            </ScrollView>

        </View>
    )
}

export default cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F4F8FE",
        justifyContent: "center",
        alignItems: 'center',
    },
    cimg:{
        width: 110,
        height: 120,
        borderRadius: 20,
        marginRight: 20,
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    cartHeader:{},
    cartText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#588b8b',
    },

    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 10,
        
    },

    cartItemsContainer:{
        width: "90%",
        flexDirection: 'row',
        paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 20,
        backgroundColor: "#fff"
    },
    cartItemImg:{
        width: "25%",
        height: 120,
        borderRadius: 20,
        marginRight: 20,
        backgroundColor: '#E3E9F3',
    },
    cartItemInfo:{
        width: "33%",
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    cartItemBtn:{
        marginLeft: 40,
        justifyContent: "space-between",
        alignItems: 'center',
    },

    add:{
        flexDirection: "row",
    },

    priceText:{
        color: "#588b8b",
        fontWeight: "bold",
    },
    productName:{
        fontSize: 15,
        fontWeight: 'bold',
        color: "#588b8b",
    },
    close:{
        marginLeft: 40,
    },

    rating: {
        flexDirection: 'row',
    },
    codeContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    code:{
        padding: 10,
        backgroundColor: '#fff'
    },
    applyTxt:{
        padding: 11,
        backgroundColor: '#ffe566',
        color: '#fff',
    },
    detailsContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: "row",
        marginTop: 10,
    },
    details:{
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomColor: "#ffe566",
        borderBottomWidth: 2,
        marginTop: 10,
    },
    detailsLeft:{},
    detailsRight:{},

    checkOutContainer:{
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    checkOutBtn:{
        width:'90%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe566',
        borderRadius: 30,
    },
    checkOut:{
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',

    },
})
