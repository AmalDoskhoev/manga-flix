import React from 'react';

import { LoginForm } from '@/widgets/login-form';

import styles from './login.module.scss';

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src="/images/intro.jpg" alt="intro" className={styles.intro} />
      <div className={styles.container}>
        <LoginForm />
      </div>
    </div>
  );
};
