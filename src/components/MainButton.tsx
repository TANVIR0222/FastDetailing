import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import tw from "../lib/tailwind";

interface MainButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    showSignUpLink?: boolean;
    onSignUpPress?: () => void;
    signUpText?: string;
    signUpPrompt?: string;
    bm?: boolean
}

const MainButton: React.FC<MainButtonProps> = ({
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled = false,
    showSignUpLink = false,
    onSignUpPress,
    signUpText,
    signUpPrompt,
    bm,
    ...props

}) => {
    return (
        <View style={tw`flex-col  gap-5 ${bm ? "pb-2" : 'pb-2'} `}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    tw`bg-primaryColor p-4 rounded-xl`,
                    disabled && tw`bg-primaryColor/50`,
                    buttonStyle,
                ]}
                disabled={disabled}
                {...props}
            >
                <Text style={[tw`text-textWhite text-text14 text-center font-sfpro-700`, textStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>

            {showSignUpLink && (
                <View style={tw`flex-row items-center justify-center`}>
                    <Text style={tw`text-gray text-text14`} >{signUpPrompt} </Text>
                    <TouchableOpacity onPress={onSignUpPress}>
                        <Text style={[tw`text-primaryColor text-text14 font-sfpro-700`, textStyle]}>
                            {signUpText}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default MainButton;