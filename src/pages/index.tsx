import { Box, Button } from '@mui/material';
import Head from 'next/head';
import { Content, Hero, Sidebar } from 'src/components';
import Layout from 'src/layout/layout';

const IndexPage = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Home page</title>
      </Head> */}
      <Hero/>
      <Box sx={{ display:'flex', gap:'20px' , padding:'20px', backgroundColor: '#0a0a0a',color:'white'}}>
        <Sidebar/>
        <Content/>
      </Box>
    </Layout>
  );
};

export default IndexPage