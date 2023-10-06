import React from 'react';

interface FormState {
  isSubmitted: boolean;
  isValid: boolean;
  isSubmitting: boolean;
}

export const useCheckDisabled = ({
  isSubmitted,
  isValid,
  isSubmitting
}: FormState) => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isSubmitting || (isSubmitted && !isValid)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isSubmitting, isSubmitted, isValid]);

  return isDisabled;
};
