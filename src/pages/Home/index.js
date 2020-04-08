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
  padding: 3rem 0;
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
