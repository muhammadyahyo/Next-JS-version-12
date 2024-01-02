import { Box } from '@mui/material'
import React from 'react'
import { Navbar, Footer } from 'src/components'
import { LayoutProps } from './layout.props'

const Layout = ({children}: LayoutProps): JSX.Element => {
  return <>
      <Navbar/>
      <Box minHeight={'90vh'} display={'flex'} flexDirection={'column'} sx={{backgroundColor: '#121113' }}>
        {children}
      </Box>
      <Footer/>
    </>
  
}

export default Layout