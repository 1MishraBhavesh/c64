import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
   Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb'
console.log(db["the"].chunks);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 30,fontFamily: 'French Script MT' },
          }}
        />
         
        <Image
        style={styles.imgIcon}
        source={{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}}
        /> 
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks});
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {
            this.state.chunks.map(item=>{
              return  <Text style={styles.chunkButton}>{item}</Text>
            })
          }
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 60,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
     fontSize:30,
    outline: 'none',
    fontFamily: 'French Script MT'
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chunkButton: {
    backgroundColor:"blue",
    textAlign: 'center',
    fontSize: 30,
    width:"20%" ,
    height:"40%",
    margin: 5,
    borderRadius:7,
    alignSelf:'center',
    fontSize:30,
    fontStyle:"italic",
    
    
  },
  imgIcon:{
    marginLeft:90,
    width:150,
    height:150
  }
});
