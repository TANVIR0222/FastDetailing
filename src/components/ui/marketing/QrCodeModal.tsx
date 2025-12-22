import tw from '@/src/lib/tailwind'
import { qrcodeValidationSchema } from '@/src/utils/auth-validationSchema'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Keyboard, Modal, Pressable, TouchableWithoutFeedback, View } from 'react-native'
import GlobalButtonSheetClose from '../../GlobalButtonSheetClose'
import GlobalMainInput from '../../GlobalMainInput'
import MainButton from '../../MainButton'

type QrCodeModal = {
    visible: boolean
    setVisible: (val: boolean) => void

}

const QrCodeModal: React.FC<QrCodeModal> = ({
    visible,
    setVisible,
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
                            name: "",
                            url: "",

                        }}
                        validationSchema={

                            qrcodeValidationSchema
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
                            <View style={tw`flex-1 flex-col gap-4`}>
                                {/* Title + Close */}
                                <GlobalButtonSheetClose
                                    title={"Generate QR Code"}
                                    onClose={() => setVisible(false)}
                                />

                                <View>
                                    <GlobalMainInput
                                        label="Name"
                                        value={values.url}
                                        onChangeText={handleChange("url")}
                                        onBlur={handleBlur("url")}
                                        error={errors.url}
                                        touched={touched.url}
                                    />
                                    <GlobalMainInput
                                        label="Paste URL"
                                        value={values.name}
                                        onChangeText={handleChange("name")}
                                        onBlur={handleBlur("name")}
                                        error={errors.name}
                                        touched={touched.name}
                                    />

                                </View>
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

export default QrCodeModal;
