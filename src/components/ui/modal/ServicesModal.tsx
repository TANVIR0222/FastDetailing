import tw from '@/src/lib/tailwind'
import { categoryNameValidationSchema, extraServicesValidationSchema } from '@/src/utils/auth-validationSchema'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Keyboard, Modal, Pressable, TouchableWithoutFeedback, View } from 'react-native'
import GlobalButtonSheetClose from '../../GlobalButtonSheetClose'
import GlobalMainInput from '../../GlobalMainInput'
import MainButton from '../../MainButton'

type ServicesModalProps = {
    visible: boolean
    setVisible: (val: boolean) => void
    isExtraService: boolean

}

const ServicesModal: React.FC<ServicesModalProps> = ({
    visible,
    setVisible,
    isExtraService,
}) => {
    // useState for toggle
    const [isLoading, setIsLoading] = useState(false)

    const handleBusinessSubmit = (values: any) => {
        console.log("Submitted:", values)
        // API call / Redux action here
        setVisible(false)
    }

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
                            category_name: "",
                            serviceName: "",
                            price: "",
                            duration: "",
                        }}
                        validationSchema={
                            isExtraService
                                ? extraServicesValidationSchema
                                : categoryNameValidationSchema
                        }
                        onSubmit={(values) => {
                            setIsLoading(true)
                            handleBusinessSubmit(values)
                            setIsLoading(false)
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <View style={tw`flex-1 flex-col `}>
                                {/* Title + Close */}
                                <GlobalButtonSheetClose
                                    title={isExtraService ? "New Extra Service" : "New Category"}
                                    onClose={() => setVisible(false)}
                                />

                                {/* Conditional Form */}
                                {isExtraService ? (
                                    <>
                                        <GlobalMainInput
                                            label="Service Name"
                                            value={values.serviceName}
                                            onChangeText={handleChange("serviceName")}
                                            onBlur={handleBlur("serviceName")}
                                            error={errors.serviceName}
                                            touched={touched.serviceName}
                                        />

                                        <View style={tw`flex-row gap-4`}>
                                            <View style={tw`flex-1`}>
                                                <GlobalMainInput
                                                    label="Price"
                                                    value={values.price}
                                                    onChangeText={handleChange("price")}
                                                    onBlur={handleBlur("price")}
                                                    error={errors.price}
                                                    touched={touched.price}
                                                    placeholder="$5.00"
                                                />
                                            </View>
                                            <View style={tw`flex-1`}>
                                                <GlobalMainInput
                                                    label="Duration"
                                                    value={values.duration}
                                                    onChangeText={handleChange("duration")}
                                                    onBlur={handleBlur("duration")}
                                                    error={errors.duration}
                                                    touched={touched.duration}
                                                    placeholder="00 00"
                                                />
                                            </View>
                                        </View>
                                    </>
                                ) : (
                                    <GlobalMainInput
                                        label="Category Name"
                                        value={values.category_name}
                                        onChangeText={handleChange("category_name")}
                                        onBlur={handleBlur("category_name")}
                                        error={errors.category_name}
                                        touched={touched.category_name}
                                    />
                                )}

                                {/* Save Button */}
                                <MainButton
                                    title={isLoading ? "Loading..." : "Save"}
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
    )
}

export default ServicesModal
