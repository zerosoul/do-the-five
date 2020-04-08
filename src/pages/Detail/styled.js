import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  padding: 2rem;
  .left {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    position: relative;
    .seq {
      font-weight: 800;
      position: absolute;
      top: -4rem;
      left: -1rem;
      font-size: 1.2rem;
      padding: 0.4rem;
      border-radius: 50%;
      border: 1px solid #fff;
      width: 2rem;
      height: 2rem;
      background: red;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    hgroup {
      margin-bottom: 2rem;
      border-left: 1px solid #999;
      padding-left: 1rem;
      line-height: 1.2;
      min-width: 6rem;
      h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1.2rem;
        color: #555;
      }
    }

    .navs {
      position: absolute;
      bottom: -6rem;
      left: -1rem;
      display: flex;
      .nav {
        cursor: pointer;
        background: none;
        outline: none;
        border: none;
        &[disabled] {
          visibility: hidden;
        }
        &.prev {
        }
        &.next {
          img {
            transform: rotate(180deg);
          }
        }
        &.home {
          margin-right: 1rem;
        }
      }
    }
  }
  .right {
    width: 14rem;
    img {
      width: 100%;
    }
  }
`;

export default StyledWrapper;
