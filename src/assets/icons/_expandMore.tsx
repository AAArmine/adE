import type { FC } from 'react';
import React from 'react';

interface IconColor {
  color: string;
}
export const ExpandMore: FC<IconColor> = ({ color }) => (
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9023 0.220703L12.25 1.56836L6.5 7.31836L0.75 1.56836L2.09766 0.220703L6.5 4.62305L10.9023 0.220703Z"
      fill={color}
    />
  </svg>
);
