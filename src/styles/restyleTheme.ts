import { createTheme } from "@shopify/restyle";
import breakpoints from "./breakpoints";
import {
  buttonDisabledVariants,
  buttonDropDownOpenedVariants,
  buttonSizeVariants,
  buttonVariantColors,
  buttonVariants,
} from "./buttonVariants";
import { cardVariants } from "./cardVariants";
import {
  dropDownActiveItemVariants,
  dropDownItemVariants,
} from "./dropDownItemVariants";
import {
  dropDownContentVariants,
  dropDownScrollViewVariants,
} from "./dropDownVariants";
import pallete from "./pallete";
import snackbarVariants, { snackbarColors } from "./snackbarVariants";
import spacing from "./spacing";
import { tagColors, tagVariants } from "./tagVariants";
import textFieldVariants from "./textFieldVariants";
import textV from "./textVariants";
import {
  toggleButtonColors,
  toggleButtonSize,
  toggleButtonVariant,
} from "./toggleButtonGroupVariants";
import { RTheme } from "./types";

export const baseTheme = {
  colors: {
    primary: pallete.brand.primary,
    secondary: pallete.brand.black,
    mainBackground: pallete.grayscale.white,
    lightText: pallete.grayscale.white,
    disabledBackground: pallete.grayscale[300],
    disabledText: pallete.grayscale[200],
    ...buttonVariantColors,
    defaultBackground: pallete.grayscale.white,
    paperThemePrimary: pallete.brand.primary,
    paperThemeAccent: pallete.brand.primary,
    paperThemeDisabled: pallete.grayscale[300],
    paperThemePlaceholder: pallete.grayscale[200],
    tabBarActiveTint: pallete.brand.primary,
    tabBarInactiveTint: pallete.grayscale.black,
    navigationBackground: pallete.grayscale.white,
    navigationPrimary: pallete.brand.primary,
    notSelectedText: pallete.grayscale[200],
    selectedText: pallete.grayscale.black,
    defaultBorder: pallete.grayscale[300],
    openedBorder: pallete.grayscale[100],
    selectedItem: pallete.grayscale[400],
    notSelectedItem: pallete.grayscale.white,
    defaultCardBackground: pallete.grayscale.white,
    KPICard: pallete.grayscale.white,
    subKPICard: pallete.grayscale[300],
    pointsBackground: pallete.shades[500],
    shadowColor: pallete.grayscale.trueBlack,
    headerBackground: pallete.grayscale.white,
    searchBackground: pallete.grayscale[400],
    backSearchIcon: pallete.grayscale[100],
    backSearchText: pallete.grayscale[100],
    searchInputIcon: pallete.grayscale.black,
    searchInputPlaceholder: pallete.grayscale.black,
    accordionIcon: pallete.grayscale.black,
    accordionTitleBackground: pallete.shades[500],
    photoCounterBadgeBackground: pallete.grayscale.white,
    photoCounterBadgeText: pallete.grayscale[100],
    ...tagColors,
    propertyTitle: pallete.grayscale.black,
    propertyHyperlink: pallete.grayscale[100],
    tabTextActive: pallete.brand.primary,
    tabTextInactive: pallete.grayscale[100],
    amenityLabel: pallete.grayscale[100],
    uncheckedCheckbox: pallete.grayscale[300],
    uncheckedRadioButton: pallete.grayscale[300],
    label: pallete.grayscale.black,
    labelError: pallete.semantic.error,
    textFieldNotEditable: pallete.grayscale[100],
    textField: pallete.grayscale.black,
    textFieldPlaceholder: pallete.grayscale[100],
    infoTextValue: pallete.brand.black,
    dayCalendarBackground: pallete.grayscale.white,
    dayCalendarActiveBackground: pallete.shades[200],
    dayCalendarTextColor: pallete.grayscale.black,
    dayCalendarActiveTextColor: pallete.grayscale.white,
    dayCalendarSelectorActiveMonth: pallete.grayscale.black,
    dayCalendarSelectorMonth: pallete.grayscale[100],
    dividerColor: pallete.grayscale[200],
    dividerLightColor: pallete.grayscale[300],
    scheduleCardBackground: pallete.grayscale.white,
    scheduleCardOpenedBackground: pallete.grayscale[400],
    similarPropertyCardIcon: pallete.brand.primary,
    similarPropertyCardSecondaryText: pallete.grayscale[100],
    propertyCardBackground: pallete.grayscale.white,
    similarPropertiesCarouselBackground: pallete.grayscale[400],
    modalBackground: pallete.grayscale.white,
    modalCloseIcon: pallete.brand.black,
    textInputBoxBorder: pallete.brand.black,
    ...snackbarColors,
    propertyDetailItemLabel: pallete.grayscale[100],
    rootPropertyNavigationHeader: pallete.grayscale.white,
    calendarActivityIndicator: pallete.brand.black,
    goBackFloatingButtonDetails: pallete.grayscale[200],
    goBackFloatingButtonBackground: pallete.grayscale.white,
    postVisitOptionSuccess: pallete.semantic.success,
    postVisitOptionWarning: pallete.semantic.warning,
    postVisitOptionError: pallete.semantic.error,
    postVisitOptionBackground: pallete.grayscale.white,
    mapPolylineColor: pallete.semantic.info,
    modalBackDrop: pallete.grayscale.trueBlack,
    applicantCardBorder: pallete.brand.primary,
    applicantCardHeader: pallete.shades[500],
    loadingDialogBackground: pallete.others.transparent[0],
    notificationBackground: pallete.others.transparent[1],
    tagIcon: pallete.grayscale.white,
    formErrorLabel: pallete.brand.primary,
    checkboxLabel: pallete.brand.black,
    checkboxErrorLabel: pallete.brand.primary,
    radioButtonLabel: pallete.brand.black,
    radioButtonErrorLabel: pallete.brand.primary,
    infoCardBackground: pallete.grayscale[100],
    sectionHeaderIcon: pallete.grayscale.white,
    sectionHeaderText: pallete.grayscale.white,
    outlineTextFieldBorder: pallete.grayscale[200],
    outlinedTextFieldLabel: pallete.grayscale[100],
    standardTextFieldLabel: pallete.grayscale.black,
    spaceCardBorder: pallete.grayscale[200],
    spaceCardBackground: pallete.grayscale[400],
    spacePercentageText: pallete.grayscale.white,
    spacePercentageBackgroundComplete: pallete.semantic.success,
    spacePercentageBackgroundIncomplete: pallete.semantic.warning,
    spaceArrowIcon: pallete.grayscale.black,
    sendInspectionBackground: pallete.others.transparent[2],
    activeIcon: pallete.brand.primary,
    inactiveIcon: pallete.grayscale[300],
    gradientTransparent: pallete.others.transparent[3],
    dashedCardBorder: pallete.grayscale[200],
    fileCardBorder: pallete.semantic.success,
    fileCardBackground: pallete.others.transparent[4],
    cloudUploadIcon: pallete.grayscale.black,
    sectionTitle: pallete.grayscale.white,
    startAdornmentText: pallete.grayscale[100],
    endAdornmentText: pallete.grayscale[100],
    applicantProfileScreenLoading: pallete.brand.primary,
    applicantProfileScreenErrorIcon: pallete.brand.primary,
    salesNegotiationsBadgeBackground: pallete.grayscale[300],
    salesNegotiationsCardNewBackground: pallete.shades[500],
    salesNegotiationsCardAddress: pallete.grayscale[100],
    salesNegotiationsPropertyIdTagBackground: pallete.shades[300],
    spaceFieldCardBorder: pallete.brand.primary,
    propertyCardDivider: pallete.grayscale[300],
    propertyCardSecondHierarchy: pallete.grayscale[100],
    propertyCardPropertyDetailsIcons: pallete.brand.black,
    selectedPropertyMarker: pallete.brand.black,
    propertyMarker: pallete.grayscale.white,
    clusterBackground: pallete.grayscale.white,
    clusterText: pallete.brand.black,
    phoneContainerText: pallete.grayscale[100],
    emailContainerText: pallete.grayscale[100],
    availabilityDateAlertSuccess: pallete.semantic.success,
    availabilityDateAlert: pallete.brand.primary,
    ...toggleButtonColors,
  },
  spacing,
  breakpoints: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
  },
};

const textVariants = { ...textV.mobile };

const variantsTheme = {
  buttonVariants,
  buttonDisabledVariants,
  buttonDropDownOpenedVariants,
  buttonSizeVariants,
  dropDownItemVariants,
  dropDownActiveItemVariants,
  dropDownContentVariants,
  dropDownScrollViewVariants,
  cardVariants,
  tagVariants,
  textVariants,
  snackbarVariants,
  textFieldVariants,
  toggleButtonSize,
  toggleButtonVariant,
};

const theme = createTheme({ ...baseTheme, ...variantsTheme });



export type Colors = Partial<keyof Omit<RTheme["colors"], "defaults">>;

export type TextVariant = Partial<keyof RTheme["textVariants"]>;

export type RBaseTheme = typeof baseTheme;

export default theme;
