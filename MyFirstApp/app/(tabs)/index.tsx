import { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

// I added JavaScript logic for greeting classmates. 05/01/2026
const myName = "";
const greet = (name: string) => `Hello, ${name}!`;
const classmates = ["Jackie", "June", "Maychelle"];
const greetings = classmates.map(name => greet(name));

// This logs to the console when the app runs
console.log(greetings);

export default function Index() {
  // 1. State variables for name and counter
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // 2. Dynamic message based on counter state
  const message = count > 0 
    ? `${name}, you tapped ${count} times!` 
    : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image 
        source={{ uri: 'https://drive.google.com/uc?id=1rz8cRLrvIaw6rX2NbMcMQT9qJhdhC8uo' }} 
        style={styles.photo} 
      />
      
      {/* TextInput to capture user input */}
      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={styles.input}
      />

      {/* 3. Conditional rendering for the greeting */}
      <Text style={styles.name}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>

      {/* Dynamic Counter Message */}
      <Text style={styles.counterMessage}>{message}</Text>

      {/* 4. Buttons with onPress events */}
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="RESET" onPress={() => setCount(0)} />
      </View>
      
      <Text style={styles.bio}>MMA Student · CS126</Text>
      
      {/* BIO SECTION */}
      <View style={styles.bioBox}>
        <Text style={styles.bioText}>
          I love making film and photography
        </Text>
      </View>

      {/* Display greetings on screen too */}
      <Text style={styles.greeting}>{greetings.join('\n')}</Text>
    </ScrollView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  screen: { 
    flexGrow: 1, // Changed from flex: 1 to flexGrow: 1 for ScrollView compatibility
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 20
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%', // Widened slightly to match your reference image
    borderColor: 'black',
    borderRadius: 5,
  },
  name: { 
    fontSize: 18, 
    marginTop: 12,
    marginBottom: 8
  },
  counterMessage: {
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 10,
    gap: 5, // Adds a little breathing room between the buttons
  },
  bio: { 
    fontSize: 14, 
    color: '#888',
    marginTop: 20
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