import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Categories, COLORS } from '../database/items'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Details = ({ route, navigation }) => {

  const { name, price, image, size, crust, delivery, ingredients, isTopOfTheWeek, rating, } = route.params

  return (
    <View style={{
      width: '100%',
      height: '100%',
      position: 'relative',
    }}>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40, height: 40, borderRadius: 10,
            borderColor: COLORS.black,
            borderWidth: 1, justifyContent: 'center',
            alignItems: 'center'
          }}>
          <FontAwesome name='angle-left' style={{
            fontSize: 16,
            color: COLORS.black
          }} />
        </TouchableOpacity>
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: COLORS.accent,
          opacity: isTopOfTheWeek ? 1 : 0.5,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <AntDesign name='star' style={{ fontSize: 15, color: COLORS.white }} />
        </View>
      </View>

      <Text style={{
        fontSize: 38,
        color: COLORS.black,
        fontWeight: '800',
        paddingHorizontal: 20,
        maxWidth: 310,
      }}>{name}</Text>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
        <Text style={{
          fontSize: 20, color: COLORS.accentRed, fontWeight: '900',
          paddingRight: 5, paddingBottom: 0,
        }}>$</Text>
        <Text style={{
          fontSize: 20, color: COLORS.accentRed, fontWeight: '900',
          paddingRight: 5, paddingBottom: 0,
        }}>{price}</Text>
      </View>

      <View style={{
        flexDirection: 'column',
        maxHeight: 300,
        width: '100%',
        alignItems: 'flex-start',
      }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 12, color: COLORS.black, opacity: 0.5 }}>Size</Text>
            <Text style={{ fontSize: 18, color: COLORS.black, fontWeight: '600' }}>{size}</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 12, color: COLORS.black, opacity: 0.5 }}>Crust</Text>
            <Text style={{ fontSize: 18, color: COLORS.black, fontWeight: '600' }}>{crust}</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 12, color: COLORS.black, opacity: 0.5 }}>Delivery</Text>
            <Text style={{ fontSize: 18, color: COLORS.black, fontWeight: '600' }}>{delivery} min</Text>
          </View>
        </View>

        <View style={{
          width: 300,
          height: 300,
          position: 'absolute',
          right: -50,
          top: -50,
        }}>
          <Image source={image} style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }} />
        </View>
      </View>

      <Text style={{
        paddingTop: 20, paddingHorizontal: 20, fontSize: 20,
        fontWeight: '700', color: COLORS.black,
      }}>Integredients</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ingredients.map((data, index) => {
          return (
            <View key={index} style={{
              margin:12, width: 80, height: 80, backgroundColor: COLORS.white, elevation: 5
            }}>
              <Image source={data} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }} />
            </View>
          )
        })}
      </ScrollView>

      <View style={{
        position: 'absolute', width: '100%', bottom: 0,
        alignItems: 'center', justifyContent: 'center'
      }}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
          style={{
            width:'90%', height: 50, backgroundColor: COLORS.accent,
            borderTopRightRadius:20, borderTopLeftRadius: 20,
            alignItems: 'center', justifyContent: 'center',
            flexDirection: 'row'
        }}>
          <Text style={{fontSize: 16, color: COLORS.black, fontWeight: 'bold', letterSpacing: 1, marginRight:10,}}>Please on order</Text>
          <Entypo name='chevron-right' style={{fontSize: 16, color: COLORS.black}}/>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Details