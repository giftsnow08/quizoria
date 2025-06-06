import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.boxShadow}>Welcome to Quizoria App</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  boxShadow: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        padding: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,

  },
 
}
