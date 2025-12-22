
import { IconsModalClose, IconsSelectUser } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { JobFilterModalProps } from "@/src/lib/type";
import React, { useState } from "react";
import { FlatList, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import GlobalButtonSheetClose from "../../GlobalButtonSheetClose";
import GlobalRadioButtons from "../../GlobalRadioButtons";
import MainButton from "../../MainButton";

const workers = [
    { id: "1", name: "Alex James", avatar: require("@/assets/images/avator2.png") },
    { id: "2", name: "Alex Peterson", avatar: require("@/assets/images/avator2.png") },
    { id: "3", name: "Alex Holee", avatar: require("@/assets/images/avator2.png") },
    { id: "4", name: "Kevin P", avatar: require("@/assets/images/avator2.png") },
];

const radioOptions = [
    { title: "Date Range", options: ["Today", "This Week", "This Month"], boxBorder: true },
    { title: "Job Type", options: ["Upcoming", "In Progress", "Completed"], boxBorder: true },
    { title: "Service Type", options: ["Only In Shop", "Only Mobile", "Both"], boxBorder: false },
];

const JobFilterModal: React.FC<JobFilterModalProps> = ({ visible, setVisible, setSelectedPlan, selectedPlan }) => {
    const [query, setQuery] = useState("");
    const [selectedWorkers, setSelectedWorkers] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filteredWorkers = workers.filter(worker =>
        worker.name.toLowerCase().includes(query.toLowerCase())
    );

    const toggleWorkerSelect = (worker: any) => {
        if (selectedWorkers.find(w => w.id === worker.id)) {
            setSelectedWorkers(selectedWorkers.filter(w => w.id !== worker.id));
        } else {
            setSelectedWorkers([...selectedWorkers, worker]);
        }
        setDropdownOpen(false); // close dropdown after selection
    };

    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={() => setVisible(false)}
        >
            <View style={tw`flex-1 bg-black/50 justify-end`}>
                <ScrollView contentContainerStyle={tw`flex-1 justify-end`}>
                    <View style={tw`bg-white rounded-t-2xl p-5`}>
                        {/* Header */}
                        <GlobalButtonSheetClose title="Filters" onClose={() => setVisible(false)} />

                        {/* Radio Buttons */}
                        {radioOptions.map((item, index) => (
                            <GlobalRadioButtons
                                key={index}
                                selectedValue={selectedPlan}
                                onSelect={setSelectedPlan}
                                title={item.title}
                                options={item.options}
                                boxBorder={item.boxBorder}
                                textBalack={true}
                            />
                        ))}

                        {/* Worker Filter */}
                        <View style={tw`flex-col gap-3`}>
                            <View>
                                <Text
                                    style={tw`mb-2 text-headingText font-sfpro-400 text-text12`}
                                >
                                    Worker
                                </Text>

                                {/* Input Box */}
                                <TextInput
                                    style={tw`h-12 rounded-xl border-gray/30 border text-text12 text-gray font-sfpro-400 px-3`}
                                    placeholder="Type Worker Name"
                                    value={query}
                                    onChangeText={(text) => {
                                        setQuery(text);
                                        setDropdownOpen(text.length > 0);
                                    }}
                                />

                                {/* Dropdown list */}
                                {dropdownOpen && query.length > 0 && (
                                    <View style={tw`bg-white mt-2 rounded-lg shadow p-2 max-h-48`}>
                                        <FlatList
                                            data={filteredWorkers}
                                            keyExtractor={(item) => item.id}
                                            renderItem={({ item }) => {
                                                const isSelected = selectedWorkers.some(
                                                    (w) => w.id === item.id
                                                );
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => toggleWorkerSelect(item)}
                                                        style={tw`flex-row items-center p-2 rounded-lg`}
                                                    >
                                                        <Image
                                                            source={item.avatar}
                                                            style={tw`w-8 h-8 rounded-full mr-3`}
                                                        />
                                                        <Text style={tw`flex-1 text-gray`}>{item.name}</Text>
                                                        {isSelected && <SvgXml xml={IconsSelectUser} />}
                                                    </TouchableOpacity>
                                                );
                                            }}
                                            nestedScrollEnabled={false}
                                        />
                                    </View>
                                )}

                                {/* Selected Chips */}
                                <View style={tw`flex-row flex-wrap  mt-2`}>
                                    {selectedWorkers.map((worker) => (
                                        <View
                                            key={worker.id}
                                            style={tw`flex-row items-center bg-borderPrimary px-3 py-1.5 rounded-full mr-2 mb-2`}
                                        >
                                            <Text
                                                style={tw`mr-2 text-text10 text-gray font-sfpro-600`}
                                            >
                                                {worker.name}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => toggleWorkerSelect(worker)}
                                            >
                                                <SvgXml xml={IconsModalClose} width={15} height={15} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            {/* Customer Filter */}
                            <View>
                                <Text
                                    style={tw`mb-2 text-headingText font-sfpro-400 text-text12`}
                                >
                                    Customer
                                </Text>

                                <TextInput
                                    placeholder="Type Customer Name"
                                    value={query}
                                    onChangeText={(text) => {
                                        setQuery(text);
                                        setDropdownOpen(text.length > 0);
                                    }}
                                    style={tw`h-12 rounded-xl border-gray/30 border text-text12 text-gray font-sfpro-400 px-3`}
                                />

                                {dropdownOpen && query.length > 0 && (
                                    <View style={tw`bg-white mt-2 rounded-lg shadow p-2 max-h-48`}>
                                        <FlatList
                                            data={filteredWorkers}
                                            keyExtractor={(item) => item.id}
                                            renderItem={({ item }) => {
                                                const isSelected = selectedWorkers.some(
                                                    (w) => w.id === item.id
                                                );
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => toggleWorkerSelect(item)}
                                                        style={tw`flex-row items-center p-2 rounded-lg`}
                                                    >
                                                        <Image
                                                            source={item.avatar}
                                                            style={tw`w-8 h-8 rounded-full mr-3`}
                                                        />
                                                        <Text style={tw`flex-1 text-gray`}>{item.name}</Text>
                                                        {isSelected && <SvgXml xml={IconsSelectUser} />}
                                                    </TouchableOpacity>
                                                );
                                            }}
                                            nestedScrollEnabled={false}
                                        />
                                    </View>
                                )}

                                <View style={tw`flex-row flex-wrap  mt-2`}>
                                    {selectedWorkers.map((worker) => (
                                        <View
                                            key={worker.id}
                                            style={tw`flex-row items-center bg-borderPrimary px-3 py-1.5 rounded-xl mr-2 mb-2`}
                                        >
                                            <Text
                                                style={tw`mr-2 text-text10 text-gray font-sfpro-600`}
                                            >
                                                {worker.name}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => toggleWorkerSelect(worker)}
                                            >
                                                <SvgXml xml={IconsModalClose} width={15} height={15} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>

                        {/* Apply Filter Button */}
                        <View style={tw`pt-5`}>
                            <MainButton
                                title="Apply Filter"
                                bm={true}
                                onPress={() => setVisible(false)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default JobFilterModal;
