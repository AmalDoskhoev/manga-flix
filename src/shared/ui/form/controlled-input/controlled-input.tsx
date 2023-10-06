import { InputLabel, type TextFieldProps } from '@mui/material';
import clsx from 'clsx';
import {
  type Control,
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type Path
} from 'react-hook-form';
import { TextField } from 'ui-kit';

import styles from './controlled-input.module.scss';

interface FormControllerProps<TFormValues extends FieldValues>
  extends Omit<TextFieldProps, 'classes'> {
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

export const ControlledInput = <TFormValues extends FieldValues = FieldValues>({
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
          <TextField
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={Boolean(error)}
            placeholder={placeholder}
            FormHelperTextProps={{
              classes: {
                root: styles.helperText
              }
            }}
            className={clsx(classes?.textField, 'w-full')}
            {...props}
            helperText={error?.message ?? props.helperText}
          />
        )}
        name={name}
        control={control}
      />
    </>
  );
};
