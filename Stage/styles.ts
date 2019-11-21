import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    width: '100%',
    padding: 10,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
  },
});

export default styles;