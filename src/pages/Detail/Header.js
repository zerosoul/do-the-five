import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImageHand from '../../assets/img/hand.svg';

const StyledWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  .logo {
    width: 2.4rem;
    border-radius: 50%;
    border: 1px solid #bbb;
    padding: 0.3rem;
    position: absolute;
    left: 1rem;
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #666;
  }
`;
export default function Header() {
  return (
    <StyledWrapper>
      <Link to="/" className="logo">
        <img src={ImageHand} alt="hand logo" />
      </Link>
      <h1>五件小事：阻击冠状病毒</h1>
    </StyledWrapper>
  );
}
