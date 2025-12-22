import { IconsAdd, IconsCheck, IconsNotCheck, IconsReset, IconsWatch } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import AddExtraServices from '@/src/components/ui/Home/AddExtraServices'
import Services from '@/src/components/ui/Home/Services'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { ServiceItem } from '../(select-plan)/choose-service'

export default function ConfigureService() {
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [isModalView, setIsModalView] = useState<boolean>(false);

    // Sample service data (replace with actual data source)
    const services: ServiceItem[] = Array.from({ length: 3 }, (_, index) => ({
        id: `service-${index}`,
        name: 'Vacuum interior',
        duration: '1h 15min',
        price: 20.00,
    }));

    // Memoized callback for handling selection
    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => prev === serviceId ? null : serviceId);
    }, []);

    const isLoading = false
    const handleBusinessSubmit = () => {

    }


    return (
        <PageWrapper>

            <GlobalTopBar icon={true} title="Configure Service" deleteICons={true} />

            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 flex-col gap-4`} >
                    <Services />

                    {/* worker  */}
                    <GlobalAddServices buttonText="Add Worker" title="Services" onPress={() => router.push('/select-worker')} icon={IconsAdd} bluebg={true} />
                    {/* emp */}
                    <View style={tw` bg-borderPrimary text-text12 font-sfpro-400  items-center py-3  rounded-xl   flex-1 w-full `}>
                        <Text style={tw` text-gray text-text12 font-sfpro-400 self-center  `} >No workers have been assigned yet</Text>
                    </View>
                    {/* add extra */}
                    <GlobalAddServices buttonText="Add Extra" title="Extras" onPress={() => setIsModalView(!isModalView)} icon={IconsAdd} bluebg={true} />

                    <View style={tw`flex-1 flex-col gap-4`} >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={tw`gap-3 pb-4`}
                        >
                            {services.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => { handleSelect(item.id) }}
                                >
                                    <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <View style={tw`flex-col gap-1.5`}>
                                                <Text style={tw`text-headingText text-text14 font-sfpro-600`}>
                                                    {item.name}
                                                </Text>
                                                <View style={tw`bg-borderPrimary flex-row items-center justify-center gap-1 w-[70%] px-1 py-0.5 rounded-full`}>
                                                    <SvgXml xml={IconsWatch} />
                                                    <Text style={tw`text-gray text-text9 font-sfpro-400`}>
                                                        {item.duration}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={tw`flex-col gap-1.5 items-end`}>
                                            <SvgXml xml={selectedServiceId === item.id ? IconsCheck : IconsNotCheck} />
                                            <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
                                                ${item.price.toFixed(2)}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={tw`flex-col bg-white  rounded-2xl gap-4`}>
                        {/* Row 1: Two Inputs */}
                        <Text style={tw`text-headingText text-text14  font-sfpro-700`}>
                            Modifications
                        </Text>
                        <View style={tw`flex-row gap-4`}>
                            {/* First Input (with badge + reset) */}
                            <View style={tw`flex-1`}>
                                <View style={tw`flex-row items-center gap-2 mb-2`}>
                                    <Text style={tw`text-text12 text-gray font-sfpro-400`}>
                                        Service Price
                                    </Text>
                                    <Text style={tw`text-xs text-bgGreen font-sfpro-400 px-2 py-0.5 rounded-full bg-[#22C55E1A]`}>
                                        +$14.00
                                    </Text>
                                </View>

                                <View style={tw`h-12 px-4 flex-row items-center justify-between rounded-xl border border-gray/30`}>
                                    <Text style={tw`text-text12 text-gray`}>
                                        $500.00
                                    </Text>
                                    <SvgXml xml={IconsReset} />
                                </View>
                            </View>

                            {/* Second Input (plain input) */}
                            <View style={tw`flex-1`}>
                                <Text style={tw`text-text12 text-gray font-sfpro-400 mb-2`}>
                                    Extras Price
                                </Text>
                                <TextInput
                                    placeholder="$20.00"
                                    keyboardType="numeric"
                                    style={tw`h-12 px-4 rounded-xl border border-gray/30`}
                                />
                            </View>
                        </View>

                        {/* Row 2: Total */}
                        <View>
                            <Text style={tw`text-text12 text-gray font-sfpro-400 mb-2`}>
                                Total
                            </Text>
                            <TextInput
                                keyboardType="numeric"
                                style={tw`h-12 px-4 rounded-xl border border-gray/30`}
                            />
                        </View>

                        {/* Button */}
                        <View>
                            <MainButton
                                title={isLoading ? "Loading..." : "Done"}
                                onPress={handleBusinessSubmit}
                                disabled={isLoading}
                                bm
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>
            <AddExtraServices onClose={() => setIsModalView(!isModalView)} visible={isModalView} />
        </PageWrapper>
    )
}