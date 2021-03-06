import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>Página não encontrada.</h1>
    <p>Você entrou em uma página quen não existe. Tente outro endereço!</p>
  </Layout>
);

export default NotFoundPage;
