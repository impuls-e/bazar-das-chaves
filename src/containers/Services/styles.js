import styled from 'styled-components';

export const Container = styled.section`
	padding: 6vh 4vw;
	display: flex;
	flex-direction: column;
	background-color: #1b1919;
	color: var(--white);

	h3 {
		width: 100%;
		font-size: 2.5rem;
		font-weight: 700;
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
		}
		h4 {
			font-size: 2rem;
			margin-bottom: 1vh;
		}
		p {
			font-size: 1.2rem;
			margin-bottom: 4vh;
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
		div {
			width: 32%;
		}
	}
`;
