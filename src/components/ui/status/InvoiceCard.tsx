import tw from "@/src/lib/tailwind";
import { InfoCardProps } from "@/src/lib/type";
import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";


const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value }) => {
    return (
        <View
            style={tw`border border-borderPrimary w-[47%] py-3 px-2.5 rounded-xl flex-row gap-2 items-center`}
        >
            <SvgXml xml={icon} />
            <View>
                <Text style={tw`text-text12 font-sfpro-600 text-black`}>{title}</Text>
                <Text style={tw`text-text10 text-gray font-sfpro-400`}>{value}</Text>
            </View>
        </View>
    );
};

export default InfoCard;
