import React from 'react';
import styled from 'styled-components';

const ThemeToggleImage = styled.img`
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

type ThemeToggleIconProps = {
  src: string;
};

export const ThemeToggleIcon: React.FC<ThemeToggleIconProps> = ({ src }) => {
  return <ThemeToggleImage src={src} />;
};

export default ThemeToggleIcon;
