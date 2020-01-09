import React from 'react';
import ThemeToggle from './theme-toggle';
import { ThemeToggleIcon } from '../theme-toggle-icon/theme-toggle-icon';
import moon from '../../../assets/moon.png';
import sun from '../../../assets/sun.png';

export default {
  title: 'Atoms|Theme toggle',
  component: ThemeToggle,
};

export const withoutIcons = () => {
  return <ThemeToggle />;
};

export const withIcons = () => {
  return (
    <ThemeToggle
      icons={{
        checked: <ThemeToggleIcon src={moon} role="presentation" />,
        unchecked: <ThemeToggleIcon src={sun} role="presentation" />,
      }}
    />
  );
};
