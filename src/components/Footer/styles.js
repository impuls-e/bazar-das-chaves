import styled from 'styled-components'


export const Container = styled.section`


  padding: 6vh 4vw 10vh;
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
	

	p {
		font-size: 1rem;

		span {
			color: #747474;
			
		}

		a {
			font-size: 1rem;
			color: #747474;
			transition: 0.2s all ease-in-out;

			&:hover {
				color: var(--primary);
			}
		}
		
	}

`