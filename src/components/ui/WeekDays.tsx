import tw from "@/src/lib/tailwind";
import dayjs, { Dayjs } from "dayjs";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const WeekDays: React.FC = () => {
    const today = dayjs();
    const startOfWeek = today.startOf("week").add(1, "day"); // dayjs 

    const weekDays: Dayjs[] = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [startOfWeek]);

    return (
        <View style={tw`flex-col gap-4`}>
            <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                This Week
            </Text>

            <View style={tw`flex-row justify-between`}>
                {weekDays.map((day, idx) => {
                    const isToday = day.isSame(today, "day");

                    return (
                        <TouchableOpacity
                            key={idx}
                            style={tw.style(
                                "items-center w-[42px] px-0.5 py-2 rounded-2.5 border gap-1.5",
                                isToday
                                    ? "bg-primaryColor border-primaryColor"
                                    : "bg-white border-gray/30"
                            )}
                        >
                            <Text
                                style={tw.style(
                                    "text-sm font-sfpro-400",
                                    isToday ? "text-white" : "text-gray"
                                )}
                            >
                                {day.format("ddd")} {/* Mon, Tue, etc */}
                            </Text>
                            <Text
                                style={tw.style(
                                    "text-text14 font-sfpro-600",
                                    isToday ? "text-white" : "text-black"
                                )}
                            >
                                {day.format("D")}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default WeekDays;
