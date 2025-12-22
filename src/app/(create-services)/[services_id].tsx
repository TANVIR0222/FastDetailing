import { IconsAdd, IconsGallary, IconsQQ, IconsRightArrow } from '@/assets/Icons';
import GlobalAddServices from '@/src/components/GlobalAddServies';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalRadioButtons from '@/src/components/GlobalRadioButtons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ServicesModal from '@/src/components/ui/modal/ServicesModal';
import SwipeableItem from '@/src/components/ui/SwipeableItem';
import tw from '@/src/lib/tailwind';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface Service {
    id: string;
    name: string;
    duration: string;
    price: number;
}

export default function AddMoreServices() {
    const router = useRouter();



    const [serviceName, setServiceName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [servicesStart, setServicesStart] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [images, setImages] = useState<string[]>([]);

    // ------------ image picker ---------------
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImages([result.assets[0].uri]);
        }
    };




    const [services, setServices] = useState<Service[]>(
        Array.from({ length: 11 }, (_, index) => ({
            id: `service-${index}`,
            name: 'Pressure Wash',
            duration: '1h 15min',
            price: 556.0,
        }))
    );

    const handleDelete = (id: string) => {
        setServices((prev) => prev.filter((service) => service.id !== id));
    };

    const [selectedPlan, setSelectedPlan] = useState("");


    return (
        <PageWrapper>
            <View style={tw`flex-1`}>
                <GlobalTopBar title="Service" deleteICons={true} />

                <FlatList
                    data={services}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <SwipeableItem item={item} onDelete={handleDelete} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={tw`flex-col gap-4 `}
                    ListHeaderComponent={
                        <View style={tw`flex-col gap-4`}>
                            {/* Gallery Row */}
                            <View style={tw`flex-row gap-5 `}>
                                <TouchableOpacity onPress={pickImage} >
                                    {images.length === 0 ? <SvgXml xml={IconsGallary} /> : <Image source={{ uri: images[0] }} style={tw`w-12 rounded h-12`} />}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push('/(create-services)')} style={tw`flex-row flex-1 justify-between p-2.5 rounded-xl border-border border`}>
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <SvgXml xml={IconsQQ} />
                                        <Text style={tw`text-gray text-text12 font-sfpro-400`}>Select Category</Text>
                                    </View>
                                    <SvgXml xml={IconsRightArrow} />
                                </TouchableOpacity>
                            </View>

                            {/* Inputs */}
                            <View style={tw`flex-col `}>
                                <View style={tw``}>

                                    <GlobalMainInput
                                        label="Service  Name"
                                        value={serviceName}
                                        onChangeText={setServiceName}
                                        keyboardType="default"
                                    />
                                </View>

                                <GlobalRadioButtons
                                    selectedValue={selectedPlan}
                                    onSelect={(value) => setSelectedPlan(value)}
                                    title='Offering'
                                    options={["Only In Shop", "Only Mobile", "Both"]}
                                />


                                <View style={tw``}>
                                    <Text style={tw`text-gray text-sm pb-2 `}>Description</Text>
                                    <TextInput
                                        style={tw`border-border border h-32 rounded-md px-3 py-2`}
                                        value={username}
                                        onChangeText={setUsername}
                                        multiline
                                        textAlignVertical="top"
                                        placeholderTextColor={'#999A9A'}
                                    />
                                </View>
                            </View>

                            <View style={tw`flex-row items-center gap-5 `}>
                                <View style={tw`flex-1`}>
                                    <GlobalMainInput
                                        label="Duration"
                                        value={duration}
                                        onChangeText={setDuration}
                                        keyboardType="number-pad"
                                        placeholder="00 00"
                                    />
                                </View>
                                <View style={tw`flex-1`}>
                                    <GlobalMainInput
                                        label="Price"
                                        value={price}
                                        onChangeText={setPrice}
                                        keyboardType="number-pad"
                                        placeholder="$5.00"
                                    />
                                </View>
                            </View>

                            {/* Switch */}
                            <View style={tw`flex-row items-center justify-between p-2.5 rounded-xl border-border border `}>
                                <Text style={tw`text-gray text-text12 font-sfpro-400`}>Service Enabled</Text>
                                <Switch
                                    value={servicesStart}
                                    onValueChange={setServicesStart}
                                    trackColor={{ false: '#ccc', true: '#0087FF' }}
                                    thumbColor="white"
                                />
                            </View>

                            <GlobalAddServices buttonText="Add Extra" title="Extras" onPress={() => setModalVisible(true)} icon={IconsAdd} bluebg={true} />
                        </View>
                    }

                />



                <View style={tw`pt-2 flex-col gap-2`}>

                    <MainButton title="Save" onPress={() => router.push('/(tabs)')} bm={true} />
                </View>

                <ServicesModal
                    visible={modalVisible}
                    setVisible={setModalVisible}
                    isExtraService={true}

                />
            </View>
        </PageWrapper>
    );
}
