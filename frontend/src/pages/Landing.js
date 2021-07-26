import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Anchor from '../components/elements/Anchor';

const StyledHero = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  padding-bottom: 15rem;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
        ellipse at bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 1%,
        ${({ theme }) => theme.primary} 100%
      ),
      url("../landing.jpg") no-repeat center scroll !important;
      z-index: 100000;
  > section h1 {
    color: white;
    font-weight: bold;
    color: ${({ theme }) => theme.onPrimary};
    font-size: 11vmin;
    letter-spacing: 0.01em;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

const Landing = () => {
    return (
      <StyledHero id="hero">
          <h1>Bitch Eating Crackers</h1>
            <Anchor styleP="primary">
              <Link to="/form">Complain</Link>
            </Anchor>
            <Anchor styleP="secondary">
              <Link to="/dashboard">Cry</Link>
            </Anchor>
      </StyledHero>
    );
}
 
export default Landing;

// CSS

      



// h1 {
  
// }
    

      
// button {
//   background: #098191;
//   transition: background ease .25s;
//   border-radius: 1px;
//   display: inline-block;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   margin: 0;
//   text-decoration: none;
//   color: #ffffff;
//   font-size: 1.2rem;
//   cursor: pointer;
//   text-align: center;
//   -webkit-appearance: none;
//   -moz-appearance: none;
// }
// button:hover {
//   background: #63b6b8
// }
// button:focus {
//   outline: 1px solid #fff;
//   outline-offset: -4px;
// }
    

// HTML

      
// <section class="masthead" role="img" aria-label="Image Description">
//   <h1>
//     The Hero Generator
//   </h1>
//     <button>
//       When a hero comes along
//     </button>
// </section>
    