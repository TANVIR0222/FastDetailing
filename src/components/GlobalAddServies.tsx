import tw from "@/src/lib/tailwind";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { GlobalAddServicesProps } from "../lib/type";


const GlobalAddServices: React.FC<GlobalAddServicesProps> = ({
    title,
    icon,
    buttonText,
    onPress,
    bluebg

}) => {
    return (
        <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={onPress}
                style={tw.style(
                    `flex-row gap-1 items-center px-1.5 py-1 rounded-md`,
                    { backgroundColor: bluebg ? "#0087FF1A" : "#22C55E1A" }
                )}
            >
                <SvgXml xml={icon} />
                <Text style={[tw`text-text12 font-sfpro-600`, { color: bluebg ? "#0087FF" : "#22C55E" }]}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default GlobalAddServices;
