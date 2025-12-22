import { IconDownArroGray } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

interface CustomPickerProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

const CustomPicker: React.FC<CustomPickerProps> = ({ value, onChange, options }) => {
    const [showPicker, setShowPicker] = useState(false);

    // iOS Picker with Modal
    if (Platform.OS === "ios") {
        return (
            <View style={tw`rounded-xl h-12 justify-center`}>
                <View  >
                    {/* Button to open picker */}
                    <TouchableOpacity
                        onPress={() => setShowPicker(true)}
                        style={tw`flex-row items-center justify-between h-12 px-4 rounded-xl border border-border `}
                    >
                        <Text style={tw`text-gray text-text14 font-sfpro-400`} >{value || "Select"}</Text>
                        <SvgXml xml={IconDownArroGray} />
                    </TouchableOpacity>


                    <Modal visible={showPicker} transparent animationType="slide">
                        <View style={tw`flex-1 justify-end bg-black/30`}>
                            <View style={tw`bg-white p-4 rounded-t-xl`}>
                                {/* Done Button */}
                                <TouchableOpacity
                                    onPress={() => setShowPicker(false)}
                                    style={tw`self-end mb-2`}
                                >
                                    <Text style={tw`text-primaryColor text-text16 font-sfpro-700`}>Done</Text>
                                </TouchableOpacity>

                                {/* Picker */}
                                <View style={tw`rounded-xl `}>
                                    <Picker
                                        selectedValue={value}
                                        onValueChange={onChange}
                                        style={tw`w-full text-gray`}
                                        dropdownIconColor="#999A9A"
                                    >
                                        {options.map((opt) => (
                                            <Picker.Item key={opt} label={opt} value={opt} />
                                        ))}
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }

    // Android Picker (inline)
    return (
        <View style={tw`rounded-xl h-12 border border-border justify-center`}>
            <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={tw`w-full py-12 text-gray `}
                dropdownIconColor="#999A9A"
            >
                {options.map((opt) => (
                    <Picker.Item key={opt} label={opt} value={opt} />
                ))}
            </Picker>
        </View>
    );
};

export default CustomPicker;
