import { Button } from '@mui/material';
import Head from 'next/head';
import { Hero } from 'src/components';
import Layout from 'src/layout/layout';

const IndexPage = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Home page</title>
      </Head> */}
      <Hero/>
    </Layout>
  );
};

export default IndexPage