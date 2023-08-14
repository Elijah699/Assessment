import React from 'react';
import {
  Box,
  Text,
  Img,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { NavLink as Router } from 'react-router-dom';
import token from '../assets/images/tokenization 1.png';
import notification from '../assets/images/notification.png';
import line from '../assets/images/line.png';
import avatar from '../assets/images/avatar.png';

const Header = () => {
  return (
    <Box
      bg="#ffffff"
      border="1px solid"
      borderLeftColor="#E1E2E6"
      borderBottomColor="#E1E2E6"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        // maxW={{ base: '100%', md: '90%', xl: '1200px' }}
        p={{ base: '1rem 2rem', md: '2rem 2rem', xl: '2rem 2rem' }}
        w="100%"
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">CoverLetter</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Router} isCurrentPage>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box display="flex" gap="15px">
          <Box display="flex" gap="5px" flexDirection="row" alignItems="center">
            <Text>Credit Left:</Text>
            <Text as="span">10</Text>
            <Img src={token} alt="token" />
          </Box>
          <Box p="4px 10px" borderRadius="10px" bg="#EEEFF0" color="#3F4E72">
            Free Plan
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="10px"
          >
            <Img src={notification} alt="notification" />
            <Img src={line} alt="line" />
            <Img src={avatar} alt="avatar" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
