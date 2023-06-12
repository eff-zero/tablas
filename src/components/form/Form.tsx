import { useForm } from '.';
import Input from '../input/Input';
import './Form.css';

function Form() {
  const { form, handleChange, errors } = useForm();
  const isDisabled = !!Object.keys(errors).length

  return (
    <div className='form__container'>
      <form onSubmit={() => console.log('algo')}>
        <Input
          label='total'
          id='total'
          name='total'
          type='number'
          value={form.total}
          error={errors.total}
          handleChange={handleChange}
        />
        <Input
          label='Porcentaje'
          id='percentage'
          name='percentage'
          type='number'
          value={form.percentage}
          error={errors.percentage}
          handleChange={handleChange}
        />
        <Input
          label='Cuotas'
          id='fees'
          name='fees'
          type='number'
          value={form.fees}
          error={errors.fees}
          handleChange={handleChange}
        />

        <button type='submit' className='btn__submit' disabled={isDisabled}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
