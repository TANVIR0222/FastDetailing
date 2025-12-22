import { IconDownArroGray, IconTopArroGray } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import * as React from "react";
import { Animated, Easing, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SvgXml } from "react-native-svg";


const RecentScan = () => {
    const dataOptions = ["1 Year", "6 Months", "3 Months", "4 Weeks", "1 Week"];
    const [selectedValue, setSelectedValue] = React.useState("1 Week");
    const [open, setOpen] = React.useState(false);
    const animation = React.useRef(new Animated.Value(0)).current;

    const toggleDropdown = () => {
        if (open) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 200,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start(() => setOpen(false));
        } else {
            setOpen(true);
            Animated.timing(animation, {
                toValue: dataOptions.length * 40,
                duration: 200,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start();
        }
    };

    const handleSelect = (item) => {
        setSelectedValue(item);
        toggleDropdown();
    };

    // X-axis labels based on selection
    let xLabels = [];
    if (selectedValue === "1 Year") {
        xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    } else if (selectedValue === "6 Months") {
        xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    } else if (selectedValue === "3 Months") {
        xLabels = ["Jan", "Feb", "Mar"];
    } else if (selectedValue === "4 Weeks") {
        xLabels = [" Wek1", "Wek2", "Wek3", "Wek4"];
    } else { // 1 Week
        xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }

    const chartData = xLabels.map(label => ({ value: Math.floor(Math.random() * 2000), label }));

    const CustomPointer = ({ value }) => (
        <View style={tw`items-center`}>
            <View style={tw`w-4 h-4 bg-primaryColor rounded-full border-2 border-white`} />
            <View style={tw`mt-2 bg-white rounded p-2 shadow-lg`}>
                <Text style={tw`text-xs font-semibold text-blue-500`}>{value}</Text>
            </View>
        </View>
    );

    const itemWidth = 70; // fixed width for each X-axis label
    const chartWidth = xLabels.length * itemWidth;

    return (
        <View style={tw`border border-gray/30 rounded-xl p-4 flex-col gap-4`}>
            {/* Header */}
            <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`font-sfpro-700 text-text16 text-headingText`}>Revenue Trend</Text>

                {/* Dropdown */}
                <View style={tw`w-28`}>
                    <TouchableOpacity
                        style={tw`border border-gray/30 relative rounded-md px-2 py-1 flex-row justify-between items-center bg-white`}
                        onPress={toggleDropdown}
                    >
                        <Text style={tw`text-gray text-text10 font-sfpro-400`}>{selectedValue}</Text>
                        <SvgXml xml={open ? IconTopArroGray : IconDownArroGray} />
                    </TouchableOpacity>

                    {open && (
                        <View style={tw`shadow-lg p-2 w-28 absolute top-8 z-50 rounded-md bg-white overflow-hidden`}>
                            {dataOptions.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={tw`items-center justify-center py-2`}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text
                                        style={[
                                            tw`text-gray font-sfpro-400 text-text10 w-full text-center`,
                                            item === selectedValue && tw`bg-borderPrimary rounded-md text-gray p-2.5 font-semibold`
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </View>

            {/* Chart with horizontal scroll if needed */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LineChart
                    data={chartData}
                    height={200}
                    width={chartWidth}
                    spacing={42}
                    initialSpacing={10}
                    color1="#0087ff"
                    color2="#22c55e"
                    hideDataPoints
                    textFontSize={10}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    yAxisTextStyle={{ color: "#999a9a", fontSize: 10 }}
                    xAxisLabelTextStyle={{ color: "#999a9a", fontSize: 10, marginLeft: 4, boxSizing: "border-box" }}
                    rulesType="solid"
                    rulesColor="#ece9f1"
                    noOfSections={5}
                    maxValue={2000}
                    thickness1={2}
                    curved
                    pointerConfig={{
                        pointerComponent: ({ value }) => <CustomPointer value={value} />,
                        pointerStripHeight: 150,
                        pointerStripWidth: 2,
                        pointerStripColor: "#0087FF",
                        pointerColor: "#0087FF",
                        radius: 4,
                        stripOverPointer: false,
                        shiftPointerLabelX: 0,
                        shiftPointerLabelY: 0,
                        autoAdjustPointerLabelPosition: false,
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default RecentScan;
