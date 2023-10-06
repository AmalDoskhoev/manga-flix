import {
  toast as reactToast,
  type ToastPosition,
  type TypeOptions
} from 'react-toastify';

interface Props {
  message: string;
  closeBtn?: boolean;
  position?: ToastPosition;
  type?: TypeOptions;
  duration?: number;
}

export const notification = ({
  message,
  position = reactToast.POSITION.BOTTOM_LEFT,
  type = reactToast.TYPE.INFO,
  duration = 5000
}: Props) => {
  const options = {
    autoClose: duration,
    hideProgressBar: true,
    type,
    position
  };

  reactToast(message, options);
};
