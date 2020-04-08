import React from 'react';
import styled from 'styled-components';
import ImageHand from '../../assets/img/hand.svg';

const StyledWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 6.5rem;
    border-radius: 50%;
    border: 1px solid #bbb;
    padding: 0.5rem;
  }
  hgroup {
    margin: 0.6rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 0.6rem;
    }
    h2 {
      font-size: 1rem;
      color: #555;
    }
  }
`;
export default function Header() {
  return (
    <StyledWrapper>
      <img className="logo" src={ImageHand} alt="hand logo" />
      <hgroup>
        <h1>五件小事</h1>
        <h2>对抗冠状病毒</h2>
      </hgroup>
    </StyledWrapper>
  );
}
