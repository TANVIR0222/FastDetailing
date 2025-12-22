import { IconsActiveShecduled, IconsAdd } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { UpComeingProps } from '@/src/utils/type'
import { router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import GlobalAddServices from '../../GlobalAddServies'
import MainButton from '../../MainButton'
import JobEveryOneCard from './JobEveryOneCard'
import JobServicesCard from './JobServicesCard'
import RescheduleJob from './RescheduleJob'
import ScheduledTopCard from './ScheduledTopCard'



const UpComeing = ({ setNextTabs }: UpComeingProps) => {

    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);



    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => prev === serviceId ? null : serviceId);
    }, []);

    const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);


    return (
        <View style={tw` flex-col justify-between  flex-1 pt-4`} >
            <ScrollView>
                <View style={tw` flex-col gap-4`} >

                    {/*  scheduled top card */}
                    <ScheduledTopCard
                        icon={IconsActiveShecduled}
                        title="Scheduled"
                        subtitle="Job is scheduled and waiting to begin"
                    />
                    {/* alex */}
                    <JobEveryOneCard />

                    {/*  */}
                    <GlobalAddServices onPress={() => router.push('/(job-view)/add-vehicle-new-job')} buttonText="Add Service" title="1 Service" icon={IconsAdd} bluebg={true} />


                    {/*  job services */}
                    <JobServicesCard />


                </View>

            </ScrollView>
            <View style={tw` flex-col gap-4 pt-2`}>
                <MainButton onPress={() => setNextTabs(2)} title='Start Job' bm={true} />

                <View style={tw`flex-row gap-3 justify-start`}>
                    <TouchableOpacity onPress={() => setCalendarVisible(true)} style={tw`flex-1 bg-[#0087ff1A] py-3 rounded-lg items-center`}>
                        <Text style={tw`text-text12 font-sfpro-600 text-primaryColor`}>Reschedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-1 bg-[#e71f2f1A] py-3 rounded-lg items-center`}>
                        <Text style={tw`text-text12 font-sfpro-600 text-[#e71f2f]`}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <RescheduleJob
                    visible={isCalendarVisible}
                    onClose={() => setCalendarVisible(false)}
                />
            </View>

        </View>
    )
}

export default UpComeing