// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: Доработать типизацию [IMPORTANT]
import { type AutocompleteProps, InputLabel } from '@mui/material';
import { type ChipTypeMap } from '@mui/material/Chip';
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
import { Autocomplete, TextField } from 'ui-kit';

interface FormInputControllerProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  defaultValue?: string;
  control: Control<TFormValues>;
}

export interface AutocompleteOption {
  label: string;
  value: number | string;
}

interface Props<
  TFormValues extends FieldValues = FieldValues,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends FormInputControllerProps<TFormValues>,
    Omit<
      AutocompleteProps<Multiple, DisableClearable, FreeSolo, ChipComponent>,
      'classes' | 'renderInput'
    > {
  label?: string;
  placeholder?: string;
  multiple?: Multiple;
  freeSolo?: FreeSolo;
  chipComponent?: ChipComponent;
  disableClearable?: DisableClearable;
  options: readonly AutocompleteOption[];
  classes?: Partial<{
    labelInput: string;
    textField: string;
  }>;
}

const DEFAULT_GET_OPTION = (option: unknown) => option.title;

export const ControlledAutocomplete = <
  TFormValues extends FieldValues = FieldValues
>({
  name,
  label,
  placeholder,
  classes,
  control,
  options,
  getOptionLabel = DEFAULT_GET_OPTION,
  disableClearable = true,
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
          field: { onChange, onBlur, value, ref },
          fieldState: { error }
        }: {
          field: ControllerRenderProps<TFormValues, typeof name>;
          fieldState: ControllerFieldState;
        }) => (
          <Autocomplete
            onBlur={onBlur}
            disablePortal
            options={options}
            noOptionsText="Ничего не найдено"
            onChange={(event: any, newValue) => {
              onChange(newValue ? newValue.value : null);
            }}
            value={
              value
                ? options.find(obj => String(obj.value) === String(value))
                : null
            }
            renderInput={params => (
              <TextField
                {...params}
                error={Boolean(error)}
                helperText={error?.message}
                placeholder={placeholder}
                inputRef={ref}
              />
            )}
            disableClearable={disableClearable}
            {...props}
          />
        )}
        name={name}
        control={control}
      />
    </>
  );
};
