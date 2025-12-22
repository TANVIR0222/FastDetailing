import React from "react";
import {
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    View
} from "react-native";
import tw from "../lib/tailwind";

interface InputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    error?: string;
    touched?: boolean;
    keyboardType?: TextInputProps["keyboardType"];
    star?: boolean

}

const GlobalMainInput: React.FC<InputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    onBlur,
    error,
    touched,
    keyboardType = "default",
    star
}) => {
    return (
        <View style={tw`gap-2.5 pb-4`}>
            {/* Label */}
            <Text style={tw`text-gray font-sfpro-400 text-sm `}>{label} {star && <Text style={tw`text-gray`}>*</Text>}</Text>

            {/* Input */}
            <TextInput
                style={tw.style(
                    `h-12 items-center justify-center   px-4 rounded-xl border `,
                    touched && error
                        ? "border-red-500"
                        : "border-border border"
                )}
                placeholder={placeholder}
                placeholderTextColor="#999A9A"
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}



            />

            {/* Error */}
            {/* {touched && error && (
                <Text style={tw`text-red-500 text-xs mt-1`}>{error}</Text>
            )} */}
        </View>
    );
};

export default GlobalMainInput;
