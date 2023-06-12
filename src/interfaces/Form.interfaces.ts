export interface IForm {
  total: number;
  percentage: number;
  fees: number;
}

export interface IFormError {
  total?: string;
  percentage?: string;
  fees?: string;
}

export interface IValidateForm {
  (form: IForm): IFormError;
}