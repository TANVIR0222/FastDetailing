
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import FilterTabBar from '@/src/components/FilterTabBar';
import ListView from '@/src/components/ui/ListView';
import TopCard from '@/src/components/ui/TopCard';
import WeekDays from '@/src/components/ui/WeekDays';

import {
	IconsCard,
	IconsHomeAddICons,
	IconsHomeFilter,
	IconsRevenue
} from '@/assets/Icons';
import PageWrapper from '@/src/components/PageWrapper';
import CalenderView from '@/src/components/ui/CalenderView';
import JobFilterModal from '@/src/components/ui/Home/JobFilter';
import { homeTabs } from '@/src/lib/all-tabs';
import tw from '@/src/lib/tailwind';
import { data } from '@/src/utils/all-dummy-data';
import { router } from 'expo-router';


export default function HomeScreen() {
	const [activeTab, setActiveTab] = useState<string>('List View');
	const [activeFilter, setActiveFilter] = useState<string>('All');
	const [visible, setVisible] = useState<boolean>(false);
	const [selectedPlan, setSelectedPlan] = useState<string>("");


	return (
		<PageWrapper>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={tw`flex-col gap-5 py-4`}>
					{/* Header */}
					<View style={tw`flex-row items-center justify-between`}>
						<View style={tw`flex-col gap-1`}>
							<Text style={tw`text-headingText text-text18 font-sfpro-900`}>
								FastDetailing
							</Text>
							<Text style={tw`text-gray text-text12 font-sfpro-600`}>
								Hello, Michael
							</Text>
						</View>
						<TouchableOpacity onPress={() => router.push('/(select-customer)')}>
							<SvgXml xml={IconsHomeAddICons} />
						</TouchableOpacity>
					</View>

					{/* Stats Cards */}
					<View style={tw`flex-row justify-between gap-4`}>
						<View style={tw`flex-1`}>
							<TopCard
								iconsLeft={IconsCard}
								title="Jobs"
								height={6}
								progress={40}
								color="#0087FF"
								progressBar={true}
								countNumber={323}
								bgColor={'#0087FF1A'}
							/>
						</View>
						<View style={tw`flex-1`}>
							<TopCard
								iconsLeft={IconsRevenue}
								title="Revenue"
								height={6}
								progress={40}
								color="#22C55E"
								progressBar={true}
								bgColor={'#22C55E1A'}
								countNumber={'$1323'}
							/>
						</View>
					</View>

					<View style={tw`flex-row border p-2 border-borderPrimary rounded-xl overflow-hidden`}>
						{homeTabs.map(tab => (
							<TouchableOpacity
								key={tab}
								onPress={() => setActiveTab(tab)}
								style={tw`flex-1 py-2 ${activeTab === tab ? 'bg-primaryColor rounded-md' : 'bg-white'
									}`}
							>
								<Text
									style={tw`text-center ${activeTab === tab
										? 'text-white'
										: 'font-sfpro-700 text-text12 text-primaryColor'
										}`}
								>
									{tab}
								</Text>
							</TouchableOpacity>
						))}
					</View>

					<WeekDays />

					<View style={tw`flex-col gap-2`} >
						<View style={tw`flex-row items-center justify-between`}>
							<Text style={tw`text-headingText text-text14 font-sfpro-700`}>
								Today’s Jobs
							</Text>
							<TouchableOpacity onPress={() => setVisible(!visible)} >
								<SvgXml xml={IconsHomeFilter} />
							</TouchableOpacity>
						</View>

						<FilterTabBar
							initialFilter="All"
							onFilterChange={setActiveFilter}
							filters={['All', 'Upcoming', 'In Progress', 'Completed']}
						/>
					</View>

					{/* Job List or Calendar */}
					{activeTab === 'List View' && (
						<View style={tw`-mt-2`}>
							{data.map(item => (
								<TouchableOpacity onPress={() => router.push('/(job-view)')} key={item.id} style={{ marginBottom: 16 }}>
									<ListView
										name={item.name}
										address={item.address}
										status={item.status}
										shopStatus={item.shopStatus}
										time={item.time}
										customerName={item.customerName}
										customerColor={item.customerColor}
										vehicleType={item.vehicleType}
										services={item.services}
										staffName={item.staffName}
										staffImage={item.staffImage}
										price={item.price}
										icons={item?.icons}
										shopIcons={item?.shopIcons}
									/>
								</TouchableOpacity>
							))}
						</View>
					)}

					{activeTab === 'Calendar View' && <CalenderView />}
				</View>
				<JobFilterModal visible={visible} setVisible={() => setVisible(!visible)} selectedPlan={selectedPlan}
					setSelectedPlan={(value) => setSelectedPlan(value)} />
			</ScrollView>
		</PageWrapper>
	);
}
