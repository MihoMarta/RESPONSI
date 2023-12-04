import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Order from '../OrderSpace';
import DataOrder from '../Dataorder';
import Callapi from '../Callapi';


const Tab = createBottomTabNavigator();

// Form input dari github
const forminput = 'https://mihomarta.github.io/PETAOBJEK/';
const forminput2 = 'https://mihomarta.github.io/PGPBL_Form/';

// Peta web dari github
const webmap = 'https://mihomarta.github.io/PETAOBJEK/map.html';


function HomeScreen() {
    return (
        
        <ScrollView >
           <Text style ={styles.title}>Our Gallery</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe1.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe2.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe3.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe4.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe5.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cafe6.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
        </ScrollView>
    );
}
// Pengaturan Map
function MapScreen() {
    return (
        <WebView
            source={{uri: webmap}}
        />

    );
}

// Pengaturan List Katalog
function CatalougeScreen() {
    return (   
        <View>
            <Callapi />
        </View>
    );
}

//Pengaturan Penambahan Titik CoWork
function AddDataScreen() {
    return (
        <WebView
            source={{uri: forminput}}
        />

    );
}

//Pengaturan Pemesanan
function AddPesanScreen() {
    return (
        <WebView
            source={{uri: forminput2}}
        />

    );
}

// Pengaturan Untuk Routing Masing Masing CoWork Menggunakan google navigation (Portofolio = App.tsx )
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MyTabs() {
    return (
        //Pengaturan Galeri
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Beranda" component={HomeScreen} options={{
                    tabBarLabel: 'Galery',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="images" color={color} size={size} />
                    ),
                }}

        //Pengaturan Maps
                />
                <Tab.Screen name="Peta" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-pin" color={color} size={size} />
                        ),
                    }}

        //Pengaturan Penambahan Tempat
                />
                <Tab.Screen name="Rekomendasikan" component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Place',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="plus" color={color} size={size} />
                        ),
                    }}
        
        //Pengaturan Penambahan Pesanan
                />
                <Tab.Screen name="Pesan Disini" component={AddPesanScreen}
                    options={{
                        tabBarLabel: 'Order Here',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="edit" color={color} size={size} />
                        ),
                    }}
        
        //Pengaturan Rekomendasi
                />
                <Tab.Screen name="Rekomendasi" component={CatalougeScreen}
                    options={{
                        tabBarLabel: 'Catalog',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="list" color={color} size={size} />
                        ),
                    }}
        
        //Pengaturan Tab Routing
                />
                <Tab.Screen name="Profil" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Routes',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="route" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>

    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 10,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#B99470'
    },
    container: {
        marginTop:20, 
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#BBAB8C'
    }
})