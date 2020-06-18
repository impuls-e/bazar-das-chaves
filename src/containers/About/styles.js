import styled from 'styled-components'


export const Container = styled.section`


  padding: 6vh 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;

  div {
    h3 {
        width: 100%;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 4vh;
        text-align: center;
      }

    p {
      font-size: 1.2rem;
      margin-bottom: 4vh;
    }

  }
  aside {
    display: flex;


    .gatsby-image-wrapper {
      width: 70vw;
      opacity: 0.8;
      max-width: 400px;
    }
  }
  @media(min-width: 765px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      width:48%;
    }
    aside {
      width: 50%;
      justify-content: flex-end;
    }

  }
`