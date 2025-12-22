import tw from '@/src/lib/tailwind';
import { StatusInfoProps } from '@/src/lib/type';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';


const ScheduledTopCard: React.FC<StatusInfoProps> = ({ icon, title, subtitle }) => {
    return (
        <View style={tw`w-full border border-borderPrimary p-4 rounded-lg bg-white gap-4`}>
            {/* Row 1 */}
            <View style={tw`flex-row justify-between items-center`}>

                <View style={tw`flex-row gap-2 items-center`}>
                    <SvgXml xml={icon} />
                    <View>
                        <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>{title}</Text>
                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>{subtitle}</Text>
                    </View>
                </View>

                <View style={tw`px-2 py-1 rounded-full bg-[#0087ff1A] justify-center`}>
                    <Text style={tw`text-text10 text-primaryColor font-sfpro-600`}>Recurring</Text>
                </View>
            </View>

        </View>
    )
}

export default ScheduledTopCard