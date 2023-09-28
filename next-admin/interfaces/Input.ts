import { FieldValues, UseFormRegister } from 'react-hook-form';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';

export interface ITextInput {
  title: string,
  placeholder: string,
  fieldName?: string | undefined,
  initValue?: string | undefined,
  register?: UseFormRegister<any>,
  change?: (value: string) => void,
  required?: boolean
}

export interface INumberInput {
  title: string,
  placeholder: string,
  fieldName: string,
  initValue: string | number,
  register: UseFormRegister<any>,
  required: boolean
}

export interface IFileLink {
  id?: number,
  original: string,
  desktop: string,
  mobile: string,
}

export interface IFileInput {
  title: string,
  fieldName: string,
  onChange: UseFormSetValue<FieldValues> | any,
  initValue: IFileLink[] | null,
  multiple?: boolean,
  required: boolean,
  setUploading: (value: boolean) => void,
  rowPositioned?: boolean
}

export interface IDateInput {
  title: string,
  placeholder: string,
  fieldName: string,
  initValue: string,
  register: UseFormRegister<any>,
  required: boolean
}

export interface IRadioInput {
  title: string,
  fieldName: string,
  initValue: boolean | number,
  register: UseFormRegister<any>,
  required: boolean
}

export interface IStepsInput {
  fieldName: string,
  initValue?: string,
  change?: (name: string, steps: string) => void,
}
