import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const homeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container1}>

            <View style={styles.iconContainer}>
                <Ionicons name="person-circle-outline" size={32} color="#4d6a6d" onPress={()=> {navigation.navigate("Log in")}} />
                <Ionicons name="cart-outline" size={32} color="#4d6a6d" onPress={()=> {navigation.navigate("")}}/>
            </View>


            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ella's Fast Food</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput style={styles.searchText} placeholder='search'></TextInput>
                <Ionicons name="search-circle-outline" size={32} color="#4d6a6d"/>
            </View>


            <View style={styles.itemsCategories}>
                <View style={[styles.cat, styles.active]}><Text style={styles.catText}>Burger</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Pizza</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Sandwich</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Drinks</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Fruits</Text></View>
            </View>

           

        <ScrollView style={styles.itemsCOntainer} >
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                            
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Beef Burgers</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Pepperoni Pizza</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Margherita Pizza</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Elk Burgers</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Turkey Burgers</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>BBQ Chicken Pizza.</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Veggie Burger</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Bison Burgers</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Wild Salmon Burger</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Doner kebab</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Docksta shawarma</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Sinister Smoothie</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Mango Momma.</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Cherri Juice</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                <View style={styles.itemWrapper} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Hawaiian Pizza</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Mushroom Burgers</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>        
                    
                        
                       
                        
                        
                                
                                
                                
                           
                        
                   
        </ScrollView>
    

        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor:"#F4F8FE",
        justifyContent: "center",
        alignItems: 'center',
    },
    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 10,
        
    },

    items:{
        width: "40%",
        flexDirection: 'column',
        paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 25,
        marginLeft: 30,
        backgroundColor: "#fff"
    },

    itemsCategories:{
        width: '95%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-around",


    },
    cat:{
        width: "17%",
        // padding: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderColor: "#ffe566",
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catText:{
        fontSize: 10,
    },

    active: {
        backgroundColor: '#ffee99',
    },

    itemImg:{
        width: "100%",
        height: 150,
        borderRadius: 20,
        marginRight: 20,
        backgroundColor: '#E3E9F3',
    },
    itemInfo:{
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    productName:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#4d6a6d",
    },
    priceBtn:{
        flexDirection: "column",
        alignItems: 'center',
        marginTop: 10,
    },
    PurchaseBtn:{
        backgroundColor: "#ffe566",
        borderRadius: 30,
        marginTop: 10,
    },
    PurchaseBtnText:{
        color: "#fff",
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    priceText:{
        color: "#4d6a6d",
        fontWeight: "bold",
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    searchContainer:{
        width:"60%",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    searchText:{
        width: '70%',
        paddingHorizontal: 20,
    },

    titleContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        padding: 5,
        color: '#4d6a6d',
    },
    itemWrapper:{
        flexDirection: 'row',
    },
})
