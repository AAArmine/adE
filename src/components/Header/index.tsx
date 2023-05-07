import type { FC } from 'react';
import React from 'react';

import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

import { LogoSearch } from './LogoSearch';
import { Navbar } from './Navbar';

export const Header: FC = () => {
  return (
    <>
      <section
        style={{
          position: 'sticky',
          top: '0',
          backgroundColor: 'white',
          zIndex: '100',
        }}
      >
        <CustomWrapper>
          <LogoSearch />
        </CustomWrapper>
      </section>
      <section style={{ backgroundColor: 'white' }}>
        <CustomWrapper>
          <Navbar />
        </CustomWrapper>
      </section>
    </>
  );
};
