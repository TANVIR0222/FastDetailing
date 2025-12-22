import { IconsBack } from '@/assets/Icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

interface AuthHeadingProps {
    icon: boolean; // SVG XML string
    onBack?: () => void;
    title?: string;
    subtitle?: string;
    titleStyle?: string; // Tailwind class string
    subtitleStyle?: string; // Tailwind class string
    containerStyle?: string; // Tailwind class string
    gap?: string; // Tailwind spacing class
}

const AuthHeading: React.FC<AuthHeadingProps> = ({
    icon,
    onBack = () => router.back(),
    title = '',
    subtitle = '',
    titleStyle = 'text-authMainheading font-sfpro-700 text-primaryColor',
    subtitleStyle = 'text-text12 font-sfpro-400 text-gray',
    containerStyle = 'pb-3.5',
    gap = 'gap-2.5',
}) => {
    return (
        <View style={tw`${containerStyle}`}>
            {icon && (
                <TouchableOpacity style={tw`py-[15px]`} onPress={onBack}>
                    <SvgXml xml={IconsBack} />
                </TouchableOpacity>
            )}

            <View style={tw`flex-col ${gap}`}>
                {title ? <Text style={tw`${titleStyle}`}>{title}</Text> : null}
                {subtitle ? <Text style={tw`${subtitleStyle}`}>{subtitle}</Text> : null}
            </View>
        </View>
    );
};

export default AuthHeading;
