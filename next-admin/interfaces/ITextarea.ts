import { UseFormRegister } from 'react-hook-form';

export interface ITextarea {
  title: string,
  placeholder: string,
  initValue: string,
  fieldName: string,
  register: UseFormRegister<any>,
  required: boolean
}
