import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  selectLoading,
  selectSetLoading,
  selectSetUserData,
  useUserStore
} from '@/app/stores';
import { routes, TOKEN_KEY } from '@/shared';
import * as Api from '@/shared/api';

interface ReturnProps {
  isLoading: boolean;
}

/**
 * Хук для проверки авторизации
 *
 * @return {object} Возвращает объект с логикой авторизации
 */
export const useCheckAuth = (): ReturnProps => {
  const navigate = useNavigate();
  const location = useLocation();

  const setLoading = useUserStore(selectSetLoading);
  const setUserData = useUserStore(selectSetUserData);
  const isLoading = useUserStore(selectLoading);

  async function checkAuth() {
    try {
      // Запрашиваем данные пользователя
      const data = await Api.login.getProfile();

      // Сохраняем данные в хранилище, если запрос выполнился успешно
      setUserData(data);

      // Если посетитель не находится в разделе auth, то перенаправляем на ленту
      // В ином случае оставляем его на той же странице
      if (location.pathname.includes('auth')) {
        navigate(routes.table);
      }
    } catch (error) {
      // Редирект на форму авторизации, если пользователь не авторизован и удаление токена
      navigate(routes.login);
      localStorage.removeItem(TOKEN_KEY);
    } finally {
      // Завершаем загрузку
      setLoading(false);
    }
  }

  React.useEffect(() => {
    // Если нет токена:
    // 1. Переводим на форму авторизации вне зависимости где посетитель
    // 2. И скрываем главную загрузку
    if (!localStorage.getItem(TOKEN_KEY)) {
      navigate(routes.login);
      setTimeout(() => {
        setLoading(false);
      });
      return;
    }

    checkAuth();
  }, []);

  return { isLoading };
};
