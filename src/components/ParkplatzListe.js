import React from 'react';
import { View, Text } from 'react-native';

const ParkplatzListe = ({ parkplaetze }) => {
  return (
    <View>
      {parkplaetze.map((platz) => (
        <Text key={platz.id}>{platz.name} - {platz.status}</Text>
      ))}
    </View>
  );
};

export default ParkplatzListe;