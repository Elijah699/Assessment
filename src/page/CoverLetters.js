import React from 'react'
import { Box, Heading, Text, Img, Button } from '@chakra-ui/react'
import number from '../assets/images/numbers.png'

const CoverLetters = () => {
  return (
    <Box p={{ base: '1rem 2rem', md: '2rem 2rem', xl: '2rem 2rem' }}>
      <Box>
        <Heading my="0.5rem" as="h2">
          Hello, Chris!
        </Heading>
        <Text>It's time to land your next role. Let's get to it!</Text>
      </Box>

      <Box
        bg="#ffffff"
        borderRadius="16px"
        border="1px solid"
        my="2rem"
        borderColor="#e6e6e6"
        p="1rem 1rem"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          pb='1rem'
          borderBottom="1px solid #EAEDEF"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <Box>Getting Started</Box>
            <Box p="4px 10px" borderRadius="10px" bg="#EEEFF0" color="#3F4E72">
              Step 1 out of 4
            </Box>
          </Box>
          <Box>
            <Img src={number} alt="number" />
          </Box>
        </Box>

        <Box my="3.5rem">
          <Heading as="h6" textAlign="center" fontSize="16px">
            Get familiar with accountable
          </Heading>
          <Box fontSize="14px" width="40%" mx="auto" textAlign="center">
            Let’s get you started with Accountable through a simple walkthrough
            guide that explains how it works.
          </Box>

          <Box display="flex" justifyContent="center" mt="3rem" gap="10px">
            <Button
              bg="#563BDB"
              borderRadius="8px"
              fontSize="14px"
              color="#ffffff"
              p="18px 10px"
              _hover={{
                opacity: '0.8',
              }}
            >
              New CV/Resume
            </Button>
            <Button
              bg="transparent"
              borderRadius="8px"
              fontSize="14px"
              border="1px solid #563BDB"
              p="18px 10px"
              color="#563BDB"
              _hover={{
                backgroundColor: '#563BDB',
                color: '#ffffff',
              }}
            >
              New Coverletter
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CoverLetters;