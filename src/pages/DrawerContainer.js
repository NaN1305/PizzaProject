import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

export function DrawerContent({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.headerdrawer}>
            <Icon style={styles.profpicdrawer} name="account-circle"/>
            <View>
            <Text style={styles.textdrawerh}>Bem vindo,</Text>
            <Text style={styles.textdrawerhn}>Enzo Pascucci</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.buttondrawer}
                onPress={() => navigation.navigate("MyAccount")}
            >
                <Icon style={styles.icondrawer} name="account-box"/>
                <Text style={styles.textdrawer}>Minha Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttondrawer}
                onPress={() => navigation.navigate("Home")}
            >
                <Icon style={styles.icondrawer} name="home"/>
                <Text style={styles.textdrawer}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttondrawer}
                onPress={() => navigation.navigate('Cart')}
            >
                <Icon style={styles.icondrawer} name="shopping-cart"/>
                <Text style={styles.textdrawer}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttondrawer}
                onPress={() => navigation.navigate('Cart')}
            >
                <Icon style={styles.icondrawer} name="subdirectory-arrow-left"/>
                <Text style={styles.textdrawer}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e4e4e4',
      alignItems: "center",
      justifyContent: "center",
    },

    buttondrawer: {
        display: "flex",
        flexDirection: "row",
        height: 55,
        width: 230,
        backgroundColor: "#FF808C",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 15,
    },

    headerdrawer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 150,
        backgroundColor: "#FF808C",
        position: "absolute",
        top: 0,
        flexDirection: "row",
    },

    profpicdrawer: {
        marginTop: 30,
        fontSize: 100,
        color: "#fff",
    },

    textdrawer: {
        marginLeft: 10,
        fontSize: 20,
        color: "#fff",
        marginBottom: 5,
    },

    textdrawerh: {
        marginTop: 25,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "#fff",
    },

    textdrawerhn: {
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "#fff",
    },

    icondrawer: {
        marginLeft: 15,
        fontSize: 30,
        color: "#fff",
    },
  
    header: {
      backgroundColor: "#FF808C",
      display: "flex",
      flexDirection: "row",
      height: 120,
      alignItems: "center",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 20,
      justifyContent: "space-between",
      width: "100%",
  
    },
    
    iconebars: {
        marginTop: 60,
      marginLeft: 40,
      fontSize: 30,
      color: "black",
  
    },
  
    buscar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
  
    buscartxt: {
      color: "#fff",
      marginTop: 5,
      marginLeft: 5,
    },
  
    whatyouwant: {
      width: "100%",
      marginLeft: 40,
      marginTop: 20,
  
    },
  
    whatyouwanttxt: {
      width: "100%",
      color: "#828282",
      fontWeight: "bold",
      fontSize: 25,
    
    },
  
    whatyouwanttxt2: {
      color: "#828282",
      fontWeight: "bold",
      fontSize: 20,
    },
  
    cardboard: {
      backgroundColor: "#fff",
      justifyContent: "center",
      width: 340,
      borderRadius: 12,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    cardboard1: {
      backgroundColor: "#fff",
      justifyContent: "center",
      width: 340,
      borderRadius: 12,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
  
    saborpizza: {
      marginTop: 25,
      marginLeft: 20,
      fontWeight: "bold",
    },
  
    pizzas: {
      width: 80,
      height: 80,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 20
  
    },
  
    valorpizza: {
      marginLeft: 20,
      marginTop: 5,
      fontSize: 25,
      fontWeight: "bold",
    },
  
    addtocart: {
      color: "#FF808C",
      fontSize: 50,
      marginTop: 40,
      marginRight: 20,
      marginLeft: 20,
  
    },
  
    rating: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      marginLeft: 20,
    },
  });