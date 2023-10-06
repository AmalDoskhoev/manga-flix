import compose from 'compose-function';

import { withRouter } from './with-router';
import { withTheme } from './with-theme';
// import { withStore } from './withStore';

/**
 * @hoc Инициализирующая логика приложения
 */
export const withProviders = compose(withRouter, withTheme);
