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

export const PortfolioContent = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .insta {
    color: var(--black);
    font-size: 1.9rem;
    margin-left: 1vw;
    font-weight: 700;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: var(--primary);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 1vh;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.8;
      transition: 0.2s ease-in-out all;

      &:hover {
        opacity: 1;
        aside {
          span {
            opacity: 1;
          }
        }
      }
    }
  }

  @media (min-width: 765px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      width: 46%;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      flex-direction: row;
    }
    div {
      width: 32%;
    }
  }
`;

export const Insta = styled.aside`
  display: flex;
  position: absolute;
  color: var(--white);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out all;
    opacity: 0;

    svg {
      margin-right: 4px;
    }
    svg:last-child {
      margin-left: 4px;
    }
  }
  span + span {
    margin-left: 2vh;
  }
`;
