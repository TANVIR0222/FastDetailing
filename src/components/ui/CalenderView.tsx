import tw from '@/src/lib/tailwind';
import { BackendJob } from '@/src/lib/type';
import { backendJobs } from '@/src/utils/all-dummy-data';
import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import JobCard from './JobCard';
// import JobCard from './JobCard';

/* ---------- CONSTANTS ---------- */
// const SLOT_H = 80;
const SLOT_H = 60;
// const CARD_W = 200;
const CARD_W = 206;
const LEFT_MARGIN = 64;
const CARD_GAP = 8;
/* ---------- 1. square grid helpers ---------- */

const getHour = (iso: string) => {
	const d = new Date(iso);
	return d.getHours() + d.getMinutes() / 60;
};

/* ---------- TIMELINE ---------- */
const CalendarTimeline = ({
	jobs = [] as BackendJob[],
	selectedDay,
	startHour = 7,
	endHour = 22,
	slotHeight = SLOT_H,
	cardWidth = CARD_W,
}) => {
	const [positions, setPositions] = useState({});

	const display = useMemo(
		() => jobs.filter(j => j.day === selectedDay),
		[jobs, selectedDay]
	);

	const hours = useMemo(
		() =>
			Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i),
		[startHour, endHour]
	);

	useEffect(() => {
		const sorted = [...display].sort(
			(a, b) => getHour(a.start) - getHour(b.start)
		);
		const cols = [[]];
		const pos = {};

		sorted.forEach(job => {
			const start = getHour(job.start);
			const end = getHour(job.end);
			const top = (start - startHour) * slotHeight;
			const h = (end - start) * slotHeight;
			const bot = top + h;

			let placed = false;
			for (let i = 0; i < cols.length; i++) {
				const last = cols[i][cols[i].length - 1];
				const lastEnd = last ? getHour(last.end) : -Infinity;
				if (lastEnd <= start) {
					cols[i].push(job);
					pos[job.id] = {
						top,
						left: LEFT_MARGIN + i * (cardWidth + CARD_GAP),
						height: h,
					};
					placed = true;
					break;
				}
			}
			if (!placed) {
				cols.push([job]);
				const idx = cols.length - 1;
				pos[job.id] = {
					top,
					left: LEFT_MARGIN + idx * (cardWidth + CARD_GAP),
					height: h,
				};
			}
		});

		setPositions(pos);
	}, [display, startHour, slotHeight, cardWidth]);

	const contentWidth = useMemo(() => {
		const maxLeft = Math.max(...Object.values(positions).map(p => p.left), 0);
		const computed = LEFT_MARGIN + maxLeft + cardWidth + CARD_GAP;
		return Math.max(computed, Dimensions.get('window').width + 1); // or any safe buffer
	}, [positions]);

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View
				style={{
					width: contentWidth,
					borderTopColor: '#E5E7EB',
					borderTopWidth: 1,
					borderRightColor: '#E5E7EB',
					borderRightWidth: 1,
					paddingRight: 20,
				}}
			>
				{/* ---------- SINGLE BACKGROUND GRID (graph paper) ---------- */}
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: LEFT_MARGIN,
						width: Math.ceil((contentWidth - LEFT_MARGIN) / 69) * 69 + 1,
						height: (endHour - startHour) * slotHeight,
						zIndex: -1,
					}}
				>
					{Array.from({
						length: Math.ceil((contentWidth - LEFT_MARGIN) / 69) * 69 + 1,
					}).map((_, x) => (
						<View
							key={`v-${x}`}
							style={{
								position: 'absolute',
								top: 0,
								left: x * 70,
								height: (endHour + startHour) * slotHeight,
								borderRightWidth: 1,
								borderColor: '#E5E7EB',
							}}
						/>
					))}
				</View>

				{hours.map(h24 => (
					<View
						key={h24}
						style={[
							tw`flex-row border-b border-borderPrimary`,
							{ height: slotHeight, width: contentWidth },
						]}
					>
						<View
							style={tw`w-16 border-r border-borderPrimary   items-center pt-3`}
						>
							<Text style={tw`text-text10 font-sfpro-700 mt-2.5 justify-center items-center text-[#767171]`}>
								{h24 === 0
									? '12:00 AM'
									: h24 < 12
										? `${h24}:00 AM`
										: h24 === 12
											? '12:00 PM'
											: `${h24 - 12}:00 PM`}
							</Text>
						</View>
					</View>
				))}

				{display.map(job =>
					positions[job.id] ? (
						<JobCard
							key={job.id}
							job={job}
							{...positions[job.id]}
							width={cardWidth}
						/>
					) : null
				)}
			</View>
		</ScrollView>
	);
};

/* ---------- EXPO-ROUTER WRAPPER ---------- */
export default function HomeScreen() {
	const jobs: BackendJob[] = useMemo(
		() => backendJobs.filter(j => j.day === '2025-08-25'),
		[]
	);
	return <CalendarTimeline jobs={jobs} selectedDay="2025-08-25" />;
}
