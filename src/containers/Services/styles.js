import styled from 'styled-components'


export const Container = styled.section`


  padding: 10vh 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  
  h3 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 4vh
    }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 2vh;
    }
    h4 {
      font-size: 2rem;
      text-align: left;
      margin-bottom: 1vh;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 4vh;
    }
  }
  
`