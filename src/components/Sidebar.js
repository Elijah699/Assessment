import { Box, Img, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink as Router } from 'react-router-dom';
import logo from '../assets/images/coverai.png';
import Dashboard from './svg/Dashboard';
import CoverLetter from './svg/CoverLetter';
import Gift from './svg/Gift';
import Contacts from './svg/Contacts';
import JobTracker from './svg/JobTracker';
import InterviewPrep from './svg/InterviewPrep';
import Logout from './svg/Logout';
import GetExtension from './svg/GetExtension';
import Question from './svg/Question';
import Resume from './svg/Resume';



const Sidebar = () => {
    const linkStyles = ({ isActive }) => ({
      color: isActive ? '#563BDB' : '#060809',
      //   fontWeight: isActive ? 'bold' : 'normal',
      borderLeft: isActive ? '4px solid #563BDB' : 'none',
      borderRadius: isActive ? '4px' : 'none',
      backgroundColor: isActive ? '#EEEBFB' : 'transparent',
      fontSize: '14px',
      lineHeight: '21px',
      padding: '10px 20px',
      textDecoration: 'none',
      '&:hover': {
        color: '#3F4E72',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '21px',
        padding: '10px 20px',
        textDecoration: 'none',
      },
    });


  return (
    <Box
      w="20%"
      position="fixed"
      display="flex"
      flexDir="column"
      px="0.5rem"
      py={{ base: '1rem', md: '2rem', xl: '2rem' }}
      justifyContent="space-between"
      h="100%"
      border="1px solid"
      borderRightColor="#E1E2E6"
      bg="#FFFFFF"
    >
      <Box display="flex" flexDirection="column" gap="30px">
        <Box>
          <Img src={logo} alt="logo" />
        </Box>

        <Box>
          <Link
            as={Router}
            display="flex"
            gap="5px"
            alignItems="center"
            style={linkStyles}
            to="/"
          >
            <Dashboard />
            Dashboard
          </Link>
          <Link
            as={Router}
            display="flex"
            gap="5px"
            alignItems="center"
            style={linkStyles}
            to="/coverletter"
          >
            <CoverLetter />
            Coverletters
          </Link>
          <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/resume">
            <Resume />
            CV/Resume
          </Link>
          <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/interview">
            <InterviewPrep />
            Interview Prep
          </Link>
          <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/contacts">
            <Contacts />
            Contacts
          </Link>
          <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/job">
            <JobTracker />
            Job Tracker
          </Link>
        </Box>
      </Box>

      <Box>
        <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/extension">
          <GetExtension />
          Get Extension
        </Link>
        <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/refer">
          <Gift />
          Refer & Earn
        </Link>
        <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/support">
          <Question />
          Help & Support
        </Link>
        <Link as={Router} display="flex" gap='5px' alignItems='center' style={linkStyles} to="/logout">
          <Logout />
          Log out
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar