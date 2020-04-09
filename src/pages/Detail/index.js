import React, { useRef, useEffect, useState } from 'react';
import ani from 'animejs';

import StyledWrapper from './styled';
import Header from './Header';
import Footer from '../../containers/Footer';
import ImageBack from '../../assets/img/back.svg';
import ImageHome from '../../assets/img/home.svg';
import Data from '../../assets/data.json';
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  const { pos } = useParams();
  const initItem = Data.find((d) => d.pos === pos);
  const initSeq = Data.findIndex((d) => d.pos === pos) + 1;
  const [seq, setSeq] = useState(initSeq);
  const [currItem, setCurrItem] = useState(initItem);
  const wrapper = useRef(null);
  const handleNextClick = () => {
    setSeq((prev) => Number(prev) + 1);
  };
  const handlePrevClick = () => {
    setSeq((prev) => Number(prev) - 1);
  };
  useEffect(() => {
    setCurrItem(Data[seq - 1]);
    const tl = ani.timeline({
      easing: 'easeOutExpo',
      duration: 400
    });
    const seqEle = wrapper.current.querySelector('.left .seq');
    const txt = wrapper.current.querySelector('.left hgroup');
    const desc = wrapper.current.querySelector('.left .desc');
    const pic = wrapper.current.querySelector('.right');
    tl.add({
      targets: seqEle,

      scale: [2, 1]
    })
      .add({
        targets: txt,
        opacity: [0, 1],
        scale: [2, 1]
      })
      .add({
        targets: desc,
        opacity: [0, 1],
        scale: [0, 1]
      })
      .add({
        targets: pic,
        opacity: [0, 1],
        scale: [0, 1]
      });
    tl.play();
    return () => {
      tl.pause();
    };
  }, [seq]);
  const { header, intro, pic, desc } = currItem;
  return (
    <StyledWrapper ref={wrapper}>
      <Header />
      <div className="main">
        <div className="left">
          <em className="seq">{seq}</em>
          <hgroup>
            <h1>{header}</h1>
            <h2>{intro}</h2>
          </hgroup>
          <p className="desc">{desc}</p>
        </div>
        <div className="right">
          <img src={`imgs/${pic}`} alt="tip pic" />
        </div>
        <div className="navs">
          <button disabled={seq == 1} onClick={handlePrevClick} className="nav prev">
            <img src={ImageBack} alt="prev image" />
          </button>
          <Link to="/" className="nav home">
            <img src={ImageHome} alt="home image" />
          </Link>
          <button disabled={seq == Data.length} onClick={handleNextClick} className="nav next">
            <img src={ImageBack} alt="next image" />
          </button>
        </div>
      </div>
      <Footer />
    </StyledWrapper>
  );
}
