import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WeiboIcon,
  WeiboShareButton
} from 'react-share';
const StyledWrapper = styled.aside`
  padding: 0.4rem 0.8rem;
  display: flex;
  button {
    margin: 0 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const shareUrl = location.href;
export default function Header() {
  return (
    <StyledWrapper>
      <WeiboShareButton
        className="btn"
        url={shareUrl}
        title={`五件小事，一起对抗冠状病毒！`}
        image={`imgs/hand.png`}
      >
        <WeiboIcon size={32} round />
      </WeiboShareButton>
      <FacebookShareButton
        className="btn"
        url={shareUrl}
        quote={`Do the five to stop coronavirus `}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton className="btn" url={shareUrl} title={`Do the five to stop coronavirus`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </StyledWrapper>
  );
}
