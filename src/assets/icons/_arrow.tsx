import type { FC } from 'react';
import React from 'react';

type ArrowProps = {
  color?: string;
};
export const Arrow: FC<ArrowProps> = ({ color }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 5L0.5 5M0.5 5L5 9.5M0.5 5L5 0.5"
      stroke={color || '#5C5D60'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
