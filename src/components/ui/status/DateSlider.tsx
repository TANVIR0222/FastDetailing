import { IconsStatusLeftArrow, IconsStatusRightArrow } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DateSlider = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // ফাংশন: date format করা
    const formatDate = (date: any) => {
        const dayName = daysOfWeek[date.getDay()];
        const monthName = date.toLocaleString("default", { month: "long" });
        const dayNum = date.getDate();
        const suffix = getDaySuffix(dayNum);
        return `${dayName}, ${monthName} ${dayNum}${suffix}`;
    };

    // ফাংশন: day suffix
    const getDaySuffix = (day: any) => {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const goPreviousDay = () => {
        const prevDate = new Date(currentDate);
        prevDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDate);
    };

    const goNextDay = () => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDate);
    };

    return (
        <View style={tw`flex-row items-center justify-between mt-2.5`}>
            <TouchableOpacity onPress={goPreviousDay}>
                <SvgXml xml={IconsStatusLeftArrow} />
            </TouchableOpacity>

            <Text style={tw`text-text12 text-headingText font-sfpro-700`}>
                {formatDate(currentDate)}
            </Text>

            <TouchableOpacity onPress={goNextDay}>
                <SvgXml xml={IconsStatusRightArrow} />
            </TouchableOpacity>
        </View>
    );
};

export default DateSlider;
