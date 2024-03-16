"use client";

import { useMyContext } from '@/contexts/ContextApi';
import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import useNavbar from '@/hooks/useNavbar';
const Navbar = () => {
  const {palette} = useMyContext();
  const [scroll, scrollp] = useNavbar();
  return (
    <Box sx={{
      backgroundColor: palette.background,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      minWidth:'100vw',
      minHeight:'75px',
      boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)',
      visibility: scroll  ? 'hidden' : 'visible',
      transition: scroll ? 'visibility 0.2s, opacity 0.2s linear' : '0.2s',
      opacity: scroll ? '0' : '1',
    }}>
      <Box sx={{
        minWidth: '90vw',
        minHeight:'75px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Text color={palette.text} fontSize='2rem'>
            Aqua Harvest 2.0
        </Text>
      </Box>
    </Box>
  )
}

export default Navbar