import React from 'react';
import { ThemeToggleIcon } from './theme-toggle-icon';
import sun from '../../../assets/sun.png';

export default {
  title: 'Atoms|Theme toggle icon',
  component: ThemeToggleIcon,
};

export const main = () => {
  return <ThemeToggleIcon src={sun} />;
};
