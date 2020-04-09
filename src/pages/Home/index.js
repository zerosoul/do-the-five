import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Footer from '../../containers/Footer';

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 2rem;
`;
export default function Home() {
  return (
    <StyledWrapper>
      <Header />
      <List />
      <Footer />
    </StyledWrapper>
  );
}
