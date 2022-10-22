import styled from 'styled-components';
import Share from '../components/Share';
const StyledWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  border-top: 1px solid #ccc;
  padding: 0.4rem 0;
  .copyright {
    font-size: 0.8rem;
    color: #999;
    margin-right: 1rem;
    a {
      padding: 0 0.4rem;
    }
  }
`;
export default function Header() {
  return (
    <StyledWrapper>
      <Share />
      <p className="copyright">
        © Created By
        <a href="https://yangerxiao.com/" target="_blank" rel="noopener noreferrer">
          Tristan
        </a>
        & Inspired by
        <a
          href="https://chrome.google.com/webstore/detail/coronavirus-tips-new-tab/konbgoghafhpdebefnmcbbmbgoakjfkp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Extension: Do the five
        </a>
      </p>
    </StyledWrapper>
  );
}
