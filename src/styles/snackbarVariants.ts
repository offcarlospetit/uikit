import { createBoxVariant } from "./createVariants";
import pallete from "./pallete";

export const snackbarColors = {
  snackbarErrorBackground: pallete.semantic.error,
  snackbarWarningBackground: pallete.semantic.warning,
  snackbarSuccessBackground: pallete.semantic.success,
  errorSnackbarText: pallete.grayscale.white,
  warningSnackbarText: pallete.grayscale.black,
  successSnackbarText: pallete.grayscale.white,
};

const snackbarVariants = createBoxVariant({
  error: {
    backgroundColor: "snackbarErrorBackground",
  },
  warning: {
    backgroundColor: "snackbarWarningBackground",
  },
  success: {
    backgroundColor: "snackbarSuccessBackground",
  },
});

export default snackbarVariants;
