import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home(params) {
    const navigation = params.navigation;
  return (
    <View
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "WhiteSmoke",
        flex: 1,
      }}
    >
        <ScrollView> 
            <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#003366",
          padding: 10,
          paddingTop: 50,
        }}
      >
          <TouchableOpacity onPress={() => {
          navigation.navigate("Login");
        }} >
        <FontAwesome name="arrow-left" size={35}/>
        </TouchableOpacity>
        <Text style={{ fontweight: "bold", fontSize: 50, marginBottom: 5, color: "white", fontFamily:"Brush Script MT", textAlign: "center" }}>Home</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="white"/>
        </View>
      </View>
      <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >     
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 50,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/1/0/8/4/0/3/108403--product.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Gucci GG Bucket Hat</Text>
                <Text style={{ paddingBottom:10,fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 150.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 50,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/5/9/8/1/9/5/598195--product.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>FENDI Logo FF Bucket Hat</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 180.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/6/1/7/9/9/2/617992--product.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Faux Fur Logo Bucket Hat</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 170.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/6/1/1/7/5/9/611759--product-gallery@2x.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Teddy Bucket Hat</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 110.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/6/0/1/8/6/1/601861--product.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Glossy Bucket Hat</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 170.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn1.bambinifashion.com/img/p/5/8/2/1/7/9/582179--product.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Burberry Glossy Logo Bucket Hat</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHC 150.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#003366",
        }}
      >
        <Text style={{color: "white" }}>Buy now</Text>
      </TouchableOpacity>
            </View>
        </View>
            </ScrollView>
    
    </View>
  );
}