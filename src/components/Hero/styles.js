import styled from 'styled-components'


export const Container = styled.div`


  padding: 25vh 4vw 5vh;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient( 100deg,#42290085,#000000c9 22.71% );

  h1 {
    font-size: 3rem;
    text-align: center;
    line-height: 32px;
    color: var(--white);
    text-shadow: #000 1px 1px 1px;
    margin-bottom: 2vh;
  }
  div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    h2 {
      max-width: 50vw;
      font-size: 1.5rem;
      text-align: right;
      color: var(--white);
      font-weight: 400;
    }
    .gatsby-image-wrapper {
      position: absolute;
      top: 4vh;
      width: 20vh;
      max-width: 256px;
      opacity: 0.6;
      z-index: -1;
    }
  }
  
`