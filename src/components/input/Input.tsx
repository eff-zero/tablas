import { ChangeEvent } from 'react';

interface iInput {
  name: string;
  label: string;
  type?: string;
  id?: string;
  value?: number;
  error?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ name, type, label, id, error, handleChange, value }: iInput) {
  return (
    <div className='form_input_group'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <p style={{ color: 'red' }}>{error && `* ${error}`}</p>
    </div>
  );
}

export default Input;
