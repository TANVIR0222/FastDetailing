import { IconsTruck } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { JobCategoryProps } from "@/src/lib/type";
import React from "react";
import { Image, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";


const JobCategory: React.FC<JobCategoryProps> = ({
    customerName,
    customerColor,
    vehicleType,
    services = []
}) => {
    return (
        <View style={tw`flex-col ${services.length > 0 ? "gap-3" : ""}`} >
            <View style={tw`flex-row items-center justify-between gap-2`}>
                {/* Customer Info */}
                <View style={tw`flex-row items-center gap-2`}>
                    <Image source={require(`@/assets/images/Rectangle-34624894.png`)} style={tw`w-8 h-8 rounded-md`} />

                    <View style={tw`flex-col gap-0.5`}>
                        <Text style={tw`text-headingText text-text10 font-sfpro-600`}>
                            {customerName}
                        </Text>

                        <View style={tw`flex-row -mt-1.5 items-center gap-0.5`}>
                            <View style={tw`w-2 h-2 bg-[#1F36E7] rounded-full`} />
                            <Text style={tw`text-headingText text-text9 font-sfpro-600`}>
                                {customerColor}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Vehicle Type */}
                <View
                    style={tw`flex-row items-center gap-0.5 bg-[#0087FF1A] px-1  rounded-full`}
                >
                    <SvgXml xml={IconsTruck} />
                    <Text style={tw`text-primaryColor text-text10 font-sfpro-400`}>
                        {vehicleType}
                    </Text>
                </View>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
                {services.map((tag, i) => (
                    <View key={i} style={tw`px-2 py-0.5 rounded-full bg-borderPrimary`}>
                        <Text style={tw`text-text9 text-gray font-sfpro-600`}>{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default JobCategory;
