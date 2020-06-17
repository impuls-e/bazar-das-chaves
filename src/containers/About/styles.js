import styled from 'styled-components'


export const Container = styled.section`


  padding: 10vh 4vw;
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
  h3 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 4vh
    }

  p {
    font-size: 1.2rem;
    margin-bottom: 4vh;
  }

  aside {
    display: flex;


    .gatsby-image-wrapper {
      width: 70vw;
      opacity: 0.8;
    }
  }
  
`