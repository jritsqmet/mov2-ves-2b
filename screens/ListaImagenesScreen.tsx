import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ListaImagenesScreen() {

  const [titulo, setTitulo] = useState('')
  const [direccion, setDireccion] = useState('')

  const [lista, setLista] = useState([])

  function guardar(){
    /*
       if( direccion.trim() === ''){
          Alert.alert( 'Advertencia', 'No se permite que URL esté vacío' )
    } 
     */
    if( titulo.trim() === '' || direccion.trim() === '' ){
      Alert.alert( 'Advertencia', 'No se permite campos vacíos' )
    }else{
      const listaTemp: any = [ ...lista, {titulo, direccion} ]
      setLista(listaTemp)
      console.log(lista)
    }

    setTitulo('')
    setDireccion('')

  }

  function eliminar( elemento : any){
    const listaTemp = lista.filter( item => (item != elemento)) 
    setLista(listaTemp)
  }

  /*
  Type Item:{
    titulo: String,
    direccion: String
  }
  */


  return (
    <View>
      <Text>Lista</Text>

      <TextInput
        placeholder='Ingrese nombre'
        onChangeText={(texto) => ( setTitulo(texto)) }
        value={titulo}
      />
      <TextInput
        placeholder='Ingrese URL'
        keyboardType='url'
        onChangeText={ (texto) => ( setDireccion(texto))}
        value={direccion}
      />

      <Button title='GUARDAR' onPress={() => guardar()}/>
      <FlatList
        data ={lista}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
            <Text>{item.direccion}</Text>

            <Button title='ELIMINAR' color={'red'} onPress={()=>eliminar( item )}/>
          </View>
        
        ) }
       />
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: '#768',
    marginBottom:10,
    padding:10
  }
})