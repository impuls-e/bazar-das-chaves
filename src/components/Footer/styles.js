import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--black);
  color: var(--white);
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
