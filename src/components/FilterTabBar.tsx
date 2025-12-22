import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';

interface Props {
    initialFilter?: string;
    filters: string[];
    onFilterChange?: (filter: string) => void;
}

// Ensure filters is typed as an array of strings
// const FILTERS: string[] = filters;

const FilterTabBar: React.FC<Props> = ({ initialFilter = "All", filters = [], onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

    // Memoize the filter change handler to prevent unnecessary re-renders
    const handleFilterChange = useCallback(
        (filter: string) => {
            setActiveFilter(filter);
            onFilterChange?.(filter);
        },
        [onFilterChange]
    );

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`py-2 gap-2`} // Removed flex-1, added gap-4 for spacing
        >
            {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                    <TouchableOpacity
                        key={filter}
                        onPress={() => handleFilterChange(filter)}
                        style={tw`rounded-xl  ${isActive ? 'bg-primaryColor' : 'bg-white'}`}
                        accessibilityLabel={`Filter by ${filter}`}
                    >
                        <Text
                            style={tw`text-text12 px-2.5 py-2  font-sfpro-600 ${isActive ? 'text-white' : 'text-gray border border-border rounded-xl '}`}
                        >
                            {filter}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default FilterTabBar;