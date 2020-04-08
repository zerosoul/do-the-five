import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ani from 'animejs';

import Data from '../../assets/data.json';
import ImageBack from '../../assets/img/back.svg';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ol {
    line-height: 3.8rem;
    font-size: 1.8rem;
    li {
      a {
        text-decoration: none;
        color: #222;
        display: flex;
        align-items: center;
        .head {
          font-weight: 800;
          margin-right: 0.4rem;
          border-radius: 50%;
          border: 1px solid #ccc;
          width: 3rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .intro {
          color: #666;
          font-size: 1.2rem;
        }
        .forward {
          transform: rotate(180deg);
          margin-left: 0.8rem;
          width: 1.2rem;
        }
      }
    }
  }
`;
export default function List() {
  const list = useRef(null);
  useEffect(() => {
    if (list) {
      const items = list.current.querySelectorAll('li');
      ani({
        targets: items,
        opacity: [0, 1],
        translateX: [-200, 0],
        delay: (ele, i) => {
          return i * 100;
        }
      });
    }
  }, []);
  return (
    <StyledWrapper>
      <ol ref={list}>
        {Data.map((d) => {
          return (
            <li key={d.pos}>
              <Link to={`/${d.pos}`}>
                <h3 className="head">{d.header}</h3>
                <span className="intro">{d.intro}</span>
                <img className="forward" src={ImageBack} alt="forward" />
              </Link>
            </li>
          );
        })}
      </ol>
    </StyledWrapper>
  );
}
