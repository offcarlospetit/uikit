import { createBoxVariant, createTextVariant, CreateTextVariantType } from "./createVariants";
import pallete from "./pallete";

export const buttonVariantColors = {
  tertiaryTypeCBorder: pallete.grayscale[300],
};

export const buttonVariants = createBoxVariant({
  primary: {
    backgroundColor: "primary",
    borderRadius: 100,
  },
  secondary: {
    backgroundColor: "secondary",
    borderRadius: 100,
  },
  tertiaryTypeA: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "primary",
  },
  tertiaryTypeB: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "secondary",
  },
  tertiaryTypeC: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "tertiaryTypeCBorder",
  },
});

export const buttonDisabledVariants = createBoxVariant({
  primary: {
    backgroundColor: "disabledBackground",
    borderRadius: 100,
  },
  secondary: {
    backgroundColor: "disabledBackground",
    borderRadius: 100,
  },
  tertiaryTypeA: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "disabledBackground",
  },
  tertiaryTypeB: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "disabledBackground",
  },
  tertiaryTypeC: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "disabledBackground",
  },
});

export const buttonDropDownOpenedVariants = createBoxVariant({
  primary: {
    backgroundColor: "primary",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  secondary: {
    backgroundColor: "secondary",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tertiaryTypeA: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: "primary",
  },
  tertiaryTypeB: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: "secondary",
  },
  tertiaryTypeC: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: "tertiaryTypeCBorder",
  },
});

export const buttonTextColor = createTextVariant({
  primary: { color: "lightText" },
  secondary: { color: "lightText" },
  tertiaryTypeA: { color: "primary" },
  tertiaryTypeB: { color: "secondary" },
  tertiaryTypeC: { color: "secondary" },
  dropDownOpened: { color: "secondary" },
  disabled: { color: "disabledText" },
});

export const buttonSizeVariants = createBoxVariant({
  s: { height: 32, paddingHorizontal: "m" },
  m: { height: 40, paddingHorizontal: "m" },
  ml: { height: 32, paddingHorizontal: "m" },
  l: { height: 48, paddingHorizontal: "l" },
  xl: { height: 50, paddingHorizontal: "l" },
});

export const buttonTextSize = createTextVariant({
  s: { variant: "p1B" },
  m: { variant: "p2B" },
  ml: { variant: "p1R" },
  l: { variant: "h4" },
  xl: { variant: "h3" },
} as Partial<CreateTextVariantType>);
