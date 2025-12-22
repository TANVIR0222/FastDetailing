import { IconsAdd, IconTimeAndDate } from '@/assets/Icons';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import GlobalAddServices from '../../GlobalAddServies';

const Note = () => {
    const [isNote, setisNote] = useState<boolean>(false);
    return (
        <View style={tw` flex-col gap-4`}>

            <GlobalAddServices buttonText="New Note" title="Job Notes" onPress={() => setisNote(!isNote)} icon={IconsAdd} bluebg={true} />

            <View style={tw`flex-col gap-4 border border-[#999a9a4D] rounded-lg p-4 bg-white `}>

                {/* First Avatar Section */}
                <View style={tw`flex-row items-center gap-3`}>
                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-6 h-6 rounded-full`} resizeMode="cover" />
                    <Text style={tw`flex-1 text-text10 font-sfpro-600 text-gray`}>Kevin Peterson</Text>
                    <View style={tw`flex-row items-center gap-1 bg-borderPrimary px-2 py-1 rounded-full`}>
                        <SvgXml xml={IconTimeAndDate} />
                        <Text style={tw`text-text10 font-sfpro-400 text-gray`}>2025-01-15 14:30</Text>
                    </View>
                </View>

                {/* Description */}
                <Text style={tw`text-text10 text-gray font-sfpro-400 leading-4`}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>

                {/* Second Avatar Section */}
                <View style={tw`flex-row items-center gap-3`}>
                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-6 h-6 rounded-full`} resizeMode="cover" />
                    <Text style={tw`flex-1 text-text10 font-sfpro-600 text-gray`}>Kevin Peterson</Text>
                    <View style={tw`bg-[#0087ff1A] px-2 py-1 rounded-full`}>
                        <Text style={tw`text-text10 font-sfpro-400 text-primaryColor`}>New notes</Text>
                    </View>
                </View>

                {/* Empty Card / Divider */}
                {/* <View style={tw`border border-[#999a9a4D] rounded-lg p-4 bg-white`} /> */}

                {isNote &&

                    <>
                        <TextInput style={tw`border border-[#999a9a4D] h-40 rounded-lg p-2 bg-white`} textAlign='left' multiline textAlignVertical='top' />

                        <View style={tw`flex-row gap-3 justify-start`}>
                            <TouchableOpacity style={tw`flex-1 bg-[#0087ff1A] py-3 rounded-lg items-center`}>
                                <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-1 bg-[#e71f2f1A] py-3 rounded-lg items-center`}>
                                <Text style={tw`text-text12 font-sfpro-500 text-[#e71f2f]`}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                    </>

                }


            </View>
        </View>
    )
}

export default Note;

