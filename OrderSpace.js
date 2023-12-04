import React, {useState} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Createdata = () => {
    const [nama, setNama] = useState('');
    const [jumlahorang, setJumlahorang] = useState('');
    const [durasi, setDurasi] = useState('');
    const [namatempat, setNamatempat] = useState('');
    

    const submit = () => {
        const data = {
          nama: nama,
          jumlahorang: jumlahorang,
          durasi: durasi,
          namatempat: namatempat,
          
        };
        fetch('http://10.0.2.2:3000/responsi', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            alert('Data tersimpan');
            setNama('');
            setNim('');
            setKelas('');
            setJeniskelamin('');
            setColor('');
            setIcon('');
          })
        }  
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Form Pesanan</Text>
                <ScrollView style={styles.form}>
                    <TextInput placeholder="Nama" value={nama} onChangeText={(value) => setNama(value)} style={styles.input}/>
                    <TextInput placeholder="Jumlah Orang" value={jumlahorang} onChangeText={(value) => setJumlahorang(value)} style={styles.input}/>
                    <TextInput placeholder="Durasi" value={durasi} onChangeText={(value) => setDurasi(value)} style={styles.input}/>
                    <TextInput placeholder="Nama Tempat" value={namatempat} onChangeText={(value) => setNamatempat(value)} style={styles.input}/>
                    <Button title="Simpan" style={styles.button} onPress={submit}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Createdata

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#7C93C3',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    form: {
      padding: 10,
      marginBottom: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
      },
      button: {
        marginVertical: 10,
      }
     })
        