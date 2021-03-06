import styled from "styled-components";

export const Container = styled.section`
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;
  color: var(--black);
`;

export const ServiceContent = styled.div`
  padding: 6vh 4vw;

  height: 100%;
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    margin-bottom: 4vh;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 2vh;
      max-height: 400px;
      background-color: var(--white);

      img {
        object-fit: contain !important;
      }
    }
    h4 {
      margin-bottom: 1vh;
    }
    p {
      margin-bottom: 4vh;
    }
  }

  @media (min-width: 765px) {
    flex-direction: row;
    flex-wrap: wrap;

    div {
      width: 46%;
    }
    div + div {
      margin: 0 0.5vw;
    }
  }
  @media (min-width: 1024px) {
    div {
      width: 32%;
    }
  }
`;
