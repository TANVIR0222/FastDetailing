import { IconDeletedCricle, IconsAdd, IconTimeAndDate } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

const AllNote = () => {
    const [activeNoteIndex, setActiveNoteIndex] = React.useState<number | null>(null);

    return (
        <View style={tw`flex-col gap-2.5`}>
            {/* Header */}
            <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                    3 Notes
                </Text>
                <TouchableOpacity
                    onPress={() =>
                        setActiveNoteIndex(activeNoteIndex === 0 ? null : 0) // 
                    }
                    style={tw`bg-[#0087FF1A] flex-row gap-2 items-center px-2  py-1 rounded-md`}
                >
                    <SvgXml xml={IconsAdd} />
                    <Text style={tw`text-primaryColor text-text12 font-sfpro-600`}>
                        Add Note
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Notes List */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw`gap-3`}
            >
                {[1, 2, 3].map((_, index) => (
                    <View
                        key={index}
                        style={tw`border h-40 border-gray/30 rounded-xl bg-white p-4 gap-3 w-72`}
                    >
                        {/* Avatar + Name + Date Tag */}
                        <View style={tw`flex-row items-center gap-2`}>
                            <Image
                                source={require("@/assets/images/avator2.png")}
                                style={tw`w-8 h-8 rounded-full`}
                                resizeMode="cover"
                            />

                            <Text style={tw`flex-1 text-text10 font-sfpro-500 text-gray`}>
                                Kevin Peterson
                            </Text>

                            {/* Date Tag */}
                            {activeNoteIndex === index ? <SvgXml xml={IconDeletedCricle} />
                                : <View style={tw`flex-row items-center gap-1 bg-borderPrimary px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconTimeAndDate} />
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                        2025-01-15 14:30
                                    </Text>
                                </View>}
                        </View>

                        {/* Description OR TextInput */}
                        {activeNoteIndex === index ? (
                            <TextInput
                                style={tw`text-text12 font-sfpro-400 text-gray leading-5  h-20  px-2 py-1`}
                                multiline
                                textAlignVertical='top'
                                placeholder='typing here'
                            />
                        ) : (
                            <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum
                                as their default model text, and a search for 'lorem ipsum' will uncover
                                many web sites...
                            </Text>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default AllNote