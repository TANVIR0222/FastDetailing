import tw from "@/src/lib/tailwind";
import { StatusTagProps } from "@/src/lib/type";
import React from "react";
import { Text, View } from "react-native";



const StatusTag: React.FC<StatusTagProps> = ({
    label,
    bgColor,
    textColor,
    dotColor,
}) => {
    return (
        <View
            style={tw.style(
                `flex-row items-center gap-1 px-2 py-0.5 rounded-full`,
                { backgroundColor: bgColor }
            )}
        >
            <View
                style={tw.style(`w-2 h-2 rounded-full`, { backgroundColor: dotColor })}
            />
            <Text
                style={tw.style(`text-text10 font-sfpro-400`, { color: textColor })}
            >
                {label}
            </Text>
        </View>
    );
};

export default StatusTag;