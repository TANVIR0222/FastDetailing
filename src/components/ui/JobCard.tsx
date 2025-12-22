// import { Image, Text, View } from 'react-native';
// import tw from 'twrnc';

// // JobCard.tsx
// import React from 'react';

// const JobCard = ({ job, top, left, height, width }) => {
// 	const STATUS_CFG = {
// 		confirmed: { bg: '#10B981', icon: '✓' },
// 		pending: { bg: '#F59E0B', icon: '⏰' },
// 		mobile: { bg: '#8B5CF6', icon: 'M' },
// 		'in-shop': { bg: '#F97316', icon: '🏪' },
// 		truck: { bg: '#3B82F6', icon: '🚛' },
// 	};
// 	const cfg = STATUS_CFG[job.status];
// 	return (
// 		<View
// 			style={[
// 				tw`absolute bg-white rounded-2xl shadow p-3 border border-gray-200`,
// 				{ top, left, height, width },
// 			]}
// 		>
// 			<View
// 				style={[
// 					tw`absolute items-center justify-center w-5 h-5 rounded-full`,
// 					{ backgroundColor: cfg.bg, top: -6, right: -6 },
// 				]}
// 			>
// 				<Text style={tw`text-white text-xs`}>{cfg.icon}</Text>
// 			</View>

// 			<View style={tw`flex-row items-center mb-1`}>
// 				{job.avatar ? (
// 					<Image
// 						source={{ uri: job.avatar }}
// 						style={tw`w-6 h-6 rounded-full mr-2`}
// 					/>
// 				) : (
// 					<View style={tw`w-6 h-6 rounded-full bg-gray-300 mr-2`} />
// 				)}
// 				<View style={tw`flex-1`}>
// 					<Text style={tw`text-xs font-semibold text-gray-900`}>
// 						{job.user}
// 					</Text>
// 					<Text style={tw`text-[10px] text-gray-500`}>{job.address}</Text>
// 				</View>
// 				<View style={tw`flex-1`}>
// 					<Text style={tw`text-xs font-semibold text-gray-900`}>
// 						{job.user}
// 					</Text>
// 					<Text style={tw`text-[10px] text-gray-500`}>{job.address}</Text>
// 				</View>
// 				{job.price && (
// 					<Text style={tw`text-sm font-bold text-blue-500`}>{job.price}</Text>
// 				)}
// 			</View>

// 			<Text style={tw`text-[11px] text-gray-700`}>{job.service}</Text>
// 		</View>
// 	);
// };
// export default JobCard;

// test veriosn------>

// src/components/ui/JobCard.tsx
import {
	IconMobile,
	IconsAlarmGray,
	IconsBlueTimer,
	IconsGreenCheck,
	IconsShpo,
	IconsTruck,
	IconsYellowAlarm
} from '@/assets/Icons';
import tw from '@/src/lib/tailwind';
import { BackendJob } from '@/src/lib/type';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface Props {
	job: BackendJob;
	top: number;
	left: number;
	height: number;
	width: number;
}

export default function JobCard({ job, top, left, height, width }: Props) {
	/* ---------- constants ---------- */
	// const STATUS_CFG = {
	// 	confirmed: { bg: '#10B981', icon: '✓' },
	// 	pending: { bg: '#F59E0B', icon: '⏰' },
	// 	mobile: { bg: '#8B5CF6', icon: 'M' },
	// 	'in-shop': { bg: '#F97316', icon: '🏪' },
	// 	truck: { bg: '#3B82F6', icon: '🚛' },
	// };
	// const cfg = STATUS_CFG[job.status];

	/* ---------- helpers ---------- */
	const start =
		new Date(job.start).getHours() + new Date(job.start).getMinutes() / 60;
	const end =
		new Date(job.end).getHours() + new Date(job.end).getMinutes() / 60;
	const hours = end - start;
	// const slots = Math.max(1, Math.round(hours));
	/* ---------- visibility rules ---------- */
	// const showAddress = slots >= 1;
	// const showBadgeRow = slots >= 3;
	// console.log('slots', slots, 'hours', hours, 'showBadgeRow', job.status);
	// const showTitle = slots >= 2;
	// const showVehicles = slots >= 3;
	// const showBottom = slots >= 2;
	const showAddress = true; // always
	const showBadgeRow = hours >= 3; // 9-10:30 → true
	const showTitle = hours >= 1.5;
	const showVehicles = hours >= 3;
	const showBottom = hours >= 2;

	/* ---------- render ---------- */
	return (
		<TouchableOpacity
			onPress={() => router.push('/(job-view)')}
			style={[
				tw`absolute bg-bgWhite rounded-2xl shadow p-2.5 border border-borderPrimary`,
				{ top, left, height, width },
			]}
		>
			{/* 1. Name + icons row */}

			<View style={tw`flex-row justify-between `}>
				<View style={tw`flex-1 flex-col `}>
					<Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
						{job.user}
					</Text>
					{showAddress && job.address && (
						<Text style={tw`text-text9 font-sfpro-400 text-gray `}>{job.address}</Text>
					)}
				</View>
				{job.status === 'completed' && (
					<View style={tw`flex-row `}>
						<Text style={tw`mr-1`}>
							<SvgXml xml={IconsShpo} />
						</Text>
						<Text style={tw`mt-0.4`}>
							{/* <SvgXml xml={IconsShpo} /> */}
							<SvgXml xml={IconsGreenCheck} />
						</Text>
					</View>
				)}
				{job.status === 'inProgress' && <SvgXml xml={IconsBlueTimer} />}
				{job.status === 'upComing' && <SvgXml xml={IconsYellowAlarm} />}
			</View>
			{/* <View style={tw`flex-row items-center`}>
 				{job.status === 'completed' && <SvgXml xml={IconsShpo} />}
				{job.status === 'inProgress' && <SvgXml xml={IconsBlueTimer} />}
				{job.status === 'upComing' && <SvgXml xml={IconsYellowAlarm} />}

 				<SvgXml xml={IconsGreenCheck} />
			</View> */}

			{/* 3. Badge row (≥2 slots) */}
			{showBadgeRow && (
				<View style={tw`flex-row items-center justify-between mt-1`}>
					<View style={tw`flex-row items-center `}>
						{job.badge === 'In shop' && (
							<Text style={tw`mr-1`}>
								<SvgXml xml={IconsShpo} />
							</Text>
						)}
						{job.badge === 'Mobile' && (
							<SvgXml xml={IconMobile} />
						)}

						{job.badge && (
							<View style={tw` rounded px-1.5 py-0.5`}>
								<Text style={tw` text-text10 font-sfpro-600 text-headingText `}>{job.badge}</Text>
							</View>
						)}
					</View>
					{/* {job.duration || ( */}
					<View
						style={tw` flex-row justify-center items-center gap-1 rounded-full px-2 py-0.6 bg-borderPrimary`}
					>
						<SvgXml xml={IconsAlarmGray} />
						<Text style={tw`text-text9 font-sfpro-400 text-gray`}>{job.duration}</Text>
					</View>
					{/* )} */}
				</View>
			)}

			{/* 4. Service title (≥3 slots) */}
			{showTitle && job.service && (
				<Text style={tw`text-text9 text-headingText mt-1 font-sfpro-600`}>
					{job.service}
				</Text>
			)}

			{/* 5. Vehicles (≥3 slots) */}

			{/* single vehicle row */}
			{showVehicles &&
				job.vehicles?.map((v, i) => (
					<View
						key={i}
						style={tw`flex-row justify-between  items-center bg-[#cccccc1a] rounded-lg p-2 my-1`}
					>
						{/* left column : title + color */}
						<View style={tw`flex-col`}>
							<Text style={tw`text-text10 font-sfpro-600 text-headingText`}>
								{v.title}
							</Text>
							<View style={tw`flex-row items-center gap-1`}>
								<Text style={tw`bg-primaryColor w-2 h-2 rounded-full`}></Text>
								<Text style={tw`text-text9 font-sfpro-600 text-black`}>{v.color}</Text>
							</View>
						</View>

						{/* right : vehicle label + icon */}
						<View style={tw``}>
							<View
								style={tw`bg-[#0087FF1A] flex-row items-center rounded-full px-1 py-0.5 gap-1`}
							>
								{v.vehicle === 'Truck' && (
									<SvgXml xml={IconsTruck} />
								)}
								<Text style={tw`text-text10 font-sfpro-400 text-primaryColor mr-1`}>{v.vehicle}</Text>
							</View>
						</View>
					</View>
				))}

			{/* 6. Bottom row (≥4 slots) */}
			{showBottom && (
				<View style={tw`flex-row justify-between items-center  mt-auto pt-1`}>
					{/* overlapping avatars */}
					<View style={tw`relative`}>

						<Image
							// source={{ uri: job.avatar }}
							source={require('@/assets/images/Frame 1707479431.png')}
							style={tw`absolute -top-3.5 w-8 h-8 `}
						/>
					</View>

					{/* price */}
					{job.price && (
						<Text style={tw`text-text14 font-sfpro-700 text-primaryColor`}>{job.price}</Text>
					)}
				</View>
			)}
		</TouchableOpacity>
	);
}
