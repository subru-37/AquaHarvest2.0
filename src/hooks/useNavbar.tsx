"use client";

import React from 'react';
import { useState, useEffect } from 'react';

export default function useNavbar() {
  const [scrollp, setScrollP] = useState<number>(window.scrollY);
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', navScrolled);
    function navScrolled() {
      setScrollP(window.scrollY);
      if (window.scrollY > scrollp) {
        setScroll(true);
        // console.log(scrollp,scroll)
      } else if (window.scrollY <= scrollp) {
        setScroll(false);
      }
        // console.log(scrollp, scroll)
    }
    return () => {
      window.removeEventListener('scroll', navScrolled);
    };
  }, [scrollp]);
  return [scroll, scrollp] as const;
}
