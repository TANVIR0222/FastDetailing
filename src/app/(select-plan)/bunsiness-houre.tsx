import { IconsDownArrow } from "@/assets/Icons";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import MainButton from "@/src/components/MainButton";
import PageWrapper from "@/src/components/PageWrapper";
import ProgressBar from "@/src/components/ProgressBar";
import tw from "@/src/lib/tailwind";
import { DaySchedule, PickerState } from "@/src/lib/type";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    ListRenderItem,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SvgXml } from "react-native-svg";


const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ScheduleScreen: React.FC = () => {
    const [days, setDays] = useState<DaySchedule[]>(
        daysOfWeek.map((day) => ({
            day,
            enabled: false,
            start: null,
            end: null,
        }))
    );

    const [picker, setPicker] = useState<PickerState>({
        show: false,
        index: null,
        type: "start",
    });

    const toggleDay = (index: number): void => {
        setDays((prevDays) => {
            const newDays = [...prevDays];
            const current = newDays[index];
            newDays[index] = {
                ...current,
                enabled: !current.enabled,
                // when turning ON, keep times as they were or null
                // when turning OFF, just keep them (so user can restore later)
            };
            return newDays;
        });
    };

    const formatTime = (date: Date | null, enabled: boolean): string => {
        if (!enabled || !date) return "Close";
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${minutesStr} ${ampm}`;
    };

    const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date): void => {
        if (event.type === "set" && selectedDate && picker.index !== null) {
            setDays((prevDays) => {
                const newDays = [...prevDays];
                if (picker.type === "start") {
                    newDays[picker.index] = { ...newDays[picker.index], start: selectedDate };
                } else {
                    newDays[picker.index] = { ...newDays[picker.index], end: selectedDate };
                }
                return newDays;
            });
        }
        setPicker({ show: false, index: null, type: "start" });
    };

    const renderItem: ListRenderItem<DaySchedule> = ({ item, index }) => (
        <View style={tw`flex-row items-center justify-between mb-3`}>
            {/* Day Switch */}
            <View style={tw`flex-row gap-1 items-center justify-center  bg-white border border-border rounded-xl px-3 py-3 w-[28%]`}>
                <Switch
                    value={item.enabled}
                    onValueChange={() => toggleDay(index)}
                    trackColor={{ false: "#ccc", true: "#0087FF" }}
                    thumbColor="white"
                />
                <Text style={tw`text-text16 font-sfpro-400 text-headingText`}>{item.day}</Text>
            </View>

            {/* Start Time */}
            <TouchableOpacity
                style={tw`flex-row items-center justify-center gap-1 bg-white border border-border rounded-xl px-3 py-4 w-[28%] `}
                disabled={!item.enabled}
                onPress={() => setPicker({ show: true, index, type: "start" })}
            >
                <Text style={tw`text-text12 font-sfpro-400 ${formatTime(item.end, item.enabled) === "Close"
                    ? "text-gray"
                    : "text-headingText"
                    }`}>
                    {formatTime(item.start, item.enabled)}
                </Text>
                {item.enabled && <SvgXml xml={IconsDownArrow} />}
            </TouchableOpacity>

            {/* To */}
            <Text style={tw`mx-1 text-headingText`}>To</Text>

            {/* End Time */}
            <TouchableOpacity
                style={tw`flex-row items-center justify-center gap-1 bg-white border border-border rounded-xl px-3 py-4 w-[28%]`}
                disabled={!item.enabled}
                onPress={() => setPicker({ show: true, index, type: "end" })}
            >
                <Text
                    style={tw`text-text12 font-sfpro-400 ${formatTime(item.end, item.enabled) === "Close"
                        ? "text-gray"
                        : "text-headingText"
                        }`}
                >
                    {formatTime(item.end, item.enabled)}
                </Text>

                {item.enabled && <SvgXml xml={IconsDownArrow} />}
            </TouchableOpacity>

        </View>
    );


    return (
        <PageWrapper>
            <GlobalTopBar title="Business Hours" icon={true} />

            <View style={tw`flex-1 flex-col gap-5 pt-1 `}>
                <ProgressBar height={10} progress={40} />
                <FlatList
                    data={days}
                    keyExtractor={(item) => item.day}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
                {picker.show && picker.index !== null && (
                    <DateTimePicker
                        value={days[picker.index][picker.type] ?? new Date()}
                        mode="time"
                        is24Hour={false}
                        display="spinner"
                        onChange={onTimeChange}
                    />
                )}

                <MainButton title="Next" onPress={() => router.push('/(select-plan)/user-add-bank-account')} />
            </View>
        </PageWrapper>
    );
};

export default ScheduleScreen;
