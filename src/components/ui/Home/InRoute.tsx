import { IconsActiveInRoute } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { UpComeingProps } from '@/src/utils/type'
import React from 'react'
import { ScrollView, View } from 'react-native'
import MainButton from '../../MainButton'
import JobEveryOneCard from './JobEveryOneCard'
import JobServicesCard from './JobServicesCard'
import ScheduledTopCard from './ScheduledTopCard'

const InRoute = ({ setNextTabs }: UpComeingProps) => {

    return (
        <View style={tw` flex-col justify-between  flex-1 pt-4`} >
            <ScrollView>
                <View style={tw` flex-col gap-4`} >
                    {/* in route top card */}
                    <ScheduledTopCard
                        icon={IconsActiveInRoute}
                        title="In Route"
                        subtitle="Employee is traveling to location"
                    />
                    {/* every week */}
                    <JobEveryOneCard />
                    {/*  */}
                    {/*  job services */}
                    <JobServicesCard />
                </View>

            </ScrollView>
            <View style={tw` flex-col pt-2`}>
                <MainButton onPress={() => setNextTabs(3)} title='Arrived' bm={true} />
            </View>

        </View>
    )
}

export default InRoute