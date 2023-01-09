import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../database/items'
import Material from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white
        }}>
            <ScrollView>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: COLORS.white,
                    position: 'relative'
                }}>
                    <StatusBar backgroundColor={COLORS.white} barStyle='dark-content' />
                    <Image source={require('../database/images/background.png')} style={{
                        position: 'absolute',
                        top: 0,
                        left: -100
                    }} />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 20
                    }}>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40
                        }}>
                            <Image source={require('../database/images/profile.jpg')} style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain',
                                borderRadius: 500
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Material name='segment' style={{
                                fontSize: 28,
                                color: COLORS.black
                            }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 16, color: COLORS.black, opacity: 0.5, fontWeight: '400' }}>Food</Text>
                        <Text style={{ fontSize: 40, color: COLORS.black, fontWeight: '600', letterSpacing:2, }}>Deliver</Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 20, paddingVertical: 10
                    }}>
                        <Ionicons name='search' style={{fontSize:20, color: COLORS.black, opacity: 0.8}} />
                        <TextInput placeholder='Search ...'  style={{
                            color: COLORS.black,
                            fontSize:16,
                            paddingVertical:5,
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.black,
                            width: '90%',
                        }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home