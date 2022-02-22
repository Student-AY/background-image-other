import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Switch, Button,Alert,SafeAreaView} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isEnabled,setIsEnabled] = useState(true);
  const [text,setText] = useState("toggle switch")

  const simpleAlert = () => {
    Alert.alert(
      //title:
      'een gewone alert-button',
      //body:
      'hey, alles kits?',
      [
        {
          text:"ok!?",
          onPress:() => {console.log("u koos voor ok");}
        }
      ]
    )
  }
  const tweeOptieAlert = ()  => {
    Alert.alert(
      //titel: 
      "twee optie alert-button",
      //body:
      "maak uw keuze",
      [
        {
          text:"Ja!!!", onPress:() => {
            console.log("u koos voor ja");
          }
        },
        {
          text:"Nee!?", onPress:() => {
            console.log("u koos voor nee");
          }
        }
      ]
    )
  }

  const drieOptieAlert = () => {
    Alert.alert(
      //titel
      "dit is een 3 optie alert-button",
      //body
      "maak uw keuze",
      [
        {
          text:"misschien", onPress:() => {console.log("U koos voor misschien");}
        },
        {
          text:"Ja", onPress:() => {console.log("U koos voor ja");}
        },
        {
          text:"Neen", onPress:() => {console.log("U koos voor Neen");}
        },

      ]
      
    )
  }


  const toggleSwitch = () => {
    if(isEnabled){
      setText("Inactive");
    }else{
      setText("Active")
    }
    setIsEnabled(previousState => !previousState)
  }

  return (
  <SafeAreaView style={{flex:1,backgroundColor:'tomato',padding:3}}>
    <View style={styles.container}>
      
      
      <Text style={styles.SwitchAttrb}>
        T0ggle the Switch!
        </Text>
      
        <Switch
        trackColor={{false:"red" , true:"green"}} // dit is de achtergrond kleur
        thumbColor={isEnabled ? "grey" : "grey"}  // dit is de gekleurde cirkel die zich op de switch bevind
        ios_backgroundColor='grey'
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>

        <View style={{backgroundColor:'green',padding:15,height:320}}>
          <SafeAreaView style={{padding:15,backgroundColor:'black'}}>
          <Button
          title='simpele alert'
          onPress={simpleAlert}
          />

          <Button
          title='2 optie alert-button'
          onPress={tweeOptieAlert}
          />

          <Button
          title='3 optie alert-button'
          onPress={drieOptieAlert}
          />
          </SafeAreaView>
        </View>
        
        
        
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'grey'
  },
  SwitchAttrb:{
    fontWeight:'bold',
    fontSize:20,
    fontFamily:'serif',
    backgroundColor:'tomato',
    borderRadius:5,
  },
  
  
});
