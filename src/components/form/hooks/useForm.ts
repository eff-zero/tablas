import React, { ChangeEvent, useState } from "react";
import { IForm, IFormError } from "../../../interfaces";
import { validateForm } from "..";

const initialState: IForm = {
  total: 0,
  percentage: 0,
  fees: 0
};

export const useForm = (): {
  form: IForm;
  errors: IFormError;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
} => {
  const [form, setForm] = useState<IForm>(initialState);
  const [errors, setErrors] = useState<IFormError>({});


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const dataForm = {...form, [name]: value}
    setForm(dataForm);
    setErrors(validateForm(dataForm))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    setErrors(formErrors);
  };

  return { form, errors, handleChange, handleSubmit };
};