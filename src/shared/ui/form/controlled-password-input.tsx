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

import { PasswordInput } from '@/shared/ui';

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
}

export const ControlledPasswordInput = <
  TFormValues extends FieldValues = FieldValues
>({
  name,
  label,
  placeholder,
  classes,
  control,
  ...props
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
          <PasswordInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={Boolean(error)}
            placeholder={placeholder}
            helperText={error?.message}
            className={clsx(classes?.textField, 'w-full')}
            {...props}
          />
        )}
        name={name}
        control={control}
      />
    </>
  );
};
