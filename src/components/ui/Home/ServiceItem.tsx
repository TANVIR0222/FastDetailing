import { IconsWatch } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { ServiceItemProps } from "@/src/lib/type";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";



const ServiceItem: React.FC<ServiceItemProps> = ({ title, duration, price }) => {
    return (
        <View style={tw`flex-row items-center justify-between border border-borderPrimary rounded-xl p-3`}>
            {/* Left */}
            <View style={tw`gap-1`}>
                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                    {title}
                </Text>
                <View style={tw`flex-row items-center gap-1 w-16 bg-borderPrimary rounded-full px-2 py-0.5`}>
                    <SvgXml xml={IconsWatch} />
                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>{duration}</Text>
                </View>
            </View>

            {/* Right */}
            <Text style={tw`text-text12 font-sfpro-700 text-headingText`}>{price}</Text>
        </View>
    );
};

export default ServiceItem;
