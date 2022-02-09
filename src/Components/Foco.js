import React from 'react';
import { useState } from 'react';
import {StyleSheet,Button, Text, View, Image} from 'react-native';

const Foco = () => {
    const [FocoOn, setFoco] = useState(true);

  return(
<View>
    
     <Text > {FocoOn ? <Image
          style={{ width: 150, height: 150 }}
          resizeMode='contain'
          source={require('../Img/focoOn.png')}
        /> :
        <Image
          style={{ width: 150, height: 150 }}
          resizeMode='contain'
          source={require('../Img/focoOff.png')}
        />
        }</Text> 
<Button title ="Prender/Apagar" onPress={()=>{setFoco(!FocoOn)}}/>
  </View>
  );
};

export default Foco;
