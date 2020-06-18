import React from 'react';
import './styles.js';
import { Container } from './styles'

const Footer = () => {
	return (
		<Container 		
			data-sal="slide-up"
			data-sal-delay="300"
			data-sal-easing="ease"
			data-sal-duration="1000"
		>
			<p>© 2020 <span>Bazar das Chaves </span> | Por <a href="https://impuls-e.works">Impuls-e</a></p>
		</Container>
	);
}
export default Footer