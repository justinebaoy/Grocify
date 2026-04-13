import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyles}>Justine A. Baoy</Text>
      <Text style={styles.bading}>2nd Year IT-2A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    fontFamily: "Times New Roman"
    
  },
  textstyles:{
    color: "white",
    fontSize: 30,
  },
  bading:{
    color: "white", 
    fontSize: 30,
    fontFamily: "Monstserrat",
  },
  bading2:{
    color: "white", 
    fontSize: 15,
    fontFamily: "Times New Roman",
  }
  

  

  
});
