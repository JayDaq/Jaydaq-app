import { View, Text, Image, StyleSheet } from 'react-native';

// I added JavaScript logic for greeting classmates. 05/01/2026
const myName = "Jaydee P. Daquipa";
const greet = (name: string) => `Hello, ${name}!`;
const classmates = ["Jackie", "June", "Maychelle"];
const greetings = classmates.map(name => greet(name));

// This logs to the console when the app runs
console.log(greetings);

export default function Index() {
  return (
    <View style={styles.screen}>
      <Image 
        source={{ uri: 'https://drive.google.com/uc?id=1rz8cRLrvIaw6rX2NbMcMQT9qJhdhC8uo' }} 
        style={styles.photo} 
      />
      <Text style={styles.name}>{myName}</Text>
      <Text style={styles.bio}>MMA Student · CS126</Text>
      
      {/* NEW BIO SECTION */}
      <View style={styles.bioBox}>
        <Text style={styles.bioText}>
          I love making film and photography
        </Text>
      </View>


      {/* Display greetings on screen too */}
      <Text style={styles.greeting}>{greetings.join('\n')}</Text>
    </View>
  );
}

// I change the stylesheet to make the portfolio screen look better. 05/01/2026
const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  bio: { 
    fontSize: 14, 
    color: '#888' 
  },
  bioBox: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    alignItems: 'center'
  },
  bioText: {
    fontSize: 14,
    color: '#555'
  },
  greeting: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center'
  }
});