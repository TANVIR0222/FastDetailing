// import GlobalTopBar from '@/src/components/GlobalTopBar';
// import PageWrapper from '@/src/components/PageWrapper';
// import tw from '@/src/lib/tailwind';
// import { router } from 'expo-router';
// import React from 'react';
// import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// const messages = [
//     {
//         title: "Welcome Back",
//         message:
//             "Hi [Name] We miss you at [Business]. Book your next appointment and get 10% off!",
//     },
//     {
//         title: "Appointment Reminder",
//         message:
//             "Hi [Name] Don't forget your appointment tomorrow at [Time]. We can't wait to see you!",
//     },
//     {
//         title: "Special Promotion",
//         message:
//             "Exclusive offer for [Name] Get 20% off your next [Service]. Valid until [Date].",
//     },
//     {
//         title: "Follow Up",
//         message:
//             "Hi [Name] How was your recent visit? We'd love your feedback and to book your next appointment!",
//     },
// ];

// // helper function → placeholder detect করে badge বানাবে
// const renderMessage = (message: string) => {
//     const parts = message.split(/(\[[^\]]+\]!|\[[^\]]+\])/g);

//     return (
//         <View style={tw`flex-row flex-wrap items-center`}>
//             {parts.map((part, index) => {
//                 if (part.match(/\[[^\]]+\]!|\[[^\]]+\]/)) {
//                     const cleanText = part.replace(/\[|\]/g, '');
//                     return (
//                         <View
//                             key={index}
//                             style={tw`border border-primaryColor bg-[#0087FF1A]  rounded px-2 `}
//                         >
//                             <Text style={tw`text-primaryColor font-sfpro-400 text-text10`}>
//                                 {cleanText}
//                             </Text>
//                         </View>
//                     );
//                 }
//                 return (
//                     <Text
//                         key={index}
//                         style={tw`text-text12 leading-4 font-sfpro-400 text-gray`}
//                     >
//                         {part}
//                     </Text>
//                 );
//             })}
//         </View>
//     );
// };

// export default function Index() {
//     return (
//         <PageWrapper>
//             <GlobalTopBar title='Choose Template' />
//             <View style={tw`flex-1`}>
//                 <ScrollView
//                     style={tw`flex-1`}
//                     contentContainerStyle={tw`gap-4`}
//                     showsVerticalScrollIndicator={false}
//                 >
//                     {messages.map((item, index) => (
//                         <TouchableOpacity
//                             key={index}
//                             onPress={() => router.replace('/sms-campaigns')}
//                             style={tw`p-4 rounded-xl border border-[#999a9a4d] gap-2`}
//                         >
//                             <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
//                                 {item.title}
//                             </Text>
//                             <Text style={tw``}>
//                                 {renderMessage(item.message)}
//                             </Text>
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>
//             </View>
//         </PageWrapper>
//     );
// }

import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const messages = [
    {
        title: "Welcome Back",
        message:
            "Hi [Name] We miss you at [Business]. Book your next appointment and get 10% off!",
    },
    {
        title: "Appointment Reminder",
        message:
            "Hi [Name] Don't forget your appointment tomorrow at [Time]. We can't wait to see you!",
    },
    {
        title: "Special Promotion",
        message:
            "Exclusive offer for [Name] Get 20% off your next [Service]. Valid until [Date].",
    },
    {
        title: "Follow Up",
        message:
            "Hi [Name] How was your recent visit? We'd love your feedback and to book your next appointment!",
    },
];

// const renderMessage = (message: string) => {
//     const parts = message.split(/(\[[^\]]+\])/g);

//     return (
//         <View style={tw`flex-row flex-wrap items-center`}>
//             {parts.map((part, index) => {
//                 if (part.match(/\[[^\]]+\]/)) {
//                     const cleanText = part.replace(/\[|\]/g, '');
//                     return (
//                         <View
//                             key={index}
//                             style={tw`border border-primaryColor bg-[#0087FF1A] rounded px-2 `}
//                         >
//                             <Text style={tw`text-primaryColor font-sfpro-400 text-text10`}>
//                                 {cleanText}
//                             </Text>
//                         </View>
//                     );
//                 }
//                 return (
//                     <Text
//                         key={index}
//                         style={tw`text-text12 leading-7 font-sfpro-400 text-gray`}
//                     >
//                         {part}
//                     </Text>
//                 );
//             })}
//         </View>
//     );
// };


const renderMessage = (message: string) => {
    const parts = message.split(/(\[[^\]]+\]!|\[[^\]]+\])/g);

    return (
        <Text style={tw`flex-row flex-wrap`}>
            {parts.map((part, index) => {
                if (part.match(/\[[^\]]+\]!|\[[^\]]+\]/)) {
                    const cleanText = part.replace(/\[|\]/g, '');
                    return (
                        <Text
                            key={index}
                            style={tw`text-primaryColor text-text10 font-sfpro-400 bg-gray-200 border border-black rounded px-1 mx-0.5`}
                        >
                            {cleanText}
                        </Text>
                    );
                }
                return (
                    <Text key={index} style={tw`text-text10 font-sfpro-400 text-gray`}>
                        {part}
                    </Text>
                );
            })}
        </Text>


    );
};




export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar title="Choose Template" />
            <View style={tw`flex-1`}>
                <ScrollView
                    style={tw`flex-1`}
                    contentContainerStyle={tw`gap-4`}
                    showsVerticalScrollIndicator={false}
                >
                    {messages.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => router.replace('/sms-campaigns')}
                            style={tw`p-4 rounded-xl border border-[#999a9a4d] gap-2`}
                        >
                            <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                {item.title}
                            </Text>
                            <View style={tw`flex-row items-center`} >
                                {renderMessage(item.message)}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </PageWrapper>
    );
}
