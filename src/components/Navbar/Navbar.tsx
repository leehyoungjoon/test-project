'use client';

import React, { useState } from 'react';

import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

import TopNav from './fragment/TopNav';
import NavMenuTitle from './fragment/NavMenuTitle';

const Navbar = () => {
  return (
    <Container>
      <TopNav />
      <NavMenuTitle />
    </Container>
  );
};

export default Navbar;

const Container = styled.nav``;
