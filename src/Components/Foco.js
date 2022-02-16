import React, { useState } from 'react'
import {Image, View, TouchableOpacity} from 'react-native';

const Foco = () => {

  const [estatus, setEstatus] = useState(false);

  return (
    <View>

      <TouchableOpacity onPress={ ()=> { setEstatus(!estatus) }  }>

          <Image source={ estatus ?  require('../Img/focoOn.png') : require('../Img/focoOff.png') } 
              style={{ width: 250, height: 400}}
          />

      </TouchableOpacity>

    </View>
  )
}

export default Foco
