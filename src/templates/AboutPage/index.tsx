import React from 'react';

import { Advantages } from './components/Advantages';
import { Back } from './components/Back';
import { Statistics } from './components/Statistics';

export const AboutPage = () => {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <Back />
      <Statistics />
      <Advantages />
    </section>
  );
};
