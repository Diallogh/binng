import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "#003366",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: 200,
          marginTop: 40,
          marginBottom: 30,
          width: 350,
          height: 350,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1617916918894-7bc1ea780bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        }}
      />
      <Text style={{ fontSize: 50, color: "white", fontFamily:"Brush Script MT" }}>Welcome to</Text>
      <Text style={{ fontSize: 50, color: "white", fontWeight: "bold", paddingBottom: 20 }}>Binng</Text>
     { <View style={{}}>
        <TextInput
          style={{

            padding: 10,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View> }
      {<View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> }
    
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 25,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{color: "white" }}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}