import styled from 'styled-components'


export const Container = styled.section`


  padding: 6vh 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1919;
	color: var(--white);

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