import tw from '@/src/lib/tailwind';
import React from 'react';
import { View } from 'react-native';
import { ProgressProps } from '../lib/type';

const ProgressBar = ({ progress, color = '#0087FF', height }: ProgressProps) => {
    return (
        <View style={tw` w-full bg-[#0087FF1A] rounded-full overflow-hidden`}>
            <View
                style={[
                    tw`h-full rounded-full`,
                    {
                        width: `${progress}%`,
                        backgroundColor: color,
                        height: height
                    },
                ]}
            />
        </View>
    );
};

export default ProgressBar;
