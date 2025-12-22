import { IconCalendar, IconChat, IconEdit, IconHome, IconManage, IconMarketing, IconPlus, IconReplace, IconShield, IconStats } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const sections = [
    {
        title: 'Admin Access',
        data: [
            { label: 'Enable Administrator Access', des: 'Access to the main dashboard', icon: IconShield, key: 'adminAccess' },
        ],
    },
    {
        title: 'Jobs',
        data: [
            { label: 'View All Jobs', des: 'See all jobs, not just assigned ones', icon: IconHome, key: 'viewJobs' },
            { label: 'Create New Job', des: 'Ability to create new job appointments', icon: IconPlus, key: 'createJob' },
            { label: 'Modify Services in a Job', des: 'Edit services and details within jobs', icon: IconEdit, key: 'modifyJob' },
            { label: 'Cancel/Reschedule Own Jobs', des: 'Modify timing of assigned jobs', icon: IconCalendar, key: 'cancelJob' },
            { label: 'Replace Self with Another Worker', des: 'Reassign own jobs to other employees', icon: IconReplace, key: 'replaceJob' },
            { label: 'Manage All Jobs', des: 'Full control over all job operations', icon: IconManage, key: 'manageJobs' },
        ],
    },
    {
        title: 'Customers',
        data: [
            { label: 'Add New Vehicle', des: 'Register new vehicles for existing customers', icon: IconPlus, key: 'addVehicle' },
            { label: 'Create New Customer', des: 'Register new customers in the system', icon: IconPlus, key: 'createCustomer' },
            { label: 'Edit Customer Details', des: 'Update existing customer info', icon: IconEdit, key: 'editCustomer' },
        ],
    },
    {
        title: 'Chat',
        data: [
            { label: 'Upcoming Jobs', des: 'Chat with customers who are scheduled', icon: IconCalendar, key: 'chatUpcoming' },
            { label: 'All Customers', des: 'Chat with any customer', icon: IconChat, key: 'chatAll' },
        ],
    },
    {
        title: 'Marketing',
        data: [
            { label: 'Access Marketing Features', des: 'Access to marketing tools', icon: IconMarketing, key: 'marketing' },
        ],
    },
    {
        title: 'Stats',
        data: [
            { label: 'Access Stats Features', des: 'View detailed analytics and performance reports', icon: IconStats, key: 'stats' },
        ],
    },
];

export default function AdminSettings() {
    const [switches, setSwitches] = useState<Record<string, boolean>>({});

    const toggleSwitch = (key: string) => {
        setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <PageWrapper>
            <GlobalTopBar title='Employee Permission' />
            <ScrollView contentContainerStyle={tw` pb-20`} showsVerticalScrollIndicator={false}>
                {sections.map((section) => (
                    <View key={section.title} style={tw``}>
                        <Text style={tw`text-text14 font-sfpro-700 pb-4 pt-6 text-headingText`}>{section.title}</Text>
                        <View style={tw` rounded-xl border border-borderPrimary`}>
                            {section.data.map((item, index) => (
                                <View
                                    key={item.key}
                                    style={[
                                        tw`flex-row justify-between items-center px-3 py-3`
                                    ]}
                                >
                                    <View style={tw`flex-row items-center gap-3`}>
                                        <SvgXml xml={item.icon} />
                                        <View style={tw`flex-col gap-1`}>
                                            <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>{item.label}</Text>
                                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>{item.des}</Text>
                                        </View>
                                    </View >

                                    <Switch
                                        trackColor={{ false: '#E5E5E5', true: '#0087FF' }}
                                        thumbColor={switches[item.key] ? '#FFFFFF' : '#FFFFFF'}
                                        onValueChange={() => toggleSwitch(item.key)}
                                        value={!!switches[item.key]}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </PageWrapper>
    );
}
