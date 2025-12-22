import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { Keyboard, Modal, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import GlobalButtonSheetClose from '../../GlobalButtonSheetClose'
import MainButton from '../../MainButton'

type ServicesModalProps = {
    visible: boolean
    setVisible: (val: boolean) => void

}

const TipConfigurationModal: React.FC<ServicesModalProps> = ({
    visible,
    setVisible,
}) => {
    // useState for toggle
    const [isLoading, setIsLoading] = useState(false)

    const handleBusinessSubmit = (values: any) => {
        console.log("Submitted:", values)
        // API call / Redux action here
        setVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            {/* Background overlay */}
            <Pressable
                onPress={() => setVisible(false)}
                style={tw`flex-1 bg-black/30`}
            />

            {/* Modal Content */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={tw.style(
                        "absolute bottom-0 w-full rounded-t-3xl bg-bgWhite p-4",

                    )}
                >
                    <View style={tw`flex-col w-full`}>
                        <GlobalButtonSheetClose title='Tip Percentage' onClose={() => setVisible(false)} />
                        {/* Input Field */}
                        <View style={tw`flex-col gap-4`}>
                            <View style={tw`w-full flex-col gap-2.5`}>
                                <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                    Set Percentage
                                </Text>

                                <View style={tw`flex-row items-center rounded-xl border border-[#999a9a4d]`}>
                                    <TextInput
                                        style={tw`flex-1 h-12 text-text12 font-sfpro-400 text-headingText px-2`}
                                        placeholder="15%"
                                        placeholderTextColor="#999a9a"
                                        keyboardType="numeric"
                                    // value={percentage}
                                    // onChangeText={setPercentage}
                                    />
                                </View>
                            </View>
                            {/* Submit */}
                            <View style={tw`w-full`}>
                                <MainButton
                                    title="Save"

                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default TipConfigurationModal;
