import { IconLink, IconQRCode } from "@/assets/Icons";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import PageWrapper from "@/src/components/PageWrapper";
import QrCodeModal from "@/src/components/ui/marketing/QrCodeModal";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";


const qrData = [
    {
        title: "Landing Page QR",
        url: "urlgoeastopage.com/i...",
        scans: "23 Scans",
        icon: IconQRCode,
        linkIcon: IconLink,
    },
    {
        title: "Landing Page QR",
        url: "urlgoeastopage.com/i...",
        scans: "23 Scans",
        icon: IconQRCode,
        linkIcon: IconLink,
    },
    {
        title: "Landing Page QR",
        url: "urlgoeastopage.com/i...",
        scans: "23 Scans",
        icon: IconQRCode,
        linkIcon: IconLink,
    },
];

const scanHistoryData = [
    { title: "Scan From Flyer", subtitle: "2 days ago " },
    { title: "Scan From Flyer", subtitle: "5 hours ago " },
    { title: "Scan From Flyer", subtitle: "2 days ago " },
];

export default function QRAnalytics() {
    const [showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false)


    return (
        <PageWrapper >
            <GlobalTopBar title="QR Codes" addIiocns={true} route={() => setModalVisible(true)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`gap-5 pb-10`}>
                {/* QR Code Analytics */}
                <View style={tw`gap-4`}>
                    <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                        QR Code Analytics
                    </Text>

                    {qrData.map((item, index) => (
                        <TouchableOpacity key={index} style={tw`flex-row items-center gap-2 p-4 bg-white border border-gray/30 rounded-xl`}>
                            <TouchableOpacity onPress={() => router.push('/landing_page_qr_modal')} >
                                <SvgXml xml={item?.icon} />
                            </TouchableOpacity>
                            <View style={tw`flex-1 gap-1`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    {item.title}
                                </Text>
                                <View style={tw`flex-row items-center gap-1 bg-[#0087FF12] w-[80%] px-2 py-1 rounded-xl`}>
                                    <SvgXml xml={item?.linkIcon} />
                                    <Text style={tw`text-text10 font-sfpro-500 text-primaryColor`}>
                                        {item.url}
                                    </Text>
                                </View>
                            </View>
                            <View style={tw`bg-[#22C55E1A] px-3 py-1 rounded-xl justify-center`}>
                                <Text style={tw`text-text10 font-sfpro-600 text-bgGreen`}>
                                    {item.scans}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Scan History */}
                <View style={tw`gap-4`}>
                    <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>Scan History</Text>

                    {scanHistoryData.map((item, index) => (
                        <TouchableOpacity key={index} style={tw`p-4 bg-white border border-gray/30 rounded-xl`}>
                            <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                                {item.title}
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-primaryColor mt-1`}>
                                {item.subtitle}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <QrCodeModal visible={modalVisible}
                setVisible={setModalVisible}
            />

        </PageWrapper>
    );
}
