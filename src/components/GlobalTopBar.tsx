import { Icon3Dot, IconCall, IconsAddTop, IconsBack, IconsServicesDeleted } from '@/assets/Icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

interface AuthHeadingProps {
    icon?: boolean; // SVG XML string
    onBack?: () => void;
    title?: string;
    subtitle?: string;
    titleStyle?: string; // Tailwind class string
    subtitleStyle?: string; // Tailwind class string
    containerStyle?: string; // Tailwind class string
    gap?: string; // Tailwind spacing class
    route?: () => void
    addIiocns?: boolean
    deleteICons?: boolean
    threeDot?: boolean
    id?: string | number
    call?: boolean
}

const GlobalTopBar: React.FC<AuthHeadingProps> = ({
    icon = IconsBack,
    onBack = () => router.back(),
    title = '',
    subtitle = '',
    titleStyle = 'text-text16 font-sfpro-500 text-[#000]',
    subtitleStyle = 'text-text14 text-primaryColor font-sfpro-400 ',
    containerStyle = 'pb-3.5  flex-row items-center justify-between',
    gap = 'gap-2.5',
    route,
    addIiocns,
    deleteICons,
    threeDot,
    id,
    call
}) => {
    const showDeleteAlert = () => {
        Alert.alert(
            'Delete Confirmation',         // Title
            `Are you sure you want to delete`, // Message
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => console.log('Delete cancelled'),
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    // onPress: onDelete,         // Call the delete function
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={tw` flex-row items-center`}>
            {/* Back Button */}
            {icon && (
                <TouchableOpacity
                    style={tw`${subtitle || addIiocns || deleteICons || threeDot || call ? 'w-[15%]' : 'w-[50%]'} py-[15px]`}
                    onPress={onBack}
                >
                    <SvgXml xml={IconsBack} />
                </TouchableOpacity>
            )}

            {/* Title */}
            <View style={tw`absolute left-0 right-0 items-center`}>
                {title ? <Text style={tw`${titleStyle}`}>{title}</Text> : null}
            </View>

            {/* Right Side Icons */}
            <View style={tw`flex-1 flex-row items-center justify-end`}>
                {subtitle ? (
                    <TouchableOpacity onPress={route}>
                        <Text style={tw`${subtitleStyle}`}>{subtitle}</Text>
                    </TouchableOpacity>
                ) : null}
                {addIiocns ? (
                    <TouchableOpacity onPress={route}>
                        <SvgXml xml={IconsAddTop} />
                    </TouchableOpacity>
                ) : null}
                {deleteICons ? (
                    <TouchableOpacity onPress={showDeleteAlert}>
                        <SvgXml xml={IconsServicesDeleted} />
                    </TouchableOpacity>
                ) : null}
                {threeDot ? (
                    <TouchableOpacity onPress={showDeleteAlert}>
                        <SvgXml xml={Icon3Dot} />
                    </TouchableOpacity>
                ) : null}
                {call ? (
                    <TouchableOpacity onPress={showDeleteAlert}>
                        <SvgXml xml={IconCall} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
};

export default GlobalTopBar;
