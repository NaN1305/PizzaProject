import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

function Homes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.iconebars} name="reorder"
          
        />
        <Image 
          style={{ width: 60, height: 60}}
          source={require('../../assets/pizzahut.png')}
        />
        <View>
        <Icon style={styles.iconebars} name="shopping-cart"
          onPress={() => navigation.navigate('Cart')}
        />
        </View>
      </View>
      <StatusBar style="auto" />
      <View style={styles.whatyouwant}>
        <Text style={styles.whatyouwanttxt}>Choose what you</Text>
        <Text style={styles.whatyouwanttxt2}>want to eat today!</Text>
      </View>
      <ScrollView>
      <View style={styles.cardboard}>
      <Image style={styles.pizzas}
          source={require('../../assets/pepperoni.png')}
        />
        <View>
          <Text style={styles.saborpizza}>Pepperoni Pizza</Text>
          <View style={styles.rating}>
            <Text>4.5</Text>
            <Icon name="star"/>
            <Icon name="star"/>
            <Icon name="star"/>
            <Icon name="star"/>
            <Icon name="star-half"/>
          </View>
          <Text style={styles.valorpizza}>R$: 69,99</Text>
        </View>
        <View>
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
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
          <Icon style={styles.addtocart} name="add-box" />
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      <View style={styles.cardboard}>
      <Image style={styles.pizzas}
          source={require('../../assets/cali.png')}
        />
        <View>
          <Text style={styles.saborpizza}>California Pizza</Text>
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      <View style={styles.cardboard}>
      <Image style={styles.pizzas}
          source={require('../../assets/cali.png')}
        />
        <View>
          <Text style={styles.saborpizza}>California Pizza</Text>
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      <View style={styles.cardboard}>
      <Image style={styles.pizzas}
          source={require('../../assets/cali.png')}
        />
        <View>
          <Text style={styles.saborpizza}>California Pizza</Text>
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      <View style={styles.cardboard}>
      <Image style={styles.pizzas}
          source={require('../../assets/cali.png')}
        />
        <View>
          <Text style={styles.saborpizza}>California Pizza</Text>
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      <View style={styles.cardboard1}>
      <Image style={styles.pizzas}
          source={require('../../assets/cali.png')}
        />
        <View>
          <Text style={styles.saborpizza}>California Pizza</Text>
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
          <Icon style={styles.addtocart} name="add-box" />
        </View>
      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    alignItems: "center",
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
    fontSize: 30,
    color: "#fff",

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

export default Homes;