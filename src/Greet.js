import React from 'react';
import {View, Text} from 'react-native';

export default function Greet({name}) {
  return (
    <View>
      <Text>Hola {name}</Text>
    </View>
  );
}
