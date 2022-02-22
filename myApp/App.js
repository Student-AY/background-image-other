import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Switch, Button,Alert,SafeAreaView,ImageBackground} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isEnabled,setIsEnabled] = useState(true);
  const [text,setText] = useState("switching")

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
      <ImageBackground source={require('./app/img/img01.jpg')}/>
      
    }else{
      setText("Active");
      <ImageBackground source={require('./app/img/backgroundimg.jpg') }/>
      
    }
    setIsEnabled(previousState => !previousState)
  }

  

  const Separator = () => (
    <View style={styles.separator}/>
  )
  return (
  <ImageBackground source={require('./app/img/backgroundimg.jpg')} style={{flex:1}}>
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
        <Separator/> 

        <View style={{padding:15,height:320}}>
          <SafeAreaView style={{padding:45,backgroundColor:'black',alignContent:'space-between'}}>
            
          <Button
          title='simpele alert'
          onPress={simpleAlert}
          />
          <Separator/>


          <Button title='2 optie alert-button'
          onPress={tweeOptieAlert}
          />
          <Separator/>

          <Button title='3 optie alert-button'
          onPress={drieOptieAlert}
          />
          <Separator/>
          
          </SafeAreaView>
        </View>
        
        
        
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  SwitchAttrb:{
    fontWeight:'bold',
    fontSize:20,
    fontFamily:'serif',  
    
  },
  separator: {
    marginVertical: 0,
    borderBottomColor: '#2196F3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor:'green'
  },
  
  
});
