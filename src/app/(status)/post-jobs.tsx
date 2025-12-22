import { IconsShpo, IconsTruck } from '@/assets/Icons';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import ListView from '@/src/components/ui/ListView';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function PostJobs() {
    const [search, setSearch] = useState("");

    return (
        <PageWrapper>
            <GlobalTopBar title='Past Jobs' icon={true} />
            <View style={tw` flex-1`}  >
                <GlobalSearch
                    placeholder="Search Job"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />
                <View style={tw` flex-1 py-5`}  >
                    <ScrollView contentContainerStyle={tw`  flex-col gap-4`} >
                        <ListView
                            name="Interior & Exterior Wash"
                            address="Network US abd City Street 123"
                            status="Completed"
                            shopStatus="In Shop"
                            time="Jan 15, 2025"
                            date={true}
                            customerName="2025 Tesla Model 3"
                            customerColor="Blue"
                            vehicleType="Truck"
                            services={["Cleaning", "Washing", "Sweeping", "4+"]}
                            staffName="Kevin Peterson"
                            staffImage={require("@/assets/images/image.png")}
                            price="$150.00"
                            icons={IconsTruck}
                            shopIcons={IconsShpo}
                            singleImage={true}
                        />
                        <ListView
                            name="Interior & Exterior Wash"
                            address="Network US abd City Street 123"
                            status="Cancelled"
                            shopStatus="In Shop"
                            time="Jan 15, 2025"
                            date={true}
                            customerName="2025 Tesla Model 3"
                            customerColor="Blue"
                            vehicleType="Truck"
                            services={["Cleaning", "Washing", "Sweeping", "4+"]}
                            staffName="Kevin Peterson"
                            staffImage={require("@/assets/images/image.png")}
                            price="$150.00"
                            icons={IconsTruck}
                            shopIcons={IconsShpo}
                            singleImage={true}
                        />
                    </ScrollView>
                </View>
            </View>
        </PageWrapper>
    )
}
