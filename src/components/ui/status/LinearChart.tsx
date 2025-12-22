import tw from "@/src/lib/tailwind";
import * as React from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const RevenueTrendChart = () => {

    // Data for the chart - current period (blue line)
    const currentPeriodData = [
        { value: 700, label: ' Sun', },
        { value: 1000, label: 'Mon', },
        { value: 500, label: 'Tue', },
        { value: 500, label: 'Wed', },
        { value: 600, label: 'Thu', },
        { value: 300, label: 'Fri', },
        { value: 700, label: 'Sat', },
    ];

    // Data for the chart - last period (green line)
    const lastPeriodData = [
        { value: 300 },
        { value: 500 },
        { value: 600 },
        { value: 1200 },
        { value: 600 },
        { value: 700 },
        { value: 400 },

    ];

    // Custom pointer component
    const CustomPointer = () => {
        return (
            <View style={tw``}>
                <View style={tw`w-4 h-4 bg-headingText rounded-full border-2 border-white shadow-2xl`} />
                <View style={tw`mt-2 bg-white rounded p-2 shadow-lg`}>
                    <Text style={tw`text-xs font-semibold`}>
                        <Text style={tw`text-blue-500`}>$300</Text>
                        {/* <Text style={tw`text-green-500`}> $44</Text> */}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={tw` border border-gray/30 rounded-xl p-4  flex-col gap-4 `}>
            {/* Header */}
            <View style={tw` flex-row  justify-between items-center  `}>
                <Text style={tw` font-sfpro-700 text-text16 text-headingText`}>Revenue Trend</Text>
                <View style={tw`flex-row  gap-2 `}>
                    <View style={tw`flex-row items-center gap-1 `}>
                        <View style={tw`w-2 h-2 rounded-full bg-primaryColor `} />
                        <Text style={tw`text-headingText font-sfpro-500 text-text9`}>This Period</Text>
                    </View>
                    <View style={tw`flex-row items-center gap-1`}>
                        <View style={tw`w-2 h-2 rounded-full bg-bgGreen `} />
                        <Text style={tw`text-headingText font-sfpro-500 text-text9`}>Last Period</Text>
                    </View>
                </View>
            </View>


            {/* Chart */}
            <View style={tw``}>
                <LineChart
                    data={currentPeriodData}
                    data2={lastPeriodData}
                    height={200}
                    width={350}
                    stripColor={"#000"}
                    spacing={47}
                    initialSpacing={10}
                    color1="#0087ff" // Blue for current period
                    color2="#22c55e" // Green for last period
                    hideDataPoints
                    textShiftY={-8}
                    textShiftX={-5}
                    textFontSize={10}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    yAxisTextStyle={{ color: '#999a9a', fontSize: 10 }}
                    xAxisLabelTextStyle={{ color: '#999a9a', fontSize: 10, marginLeft: 4 }}
                    rulesType="solid"
                    rulesColor="#ece9f1"
                    noOfSections={6}
                    maxValue={1200}
                    thickness1={2}
                    thickness2={2}
                    curved
                    yAxisLabelTexts={["$0", "$200", "$400", "$600", "$800", "$1000", "$1200"]}
                    pointerConfig={{
                        pointerComponent: () => <CustomPointer />,
                        pointerStripHeight: 150,
                        pointerStripWidth: 2,
                        pointerStripColor: '#000',
                        pointerColor: '#0087ff',
                        radius: 4,
                        stripOverPointer: false,
                        shiftPointerLabelX: 0,
                        shiftPointerLabelY: 0,
                        autoAdjustPointerLabelPosition: false
                    }}
                />
            </View>

        </View>

    );
};

export default RevenueTrendChart;