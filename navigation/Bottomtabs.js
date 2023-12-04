import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
import { React } from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Order from './Order';

const webmap = require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>Base Map</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/OpenStreetMap.png')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cartography.png')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/GambarPeta.jpg')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/OpenStreetMap.png')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cartography.png')} style={styles.image} />
                <Text caption={styles.caption}> Open Street Map </Text>
            </View>
        </ScrollView>
    );
}

function MapScreen() {
    return (
            <WebView
                source={ webmap }
            />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}

function OrderScreen() {
    return (
        <View>
            <Order />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Mahasiswa" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Mahasiswa',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Order" component={OrderScreen}
                    options={{
                        tabBarLabel: 'Order',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
})