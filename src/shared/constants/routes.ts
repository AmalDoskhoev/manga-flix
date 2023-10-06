export enum RoutesMap {
  Auth = 'auth',
  Login = 'login',
  Settings = 'settings',
  Profile = 'profile',
  Table = 'table'
}

export const routes = {
  // Аутентификация
  login: `/${RoutesMap.Auth}/${RoutesMap.Login}`,

  // Таблица
  table: `/${RoutesMap.Table}`,

  // Настройки
  settings: `/${RoutesMap.Settings}`,

  // Профиль
  profile: `/${RoutesMap.Profile}`
};
