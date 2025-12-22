import { IconsRoundedBlueTick, IconsRoundedTick } from '@/assets/Icons';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MainButton from '../MainButton';


interface ChangePayment {
    ch?: boolean
}

const SubscriptionPlans: React.FC<ChangePayment> = ({ ch }) => {

    console.log(ch);

    const [selectedPlan, setSelectedPlan] = useState(''); // 'starter' or 'essentials'
    const handleCardPlan = () => {
        router.push('/(select-plan)/enter-your-card')
    }

    return (
        <View style={tw`flex-1  flex-col justify-between  gap-5`}>
            <View style={tw` flex-1 flex-col gap-5`}>
                {/* Starter Plan */}
                <TouchableOpacity onPress={() => { setSelectedPlan('starter'); ch && router.push('/account-info/change_billing_frequency') }} activeOpacity={0.8}>
                    <View
                        style={tw`rounded-xl overflow-hidden ${selectedPlan === 'starter' ? 'border-gray border-[2px]' : ''
                            }`}
                    >
                        <ImageBackground
                            source={require('@/assets/images/Active Plan.png')}
                            style={tw`w-full rounded-xl h-52`}
                            resizeMode="cover"
                        >
                            <View style={tw`p-4 flex-col gap-4`}>
                                {/* Header */}
                                <View style={tw`flex-row items-start justify-between`}>
                                    <View style={tw`flex-col gap-1`}>
                                        <Text style={tw`text-white text-text18 font-sfpro-700`}>Starter Plan</Text>
                                        <Text style={tw`text-white/80 text-text12 font-sfpro-400 `}>Seamless client experience</Text>
                                    </View>
                                    <View style={tw`flex-row items-end gap-0.5`}>
                                        <Text style={tw`text-white text-2xl font-sfpro-700`}>$19</Text>
                                        <Text style={tw`text-white text-text12 font-sfpro-600`}>/Monthly</Text>
                                    </View>
                                </View>

                                {/* Features */}
                                <View style={tw`flex-col gap-2`}>
                                    <Text style={tw`text-white text-text14 font-sfpro-700`}>Features</Text>
                                    <View style={tw`flex-col gap-2.5`}>
                                        <View style={tw`flex-row gap-1 items-center`}>
                                            <SvgXml xml={IconsRoundedTick} width={14} height={14} />
                                            <Text style={tw`text-white text-text12 font-sfpro-400`}>Unlimited Job Posts</Text>
                                        </View>
                                        <View style={tw`flex-row gap-1 items-center`}>
                                            <SvgXml xml={IconsRoundedTick} width={14} height={14} />
                                            <Text style={tw`text-white text-text12 font-sfpro-400`}>Unlimited Applicants</Text>
                                        </View>
                                        <View style={tw`flex-row gap-1 items-center`}>
                                            <SvgXml xml={IconsRoundedTick} width={14} height={14} />
                                            <Text style={tw`text-white text-text12 font-sfpro-400`}>Priority Support</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/* Essentials Plan */}
                <TouchableOpacity onPress={() => { setSelectedPlan('essentials'); ch && router.push('/account-info/change_billing_frequency') }} activeOpacity={0.8}>
                    <View
                        style={tw`rounded-xl overflow-hidden border ${selectedPlan === 'essentials' ? 'border-gray/30' : 'border-gray/30'
                            }`}
                    >
                        <View style={tw`p-4 flex-col bg-bgWhite gap-4`}>
                            {/* Header */}
                            <View style={tw`flex-row items-start justify-between`}>
                                <View style={tw`flex-col gap-1`}>
                                    <Text style={tw`text-headingText text-text18 font-sfpro-700`}>Essentials Plan</Text>
                                    <Text style={tw`text-gray text-text12 font-sfpro-400`}>Seamless client experience</Text>
                                </View>
                                <View style={tw`flex-row items-end gap-0.5`}>
                                    <Text style={tw`text-headingText text-2xl font-sfpro-700`}>$49</Text>
                                    <Text style={tw`text-headingText text-text12 font-sfpro-600`}>/Monthly</Text>
                                </View>
                            </View>

                            {/* Features */}
                            <View style={tw`flex-col gap-2`}>
                                <Text style={tw`text-headingText text-text14 font-sfpro-700`}>Features</Text>
                                <View style={tw`flex-col gap-2.5`}>
                                    <View style={tw`flex-row gap-1 items-center`}>
                                        <SvgXml xml={IconsRoundedBlueTick} width={14} height={14} />
                                        <Text style={tw`text-gray text-text12 font-sfpro-400`}>Unlimited Job Posts</Text>
                                    </View>
                                    <View style={tw`flex-row gap-1 items-center`}>
                                        <SvgXml xml={IconsRoundedBlueTick} width={14} height={14} />
                                        <Text style={tw`text-gray text-text12 font-sfpro-400`}>Unlimited Applicants</Text>
                                    </View>
                                    <View style={tw`flex-row gap-1 items-center`}>
                                        <SvgXml xml={IconsRoundedBlueTick} width={14} height={14} />
                                        <Text style={tw`text-gray text-text12 font-sfpro-400`}>Priority Support</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Next Button */}
            <View style={tw` flex-col gap-5`}>
                <MainButton title="Next" bm={true} onPress={() => !ch && router.push('/(select-plan)/enter-your-card')} />
            </View>
        </View>
    );
};

export default SubscriptionPlans;
