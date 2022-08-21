import { StyleSheet } from 'react-native';
import { tintColorLight } from '@myapp/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 30,
  },
  loginButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: tintColorLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    width: '80%',
    borderRadius: 10,
  },
  logoutButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
});
