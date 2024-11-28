import { useState, ChangeEvent, FocusEvent } from 'react';

type FormState<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  setError: (field: keyof T, message: string) => void;
  clearErrors: () => void;
  resetForm: () => void;
};

export function useForm<T>(initialValues: T): FormState<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;

    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      setError(name as keyof T, 'This field is required');
    } else {
      setError(name as keyof T, '');
    }
  };

  const setError = (field: keyof T, message: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
  };


  const clearErrors = () => {
    setErrors({});
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, handleBlur, setError, clearErrors, resetForm };
}
