import { InputLabel } from '@mui/material';
import clsx from 'clsx';
import {
  type Control,
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type Path
} from 'react-hook-form';

import { PhoneInput } from '../phone-input';

interface FormControllerProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
}

interface Props<TFormValues extends FieldValues>
  extends FormControllerProps<TFormValues> {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  classes?: Partial<{
    labelInput: string;
    textField: string;
  }>;
  disabled?: boolean;
}

export const ControlledPhoneInput = <
  TFormValues extends FieldValues = FieldValues
>({
  name,
  label,
  placeholder,
  classes,
  control,
  disabled
}: Props<TFormValues>) => {
  return (
    <>
      {label && (
        <InputLabel className={clsx(classes?.labelInput, 'mb-2')}>
          {label}
        </InputLabel>
      )}
      <Controller
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error }
        }: {
          field: ControllerRenderProps<TFormValues, typeof name>;
          fieldState: ControllerFieldState;
        }) => (
          <PhoneInput
            // TODO: Поправить типизацию
            // eslint-disable-next-line
            // @ts-ignore
            onChangeValue={onChange}
            onBlur={onBlur}
            defaultValue={value}
            error={Boolean(error)}
            placeholder={placeholder}
            helperText={error?.message}
            className={clsx(classes?.textField, 'w-full')}
            disabled={disabled}
          />
        )}
        name={name}
        control={control}
      />
    </>
  );
};
