import { IconsRadioActive, IconsRadioInActive } from "@/assets/Icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";

interface RadioButtonProps {
    onSelect: (value: string) => void;
    selectedValue?: string;
    title?: string;
    options: string[];
    boxBorder?: boolean; // optional
    textBalack?: boolean
}

const GlobalRadioButtons: React.FC<RadioButtonProps> = ({
    onSelect,
    selectedValue,
    title,
    options,
    boxBorder,
    textBalack
}) => {
    const [selected, setSelected] = useState(selectedValue || "");

    const handleSelect = (value: string) => {
        setSelected(value);
        onSelect(value);
    };



    return (
        <View style={tw`flex-col ${boxBorder === true ? 'pb-2' : 'gap-2.5 pb-4'} `}>
            {title && (
                <Text style={tw`${textBalack ? 'text-headingText' : 'text-gray'} font-sfpro-400 text-text12`}>{title}</Text>
            )}

            <View style={tw`flex-row items-center justify-between flex-wrap `}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option}
                        onPress={() => handleSelect(option)}
                        style={tw.style(
                            "flex-row gap-1 items-center justify-start  w-[30%] rounded-xl", // always center
                            boxBorder ? "py-2" : "px-2.5 py-3.5", // padding only
                            !boxBorder
                                ? selected === option
                                    ? "border border-textBlue"
                                    : "border border-gray/30"
                                : ""
                        )}
                        activeOpacity={0.7}
                    >
                        {/* Radio Icon */}
                        {selected === option ? (
                            <SvgXml xml={IconsRadioActive} />
                        ) : (
                            <SvgXml xml={IconsRadioInActive} />
                        )}

                        {/* Label */}
                        <Text
                            style={tw.style(
                                "text-text10 font-sfpro-400",
                                boxBorder
                                    ? selected === option
                                        ? "text-primaryColor"
                                        : "text-gray"
                                    : selected === option
                                        ? "text-gray"
                                        : "text-gray"
                            )}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


        </View>
    );
};

export default GlobalRadioButtons;

