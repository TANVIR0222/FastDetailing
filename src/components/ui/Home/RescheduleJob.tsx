import { IconsCheck, IconsClanderLEftArrow, IconsClanderRightArrow, IconsCloseModal, IconsNotCheck, IconsRadioActive, IconsRadioInActive } from '@/assets/Icons';
import { pickerOptions } from '@/src/app/(marketing)/create-marketing-flow';
import tw from '@/src/lib/tailwind';
import { CalendarModalProps } from '@/src/lib/type';
import React, { useCallback, useState } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import CustomPicker from '../marketing/CustomPicker';
import StatusTag from './StatusTag';


const times = [
    ["9:00 AM", "10:30 AM", "11:00 AM", "12:00 AM", "12:30 AM"],
    ["2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
    ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
];

const RescheduleJob: React.FC<CalendarModalProps> = ({ visible, onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [selected, setSelected] = useState("Week");





    const [isModal, setisModal] = useState<boolean>(false);
    const [addedBuffer, setAddedBuffer] = useState<string>('Week');


    const options = ["Only this occurrence", "All future occurrence"];




    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => prev === serviceId ? null : serviceId);
    }, []);



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
                                    `text-text16 font-sfpro-400  text-gray`,
                                    textColor,
                                    isSelected && `text-white text-text16 font-sfpro-400`
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

        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={tw`flex-1 bg-[rgba(0,0,0,0.4)] justify-end`}>
                <View style={tw`bg-white rounded-t-2xl p-4 max-h-[90%]`}>
                    {/* Header */}
                    <View style={tw`flex-row items-center justify-between pb-1 `}>
                        <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                            {!isModal ? `${selectedServiceId ? "One-Time Job" : 'Recurring Jobs'}` : 'Change Job Details'}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            onClose();
                            setisModal(false);
                        }}>
                            <SvgXml xml={IconsCloseModal} />
                        </TouchableOpacity>

                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw` `}  >
                        {!isModal && <View style={tw`flex-col gap-4`} >
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
                                        <Text key={i} style={tw`w-10 text-headingText text-center font-sfpro-400 text-text16`}>{day}</Text>
                                    ))}
                                </View>

                                <View style={tw`mb-5`}>{renderCalendar()}</View>

                                {/* Legend */}
                                <View style={tw`flex-row gap-2.5 border-t w-[95%] items-center py-4 self-center border-t-gray/30`}>
                                    <StatusTag
                                        label="Shop Close"
                                        bgColor="#E71F2F1A"
                                        textColor="#E71F2F"
                                        dotColor="#E71F2F"
                                    />

                                    <StatusTag
                                        label="No Worker"
                                        bgColor="#FFB7001A"
                                        textColor="#FFB700"
                                        dotColor="#FFB700"
                                    />

                                    <StatusTag
                                        label="Selected"
                                        bgColor="#0A84FF"
                                        textColor="#FFFFFF"
                                        dotColor="#FFFFFF"
                                    />

                                </View>
                            </View>

                            {/* Time Slots */}
                            <View style={tw`w-full gap-4`}>
                                <Text style={tw`text-text12 leading-4 text-headingText font-sfpro-400`}>
                                    Available Start Times
                                </Text>

                                <View style={tw`flex-row flex-wrap justify-center gap-4`}>
                                    {times.flat().map((time) => {
                                        const isSelected = selectedTime === time;
                                        return (
                                            <TouchableOpacity
                                                key={time}
                                                onPress={() => setSelectedTime(time)}
                                                style={tw.style(
                                                    `py-1.5  rounded-lg justify-center items-center`,
                                                    `w-[16%]`,
                                                    isSelected ? `bg-[#0087FF1A]` : `bg-[rgba(153,154,154,0.1)]`
                                                )}
                                            >
                                                <Text
                                                    style={tw.style(
                                                        `text-text10 font-sfpro-400 text-center`,
                                                        isSelected ? `text-primaryColor` : `text-gray`
                                                    )}
                                                >
                                                    {time}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>

                                {/* Recurring Job select */}
                                <View style={tw`flex-row items-center gap-2 mt-2`}>
                                    <TouchableOpacity onPress={() => handleSelect('header')}>
                                        <SvgXml xml={selectedServiceId ? IconsNotCheck : IconsCheck} width={23} height={23} />
                                    </TouchableOpacity>
                                    <Text style={tw`text-text12 font-sfpro-500`}>Recurring Job</Text>
                                </View>

                                {selectedServiceId && <View style={tw`flex-col bg-white  rounded-2xl gap-1`}>
                                    {/* Row 1: Two Inputs */}
                                    <Text style={tw`text-text12 text-gray font-sfpro-400 mb-2`}>
                                        Recurs Every
                                    </Text>
                                    <View style={tw`flex-row gap-4 items-center`}>
                                        {/* Number Input */}
                                        <View style={tw`flex-1`}>
                                            <TextInput
                                                keyboardType="numeric"
                                                style={tw`h-12 px-4 text-text16 rounded-xl border border-gray/30`}
                                            />
                                        </View>

                                        {/* Picker Section */}
                                        <View style={tw`flex-1`}>
                                            <View style={tw`flex-1 rounded-xl h-12`}>
                                                <CustomPicker value={addedBuffer} onChange={setAddedBuffer} options={pickerOptions} />

                                            </View>
                                        </View>

                                    </View>


                                    {/* Row 2: Total */}
                                </View>}
                            </View>

                            {/* Save Button */}
                            <TouchableOpacity onPressIn={() => setisModal(true)} style={tw`bg-primaryColor p-4 rounded-xl`} >
                                <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`} >save</Text>
                            </TouchableOpacity>
                        </View>}

                        {isModal && <View>
                            <View style={tw` flex-col gap-4`}>
                                <Text style={tw`text-headingText font-sfpro-400 text-text12`}>
                                    This is a recurring job. What would you like to do?
                                </Text>

                                <View style={tw`flex-col gap-4 items-center justify-between`}>
                                    {options.map((option, index) => {
                                        const isSelected = selected === option;
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => setSelected(option)}
                                                style={tw.style(
                                                    "flex-row gap-2 items-center w-full rounded-xl py-3 px-3 border",
                                                    isSelected ? "border-primaryColor" : "border-gray/30"
                                                )}
                                                activeOpacity={0.7}
                                            >
                                                <SvgXml
                                                    xml={isSelected ? IconsRadioActive : IconsRadioInActive}
                                                    width={20}
                                                    height={20}
                                                />
                                                <Text
                                                    style={tw.style(
                                                        "text-text10 font-sfpro-400 text-gray"

                                                    )}
                                                >
                                                    {option}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                                <TouchableOpacity
                                    onPressIn={() => {
                                        onClose();
                                        setisModal(false);
                                    }}
                                    style={tw`bg-primaryColor p-4 rounded-xl`}
                                >
                                    <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>}
                    </ScrollView>
                </View>

            </View>
        </Modal>


    );
};

export default RescheduleJob;
