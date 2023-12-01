import { Button } from '@mui/material';
import Head from 'next/head';
import Layout from 'src/layout/layout';

const IndexPage = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Home page</title>
      </Head> */}
      <Button>Home</Button>
    </Layout>
  );
};

export default IndexPage