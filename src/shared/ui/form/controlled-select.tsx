import { FormHelperText, InputLabel, type SelectProps } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import {
  type Control,
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type Path
} from 'react-hook-form';
import { Select } from 'ui-kit';

interface FormControllerProps<TFormValues extends FieldValues>
  extends Omit<SelectProps, 'classes'> {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
}

interface Props<TFormValues extends FieldValues>
  extends FormControllerProps<TFormValues> {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  helperText?: string;
  classes?: Partial<{
    labelInput: string;
    textField: string;
  }>;
  children?: React.ReactNode;
}

export const ControlledSelect = <
  TFormValues extends FieldValues = FieldValues
>({
  name,
  label,
  placeholder,
  classes,
  control,
  children,
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
          <>
            <Select
              value={value}
              // TODO: Поправить типизацию
              onChange={onChange as any}
              onBlur={onBlur}
              error={Boolean(error)}
              placeholder={placeholder}
              className={clsx(classes?.textField, 'w-full')}
              {...props}
            >
              {children}
            </Select>
            {error?.message ?? (
              <FormHelperText>{props.helperText}</FormHelperText>
            )}
          </>
        )}
        name={name}
        control={control}
      />
    </>
  );
};
