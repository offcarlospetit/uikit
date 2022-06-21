import { DefaultTheme } from "react-native-paper";
import { baseTheme } from "./restyleTheme";
import textVariant from "./textVariants";

const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: baseTheme.colors.paperThemePrimary,
    accent: baseTheme.colors.paperThemeAccent,
    disabled: baseTheme.colors.paperThemeDisabled,
    placeholder: baseTheme.colors.paperThemePlaceholder,
  },
  fonts: { ...DefaultTheme.fonts, ...textVariant.mobile },
};

export default theme;
