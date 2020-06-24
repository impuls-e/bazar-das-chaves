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
export const FooterContent = styled.div`
  padding: 6vh 4vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1450px;
  margin: 0 auto;
  p {
    span {
      color: #747474;
    }

    a {
      color: #747474;
      transition: 0.2s all ease-in-out;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
