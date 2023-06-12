import { IFormError, IValidateForm } from "../../../interfaces";

export const validateForm: IValidateForm = ({ fees, percentage, total }) => {
  const errors: IFormError = {};

  if (total < 0) {
    errors.total = "Total must be greater than 0";
  }

  if (!percentage) {
    errors.total = "Es requerido";
  } else if (percentage < 0 || percentage > 100) {
    errors.percentage = "Percentage must be between 0 and 100";
  }

  if (!fees) {
    errors.total = "Es requerido";
  } else if (fees < 0) {
    errors.fees = "Fees must be greater than or equal to 0";
  }

  return errors;
};