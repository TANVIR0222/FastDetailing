import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalRadioButtons from '@/src/components/GlobalRadioButtons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import CustomPicker from '@/src/components/ui/marketing/CustomPicker';
import tw from '@/src/lib/tailwind';
import { MarketingFlowValidationSchema } from '@/src/utils/auth-validationSchema';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

// Define form values type
interface FormValues {
    flow_name: string;
}
export const pickerOptions = ['Week', 'Day', 'Month'];


export default function Index() {
    const isLoading = false;

    const [selectedPlan, setSelectedPlan] = useState<string>('English');
    const [addedBuffer, setAddedBuffer] = useState<string>('Week');
    const [selectedPrice, setSelectedPrice] = useState<string>('English');

    const languageOptions = ['Bangal', 'English', 'Hindi'];

    const handleBusinessSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        // Your submit logic here
        console.log(values, selectedPlan, selectedPrice);
        actions.setSubmitting(false);
    };

    // Reusable Picker component


    return (
        <PageWrapper>
            <GlobalTopBar title="Create Marketing Flow" />
            <View style={tw`flex-1`}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-1`}>
                    <Formik
                        initialValues={{ flow_name: '' }}
                        validationSchema={MarketingFlowValidationSchema}
                        onSubmit={handleBusinessSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={tw`flex-1 flex-col justify-between`}>
                                <View>
                                    <GlobalMainInput
                                        label="Flow Name *"
                                        value={values.flow_name}
                                        onChangeText={handleChange('flow_name')}
                                        onBlur={handleBlur('flow_name')}
                                        error={errors.flow_name}
                                        touched={touched.flow_name}
                                    />

                                    <View style={tw`flex-col gap-2.5 mt-4`}>
                                        <Text style={tw`text-text12 font-sfpro-400 text-gray`}>Select a language</Text>
                                        <CustomPicker
                                            value={selectedPrice}
                                            onChange={setSelectedPrice}
                                            options={languageOptions}
                                        />
                                    </View>

                                    <View style={tw`mt-4`}>
                                        <GlobalRadioButtons
                                            selectedValue={selectedPlan}
                                            onSelect={(value) => setSelectedPlan(value)}
                                            title="Business Type"
                                            options={['Only In Shop', 'Only Mobile', 'Both']}
                                            boxBorder={false}
                                        />
                                    </View>

                                    <View style={tw`flex-col gap-2.5 mt-4`}>
                                        <Text style={tw`text-text12 font-sfpro-400 text-gray`}>Add Buffer</Text>
                                        <CustomPicker value={addedBuffer} onChange={setAddedBuffer} options={pickerOptions} />
                                    </View>
                                </View>

                                <View style={tw`mt-6 mb-4`}>
                                    <MainButton
                                        title={isLoading ? 'Loading...' : 'Save Flow'}
                                        onPress={() => handleSubmit()}
                                        disabled={isLoading}
                                        bm={true}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        </PageWrapper>
    );
}
