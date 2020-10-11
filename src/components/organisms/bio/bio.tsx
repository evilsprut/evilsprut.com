import React from 'react';
import styled from 'styled-components';
import profilePic from '../../../assets/profile-pic.jpg';
import { rhythm } from '../../../utils/typography';

const Box = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2)};
`;

const Avatar = styled.img`
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  border-radius: 50%;
`;

const Title = styled.p`
  max-width: 310px;
`;

export const Bio: React.FC = () => {
  return (
    <Box>
      <Avatar src={profilePic} alt="evilsprut" />
      <Title>
        Personal blog by{' '}
        <a target="_blank" href="https://t.me/evilsprut">
          Aleksandr Bukhalo
        </a>
        . Smthng&nbsp;about my life
      </Title>
    </Box>
  );
};

export default Bio;
