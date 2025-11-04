import React from 'react';
import Header, { type HeaderProps } from '@/app/components/Header';

interface ContainerProps {
  children: React.ReactNode;
  headerOpt?: HeaderProps;
}

const Container = ({ children, headerOpt }: ContainerProps) => {
  return (
    <>
      {headerOpt && (
        <Header
          left={headerOpt.left}
          center={headerOpt.center}
          right={headerOpt.right}
          backButton={headerOpt.backButton}
        />
      )}
      {children}
    </>
  );
};

export default Container;
