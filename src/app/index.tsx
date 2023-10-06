import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

import { Routing } from '@/pages';
import { useCheckAuth, useInjectColors } from '@/shared/hooks';
import { AppLoader } from '@/shared/ui';

export const App = () => {
  const { isLoading } = useCheckAuth();
  useInjectColors();

  return (
    <div className="h-screen">
      <AppLoader visible={isLoading} />
      {!isLoading && <Routing />}
      <ToastContainer />
    </div>
  );
};
