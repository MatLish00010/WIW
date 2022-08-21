import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    opacity: 0.5,
    fontSize: 12,
  },
  input: {
    borderBottomWidth: 2,
    paddingVertical: 5,
    width: '100%',
  },
  submitButton: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
});
