import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    position: relative;
    @media screen and (max-width: 425px) {
      flex-direction: column;
    }
    .navs {
      position: absolute;
      bottom: -2.5rem;
      left: 50%;
      display: flex;
      padding: 0.5rem 0.4rem 0.4rem 0.4rem;
      border: 1px solid #999;
      border-radius: 8px;
      @media screen and (max-width: 425px) {
        bottom: -3.5rem;
      }
      .nav {
        cursor: pointer;
        background: none;
        outline: none;
        border: none;
        padding: 0 0.6rem;
        &[disabled] {
          filter: opacity(0.4);
        }
        &.prev {
        }
        &.next {
          img {
            transform: rotate(180deg);
          }
        }
        &.home {
          border-left: 1px solid rgba(2, 2, 2, 0.1);
          border-right: 1px solid rgba(2, 2, 2, 0.1);
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      margin-right: 2rem;
      position: relative;
      max-width: 10rem;
      @media screen and (max-width: 425px) {
        margin-right: 0;
      }
      .seq {
        font-weight: 800;
        position: absolute;
        top: 0.4rem;
        left: -2.6rem;
        font-size: 1.2rem;
        padding: 0.4rem;
        border-radius: 50%;
        border: 2px solid #d2b300;
        width: 2rem;
        height: 2rem;
        background: #dbb864;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      hgroup {
        margin-bottom: 1rem;
        /* border-left: 1px solid #999; */
        line-height: 1.2;
        min-width: 6rem;
        h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }
        h2 {
          font-size: 1.2rem;
          color: #555;
        }
      }
      .desc {
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: #666;
      }
    }
    .right {
      width: 14rem;
      @media screen and (max-width: 425px) {
        margin-top: 1rem;
      }
      img {
        width: 100%;
      }
    }
  }
`;

export default StyledWrapper;
