import tw from '@/src/lib/tailwind'
import { JobProps } from '@/src/lib/type'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const TopCard = ({
    progressBar,
    iconsLeft,
    iconsRight,
    progress,
    color,
    height,
    title,
    bgColor,
    countNumber
}: JobProps) => {
    return (
        <View style={tw`flex-col gap-4 p-2.5 border-gray/30 rounded-xl border`}>
            <View style={tw`flex-col gap-4`}>
                <View style={tw`flex-row gap-2.5 items-center`}>
                    {iconsLeft && <SvgXml xml={iconsLeft} />}
                    <Text style={tw`text-gray text-text14 font-sfpro-600`}>
                        {title}
                    </Text>
                    {iconsRight && <SvgXml xml={iconsRight} />}
                </View>

                <Text style={tw`text-headingText text-text16 font-sfpro-600`}>
                    {countNumber}
                </Text>
            </View>

            {progressBar && (
                <View style={tw`w-full bg-[${bgColor}] rounded-full overflow-hidden`}>
                    <View
                        style={[
                            tw`rounded-full`,
                            {
                                width: `${progress}%`,
                                backgroundColor: color,
                                height: height,
                            },
                        ]}
                    />
                </View>
            )}
        </View>
    )
}

export default TopCard
