import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Categories, COLORS } from '../database/items'
import Material from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = () => {

    const [currentSelected ,setCurrentSelected] = useState(0)

    const RenderCategories = ({item, index}) => {
        return(
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => setCurrentSelected(index)}
            >
                <View style={{
                    width: 120, height:180, justifyContent: 'space-evenly', alignItems: 'center',
                    backgroundColor: currentSelected === index ? COLORS.accent : COLORS.white,
                    margin: 10, elevation: 5, borderRadius: 20
                }}>
                    <View style={{
                            width: 60, height: 60
                        }}>
                        <Image source={item.image} style={{
                            width: '100%', height: '100%', resizeMode: 'center'
                        }} />
                    </View>
                    <Text style={{fontSize: 16, color: COLORS.black, fontWeight: '600'}}>{item.name}</Text>
                    <View style={{
                        width: 30, height: 30, borderRadius: 100,
                        backgroundColor:  currentSelected === index ? COLORS.white : COLORS.accent,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        <FontAwesome5 name='angle-right' style={{
                            fontSize: 12, color: currentSelected === index ? COLORS.black : COLORS.white,
                        }} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderItems = (data, index) => {
        return(
            <TouchableOpacity 
                key={index}
                style={{
                    width: '100%',
                    height: 180,
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <View style={{
                    width: '90%',
                    height: 160,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    elevation: 4, 
                    position:'relative', padding: 15, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{marginBottom: 50}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: data.isTopOfTheWeek
                        }}>
                            <FontAwesome5 name='crown' style={{fontSize: 10, color: COLORS.accent}} />
                            <Text 
                                style={{fontSize:12, color: COLORS.black, opacity: 0.8, marginLeft: 5
                            }}>top to the week</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

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
                        <Text style={{ fontSize: 40, color: COLORS.black, fontWeight: '600', letterSpacing: 2, }}>Deliver</Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Ionicons name='search' style={{ fontSize: 20, color: COLORS.black, opacity: 0.8 }} />
                        <TextInput placeholder='Search ...' style={{
                            color: COLORS.black,
                            fontSize: 16,
                            paddingVertical: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.black + 20,
                            width: '90%',
                            marginLeft: 10,
                            letterSpacing: 1,
                        }} />
                    </View>
                    <Text style={{
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        fontSize: 18,
                        fontWeight: '700', 
                        color: COLORS.black,
                        letterSpacing: 1,
                    }}>Categories</Text>
                    <FlatList 
                        horizontal={true} 
                        data={Categories}
                        renderItem={RenderCategories}
                        showsHorizontalScrollIndicator={false}
                        
                    />
                    <Text style={{
                        paddingTop: 20, paddingHorizontal: 20, fontSize: 18, fontWeight: '700', letterSpacing: 1,
                        color: COLORS.black
                    }}>Popular</Text>
                    {
                        Categories[currentSelected].items.map(renderItems)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Home