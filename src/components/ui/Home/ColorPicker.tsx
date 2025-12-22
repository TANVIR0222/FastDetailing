import tw from '@/src/lib/tailwind';
import { bothPlatform } from '@/src/utils/utils';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import ColorPicker, { HueSlider, Swatches } from 'reanimated-color-picker';

const ColorPickerComponent = ({ showModal, setShowModal }: any) => {

    // Note: use `onCompleteJS` and `onChangeJS` for non-worklet functions
    const onSelectColor = ({ hex }: any) => {
        'worklet';
        // do something with the selected color.
        // console.log('------>>>>------', hex);
    };


    return (
        <View style={{
            flex: 1,
        }}>
            <Text style={tw`text-gray text-sm pb-2.5`}>Color</Text>

            <ColorPicker style={{ width: '100%' }} value='red' onComplete={onSelectColor}>
                <View style={tw`flex-row items-start justify-between border border-gray/30 pt-3 ${bothPlatform === 'ios' ? 'pr-2' : 'pr-3'} rounded-xl `}>
                    <Swatches />
                    <TouchableOpacity onPress={() => setShowModal(!showModal)} style={tw`shadow-2xl`} >
                        <Image source={require('@/assets/images/Group 1707478480.png')} style={tw`${bothPlatform === 'ios' ? 'h-7 w-7' : ' h-6.5 w-6.5 '} shadow-2xl shadow-red-400`} />
                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20
                }} >
                    {showModal && <HueSlider style={{
                        width: bothPlatform === 'ios' ? '100%' : 350,
                        justifyContent: 'center',

                    }} />}
                </View>
            </ColorPicker>
            {/* <ExtraThumb /> */}

        </View>
    );
}

export default ColorPickerComponent;
