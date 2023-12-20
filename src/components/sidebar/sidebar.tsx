import { Avatar, Box, Button, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import { format } from 'date-fns'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { navItems } from 'src/config/constants'

const Sidebar = () => {
  return (
    <>
    <Box width={'40%'} sx={{position: 'sticky', top: '100px'}}>
      <Box position={'sticky'} top={'100px'} sx={{transition: 'all 0.3s ease'}}>
        <Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'} >
        <Typography variant='h5'>
          Category
        </Typography>
        <Box sx={{display:'flex', flexDirection: 'column', marginTop: '20px'}}>
          {
            navItems.map(nav => (
              <Fragment key={nav.route}>
                <Button fullWidth  sx={{justifyContent: 'flex-start', height: '50px'}}>{nav.label}</Button>
                <Divider/>
              </Fragment>
            ))
          }
        </Box>
      </Box>

      <Box padding={'20px'} border={'1px solid gray'} marginTop={'20px'} borderRadius={'8px'}>
        <Typography variant='h5'>Latest blog</Typography>
        <Box sx={{display:'flex', flexDirection: 'column', marginTop: '20px'}}>
          {
            data.map(item => (
              <Fragment key={item.title}>
                <Box sx={{display: 'flex',gap: '20px', alignItems: 'center'}}>
                  <Image src={item.image} alt={item.title} width={100} height={100}  style={{objectFit: 'cover', borderRadius: '8px'}}/>
                  <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography variant='body1'>{item.title}</Typography>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                    <Avatar alt={item.author.name} src={item.author.image}/>
                    <Box>
                        <Typography variant={'body2'}>{item.author.name}</Typography>
                        <Box sx={{opacity:'0.6'}}> 
                            {format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read
                        </Box>
                    </Box>
                </Box>
                  </Box>
                </Box>
                <Divider light orientation="horizontal"  variant='fullWidth' sx={{marginTop:'20px'}}/>
              </Fragment>
            ))
          }
        </Box>
      </Box>
      </Box>
      

    </Box>

    </>
    
  )
}

export default Sidebar

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Latifov Muhammad Yahyo",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Latifov Muhammad Yahyo",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];