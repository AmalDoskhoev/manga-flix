import axios from 'axios';

export const parseAxiosError = (error: Error): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message;
  }

  return error.message;
};
