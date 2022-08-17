import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from '@myapp/theme/View';
import { Text } from '@myapp/theme/Text';
import { gStyles } from '@myapp/layout/styles';
import { RootStackScreenProps } from '@myapp/navigation/types';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={gStyles.container}>
      <Text style={styles.title}>This screen does not exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Tabs')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
