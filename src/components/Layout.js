import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <Box w='100%' >
        <Sidebar />
        <Box w='80%' ml='20%' bg='#FAFBFC'>
            <Header />
            <Box>
                { props.children }
            </Box>

        </Box>
    </Box>
  )
}

export default Layout