import { IconsClanderLEftArrow, IconsClanderRightArrow } from '@/assets/Icons';
import MainButton from '@/src/components/MainButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function New_time_off_request_modal() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());






    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));






    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const prevMonthDays = getDaysInMonth(prevYear, prevMonth);

        const prevMonthDaysToShow = Array.from({ length: firstDay }, (_, i) => ({
            day: prevMonthDays - firstDay + i + 1,
            month: prevMonth,
            year: prevYear,
            isCurrentMonth: false,
        }));

        const currentMonthDaysArr = Array.from({ length: daysInMonth }, (_, i) => ({
            day: i + 1,
            month,
            year,
            isCurrentMonth: true,
        }));

        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const totalCells = 42;
        const nextMonthDaysToShow = Array.from(
            { length: totalCells - (firstDay + daysInMonth) },
            (_, i) => ({
                day: i + 1,
                month: nextMonth,
                year: nextYear,
                isCurrentMonth: false,
            })
        );

        const allDays = [...prevMonthDaysToShow, ...currentMonthDaysArr, ...nextMonthDaysToShow];
        const weeks = [];
        for (let i = 0; i < 6; i++) weeks.push(allDays.slice(i * 7, (i + 1) * 7));

        // status map (date -> color)
        const dateStatus: Record<string, "red" | "yellow" | "blue"> = {
            "2025-09-10": "red",
            "2025-09-12": "yellow",

        };

        return weeks.map((week, weekIndex) => (
            <View key={weekIndex} style={tw`flex-row justify-around my-1`}>
                {week.map(({ day, month: m, year: y, isCurrentMonth }, dayIndex) => {
                    const isSelected =
                        selectedDate.getDate() === day &&
                        selectedDate.getMonth() === m &&
                        selectedDate.getFullYear() === y;

                    const dateKey = `${y}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const status = dateStatus[dateKey]; // check date status

                    let bgColor = "";
                    let textColor = "text-gray";

                    if (status === "red") {
                        bgColor = "bg-[#E71F2F1A]";
                        textColor = "text-[#E71F2F]";
                    } else if (status === "yellow") {
                        bgColor = "bg-[#FFB7001A]";
                        textColor = "text-[#FFB700]";
                    } else if (status === "blue") {
                        bgColor = "bg-primaryColor";
                        textColor = "text-white";
                    }

                    return (
                        <TouchableOpacity
                            key={dayIndex}
                            style={tw.style(
                                `w-10 h-10 justify-center items-center rounded-full`,
                                !isCurrentMonth && `opacity-30`,
                                isSelected && `bg-blue-500`,
                                bgColor
                            )}
                            onPress={() => setSelectedDate(new Date(y, m, day))}
                        >
                            <Text
                                style={tw.style(
                                    `text-base`,
                                    textColor,
                                    isSelected && `text-white font-bold`
                                )}
                            >
                                {day}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        ));
    };



    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    return (
        <Pressable
            onPress={() => router.back()}
            style={tw`flex-1 bg-black/30 items-start justify-end mb-4`}
        >
            <View style={tw`w-[100%] bg-bgWhite rounded-t-[20px] overflow-hidden items-center justify-center px-5 pt-5`}>
                <View style={tw`flex-col justify-between gap-4 w-full`}>
                    {/* Calendar */}
                    <View style={tw`border-gray/30 border rounded-xl`}>
                        <View style={tw`flex-row justify-between items-center mb-4 p-4 rounded-t-xl bg-primaryColor`}>
                            <TouchableOpacity onPress={prevMonth}>
                                <SvgXml xml={IconsClanderRightArrow} />
                            </TouchableOpacity>
                            <Text style={tw`text-text14 font-sfpro-700 text-white`}>{monthYearString}</Text>
                            <TouchableOpacity onPress={nextMonth}>
                                <SvgXml xml={IconsClanderLEftArrow} />
                            </TouchableOpacity>
                        </View>

                        <View style={tw`flex-row justify-around pb-2 mb-2`}>
                            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                                <Text key={i} style={tw`w-10 text-center font-sfpro-300 text-text16`}>{day}</Text>
                            ))}
                        </View>

                        <View style={tw`mb-5`}>{renderCalendar()}</View>

                        {/* Legend */}
                        <View style={tw`flex-row gap-2 border-t w-[95%] items-center py-4 self-center border-t-gray/30`}>
                            <View style={tw`bg-[#E71F2F1A] flex-row items-center gap-0.5 px-2 py-1.5 rounded-full`}>
                                <View style={tw`bg-[#E71F2F] w-2 h-2 rounded-full`} />
                                <Text style={tw`text-[#E71F2F] text-text10 font-sfpro-400`}>Shop Close</Text>
                            </View>
                            <View style={tw`bg-[#FFB7001A] flex-row items-center gap-0.5 px-2 py-1.5 rounded-full`}>
                                <View style={tw`bg-[#FFB700] w-2 h-2 rounded-full`} />
                                <Text style={tw`text-[#FFB700] text-text10 font-sfpro-400`}>No Worker</Text>
                            </View>
                        </View>
                    </View>

                    {/* Send Request Button */}
                    <View style={tw` w-full`}>
                        <MainButton title='Sent Request' bm={true} onPress={() => router.back()} />
                    </View>
                </View>
            </View>
        </Pressable>

    )
}