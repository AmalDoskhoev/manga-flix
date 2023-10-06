import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { type AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import React, { type JSX } from 'react';
import { SideDownIcon } from 'ui-kit/assets/icons/24';

export const Autocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType<any> = 'div'
>(
  props: MuiAutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
): JSX.Element => {
  return <MuiAutocomplete {...props} popupIcon={<SideDownIcon />} />;
};
