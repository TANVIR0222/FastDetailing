
import GlobalButtonSheetClose from "@/src/components/GlobalButtonSheetClose";
import GlobalMainInput from "@/src/components/GlobalMainInput";
import MainButton from "@/src/components/MainButton";
import tw from "@/src/lib/tailwind";
import { extraServicesValidationSchema } from "@/src/utils/auth-validationSchema";
import { Formik } from "formik";
import React from "react";
import {
    Keyboard,
    Modal,
    Pressable,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";

interface ChangePassModalProps {
    visible: boolean;
    setVisible: (val: boolean) => void;
}

const ChooseAudienceModal = ({ visible, setVisible }: ChangePassModalProps) => {
    const isLoading = false;

    const handleBusinessSubmit = (values: any) => {
        console.log("Submitted values:", values);
        setVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            {/* Background overlay */}
            <Pressable
                onPress={() => setVisible(false)}
                style={tw`flex-1 bg-black/30`}
            />

            {/* Modal Content */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={tw.style(
                        "absolute bottom-0 w-full rounded-t-3xl bg-bgWhite p-4",

                    )}
                >
                    <Formik
                        initialValues={{
                            category_name: '',
                            serviceName: '',
                            price: '',
                            duration: ''
                        }}
                        validationSchema={extraServicesValidationSchema}
                        onSubmit={handleBusinessSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={tw`flex-1 flex-col gap-4 `}>
                                {/* Dynamic Title + Close */}
                                <GlobalButtonSheetClose
                                    title={'Exclude customers below this spend'}
                                    onClose={() => setVisible(false)}
                                />

                                {/* Conditional Form */}
                                <View>

                                    <GlobalMainInput
                                        label="Minimum Spending Amount"
                                        placeholder="$50"
                                        value={values.category_name}
                                        onChangeText={handleChange('category_name')}
                                        onBlur={handleBlur('category_name')}
                                        error={errors.category_name}
                                        touched={touched.category_name}
                                    />
                                    <Text style={tw` text-gray text-text10 font-sfpro-400`} >
                                        Preview: Customers who have spent less than $50 will be excluded from this campaign.
                                    </Text>
                                </View>

                                {/* Save Button */}
                                <MainButton
                                    title={isLoading ? 'Loading...' : 'Save'}
                                    onPress={() => handleSubmit()}
                                    disabled={isLoading}
                                    bm={true}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ChooseAudienceModal;

