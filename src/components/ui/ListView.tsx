import { IconMobile, IconsShpo, IconsWatch, IconTimeAndDate } from '@/assets/Icons';
import tw from '@/src/lib/tailwind';
import { ListViewProps, StatusType } from '@/src/lib/type';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';



const StatusBadge = ({ status }: { status: StatusType }) => {
    let bgColor = '';
    switch (status) {
        case 'Completed':
            bgColor = 'bg-bgGreen';
            break;
        case 'Upcoming':
            bgColor = 'bg-[#FFA500]';
            break;
        case 'In Progress':
            bgColor = 'bg-[#523BE4]';
            break;
        case 'In Route':
            bgColor = 'bg-[#0087FF]';
            break;
        case 'Cancelled':
            bgColor = 'bg-[#E71F2F]';
            break;
        default:
            bgColor = 'bg-gray';
    }
    return (
        <Text style={tw`px-2 py-0.5 rounded-full text-text10 font-sfpro-600 text-white ${bgColor}`}>
            {status}
        </Text>
    );
};

const ListView = ({
    name,
    address,
    status,
    shopStatus,
    time,
    customerName,
    customerColor,
    vehicleType,
    services,
    staffName,
    staffImage,
    price,
    icons,
    shopIcons,
    date,
    singleImage,
    statusUndefined
}: ListViewProps) => {

    // console.log(shopStatus);

    return (
        <View style={tw`flex-col gap-4 border border-borderPrimary rounded-xl p-4 justify-between`}>

            {/* Header: Name + Status */}
            <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`flex-col`}>
                    <Text style={tw`text-headingText text-text14 font-sfpro-600`}>{name}</Text>
                    <Text style={tw`text-gray text-text10 font-sfpro-400`}>{address}</Text>
                </View>
                {!statusUndefined && <StatusBadge status={status} />}
            </View>

            {/* Status Info: In Shop + Time */}
            <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center gap-1.5`}>
                    {shopIcons && <SvgXml xml={shopStatus === "Mobile" ? IconMobile : IconsShpo} />}
                    <Text style={tw`text-headingText text-text12 font-sfpro-600`}>{shopStatus}</Text>
                </View>

                <View style={tw`flex-row items-center px-2 py-1 rounded-full gap-0.5 bg-borderPrimary`}>
                    <SvgXml xml={date ? IconTimeAndDate : IconsWatch} width={14} height={14} style={tw``} />
                    <Text style={tw`text-gray text-text10 font-sfpro-500`}>{time}</Text>
                </View>
            </View>

            {/* Customer & Services */}
            <View style={tw`flex-col gap-2.5 p-2.5 bg-borderPrimary rounded-lg`}>
                <View style={tw`flex-row items-center justify-between gap-2`}>
                    {/* Customer Info */}
                    <View style={tw`flex-row  items-center gap-2`}>
                        <View>
                            <Image source={require(`@/assets/images/Rectangle-34624894.png`)} style={tw`w-8 h-8 rounded-md`} />
                        </View>
                        <View style={tw`flex-col gap-0.5 `}>
                            <Text style={tw`text-headingText text-text10 font-sfpro-600`}>{customerName}</Text>
                            <View style={tw`flex-row -mt-1.5 items-center gap-0.5`}>
                                <View style={tw`w-2 h-2 bg-[#1F36E7] rounded-full`} />
                                <Text style={tw`text-headingText text-text9  font-sfpro-600`}>{customerColor}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Vehicle Type */}
                    <View style={tw`flex-row items-center gap-0.5 bg-[#0087FF1A] px-1  rounded-full`}>
                        {icons && <SvgXml xml={icons} />}
                        <Text style={tw` text-primaryColor text-text10 font-sfpro-400`}>{vehicleType}</Text>
                    </View>
                </View>

                {/* Services Tags */}
                <View style={tw`flex-row gap-2 flex-wrap`}>
                    {services.map((service, idx) => (
                        <Text
                            key={idx}
                            style={tw`px-1.5  py-0.5 rounded-full bg-borderPrimary text-gray text-text9 font-sfpro-600`}
                        >
                            {service}
                        </Text>
                    ))}
                </View>
            </View>
            {/* Assigned Staff + Price */}
            <View style={tw`flex-row items-center justify-between gap-3`}>
                <View style={tw`flex-row items-center gap-2`}>
                    <Image
                        source={staffImage}
                        style={tw`${singleImage ? `w-6 h-6` : `w-10 h-10`} rounded-full`}
                    />
                    <Text style={tw`text-gray text-text10 font-sfpro-600 text-center`}>{staffName}</Text>
                </View>
                <Text style={tw`text-text16 font-sfpro-700 text-primaryColor`}>{price}</Text>
            </View>

        </View>
    );
};

export default ListView;
