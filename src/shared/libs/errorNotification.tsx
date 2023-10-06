import { type AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { parseAxiosError } from '@/shared/libs/parseAxiosError';

export const errorNotification = (error: Error | unknown) => {
  const message = parseAxiosError(error as Error | AxiosError);

  const options = {
    autoClose: 5000,
    type: toast.TYPE.ERROR,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT
  };

  toast(message, options);
};
