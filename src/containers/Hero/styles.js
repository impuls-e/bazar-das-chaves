import styled from 'styled-components';

export const Container = styled.section`
	padding: 25vh 4vw 5vh;
	height: 85vh;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background: linear-gradient(100deg, #42290085, #000000c9 22.71%);

	h1 {
		font-size: 3rem;
		text-align: center;
		line-height: 32px;
		color: var(--white);
		text-shadow: #000 1px 1px 1px;
		margin-bottom: 2vh;
		padding: 0 2vw;
		line-height: 36px;
	}
	div {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: flex-end;
		h2 {
			max-width: 65vw;
			font-size: 1.5rem;
			text-align: right;
			color: var(--white);
			font-weight: 400;
		}
		.gatsby-image-wrapper {
			position: absolute;
			top: 4vh;
			width: 20vh;
			max-width: 256px;
			opacity: 0.6;
			z-index: -1;
		}
	}
	@media (min-width: 765px) {
		div {
			h2 {
				max-width: 30vw;
			}
		}
	}
	@media (min-width: 1024px) {
		height: 100vh;
		background: linear-gradient(100deg, #42290085, transparent 22.71%);
		h1 {
			text-shadow: #000 1px 2px 5px;
		}
		div {
			h2 {
				max-width: 27vw;
			}
		}
	}
`;
