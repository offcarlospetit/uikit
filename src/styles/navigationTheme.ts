import { DefaultTheme } from "@react-navigation/native";
import restyleTheme from "./restyleTheme";

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: restyleTheme.colors.navigationPrimary,
    background: restyleTheme.colors.navigationBackground,
  },
};

export default theme;
