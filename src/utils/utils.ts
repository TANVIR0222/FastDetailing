import { Dimensions, Linking, Platform } from "react-native";

export const DELETE_THRESHOLD = -60;
export const SWIPE_RESET_DURATION = 250;
export const SWIPE_DELETE_DISTANCE = -100;

export const phoneNumber = "+8801234567890"; //

export const handlePress = () => {
  Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
    console.log("Error opening dialer", err)
  );
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export { screenHeight, screenWidth };

export const isIphoneX = () => {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};

export const bothPlatform = Platform.OS;
