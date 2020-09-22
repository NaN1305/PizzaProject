import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

function Cart({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon style={styles.iconebars} name="reorder"
            
          />
          <Image 
            style={{ width: 60, height: 60}}
            source={require('../../assets/pizzahut.png')}
          />
          <View style={styles.buscar}>
          <Icon style={styles.iconebars} name="shopping-cart"
            onPress={() => navigation.goBack()}
          />
          </View>
        </View>
        <Text style={styles.whatyouwanttxt3}>Resumo do Pedido:</Text>
        <View style={styles.cardboard}>
        <Image style={styles.pizzas}
            source={require('../../assets/marg.png')}
          />
          <View>
            <Text style={styles.saborpizza}>Margherita Pizza</Text>
            <View style={styles.rating}>
              <Text>4.5</Text>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star-half"/>
            </View>
            <Text style={styles.valorpizza}>R$: 59,99</Text>
          </View>
          <View>
            <Icon style={styles.addtocart} name="done" />
          </View>
        </View>
        <View style={styles.cardboard}>
        <Image style={styles.pizzas}
            source={require('../../assets/pros.png')}
          />
          <View>
            <Text style={styles.saborpizza}>Prosciutto Pizza</Text>
            <View style={styles.rating}>
              <Text>4.5</Text>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star"/>
              <Icon name="star-half"/>
            </View>
            <Text style={styles.valorpizza}>R$: 89,99</Text>
          </View>
          <View>
            <Icon style={styles.addtocart} name="done" />
          </View>
        </View>
        <View style={styles.footer}>
        <Image style={styles.pizzas}
            source={require('../../assets/marg.png')}
          />
          <View style={{ flex: 1, marginLeft: 15,}}>
            <Text style={styles.pizzasesc}>Pizzas escolhidas:</Text>
            <Text style={styles.sabesc}>Margherita</Text>
            <Text style={styles.sabesc}>Prosciutto</Text>
          </View>
            <Text style={styles.valorresumo}>R$: 89,99</Text>
        </View>
        {/* CREATE VIEW */}
      </View>
    );
  }

  //flexDirection: column;
  //alignItems horizontal
  //justifyContent: vertical
  //flexDirection: row;
  //alignItems vertical
  //justifyContent: horizontal
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e4e4e4',
      alignItems: "center",
      position: 'relative'
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        height: 120,
        left: 0,
        right: 0,
        backgroundColor: "#FF808C",
        justifyContent: "space-between",
        flexDirection: "row",
        
    },
  
    header: {
      backgroundColor: "#FF808C",
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
      fontSize: 30,
      color: "#fff",
  
    },
  
    buscar: {
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
      flexDirection: "row",
      justifyContent: "space-between",
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

    valorresumo: {
        marginLeft: 260,
        marginTop: 50,
        fontSize: 25,
        fontWeight: "bold",
        position: "absolute",
        color: "#fff",
      
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

    resumo: {
        fontSize: 30,
    },

    pizzasesc: {
      marginTop: 15,
      fontSize: 15,
      marginLeft: 20,
      fontWeight: "bold",
      color: "#fff",
    },

    sabesc: {
      marginTop: 5,
      marginLeft: 20,
      fontSize: 15,
      fontWeight: "bold",
      color: "#fff",
    },

    whatyouwanttxt3: {
      width: "100%",
      color: "#828282",
      fontWeight: "bold",
      fontSize: 25,
      marginTop: 20,
      marginLeft: 40,
    },
  });

  export default Cart;