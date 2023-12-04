import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

const YourComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Judul Halaman</Text>
        {/* Konten lain dari halaman Anda */}
      </View>
    );
  };
  
const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxxLXrnCnKbG97C98HfU0_Z9RoyOzGOdX0nEI_krKx-kpTWbkTs926y6_6EuS1v3-kY/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    return (
        <SafeAreaView>
            <Text style ={styles.title}>Catalouge</Text>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View style={{
                    backgroundColor: Colors.coklat
                }}>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.avatar}>
                                    <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                </View>
                                <View>
                                    <Text style={styles.cardtitle}>{item.tempat}</Text>
                                    <Text>Alamat: {item.alamat}</Text>
                                    <Text>Operasional: {item.operasional}</Text>
                                    <Text>Fasilitas: {item.fasilitas}</Text>
                                    <Text>Harga Menu: {item.hargamenu}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#B99470',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 10,
        marginVertical: 7
    },
    
    
})