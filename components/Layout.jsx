import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import wd from '../public/w-d_logo.png';
import { theme } from '../components/Theme';
import { styles } from '../utils/styles';

const Layout = ({
  children,
  title,
  description,
  selectedContact,
  selectedPortfolio,
  selectedAbout,
}) => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box>
      <Head>
        <title>{title ? `Whatsup Doc! | ${title}  ` : `Whatsup Doc!`}</title>
        <link rel='icon' type='image/x-icon' href='/w-d_logo_thumb.png' />
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          {/* HEADER */}
          <AppBar
            position='fixed'
            elevation={0}
            sx={{
              width: '100%',
              height: '5rem',
              background:
                'transparent linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
              opacity: 1,
              webkitBackdropFilter: 'blur(6px)',
              mozBackdropFilter: 'blur(6px)',
              backdropFilter: 'blur(6px)',
              boxShadow: '-2px 2px 5px 1px rgba(0,0,0,0.20)',
            }}
          >
            {/* Desktop Toolbar */}
            <Toolbar
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
                padding: '2rem 0',
              }}
            >
              <Box
                sx={{ flex: 1, padding: '0 0 0 2rem', cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                <Image src={wd} width={300} height={55} alt='Whatsup Doc!' />
              </Box>

              {/* NAV BUTTONS */}
              <Box
                sx={{
                  flex: 3,
                  display: 'flex',
                  justifyContent: 'end',
                  padding: '0',
                  cursor: 'pointer',
                  borderRight: '1px solid #000000',
                }}
              >
                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                  onClick={() => router.push('/')}
                >
                  Home
                </Typography>
                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                >
                  About us
                  <KeyboardArrowDownRoundedIcon
                    sx={{
                      color: '#666666',
                    }}
                  />
                </Typography>
                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                >
                  Plans
                  <KeyboardArrowDownRoundedIcon
                    sx={{
                      color: '#666666',
                    }}
                  />
                </Typography>
                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                  onClick={() => router.push('/faq')}
                >
                  FAQ
                </Typography>
                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                  onClick={() => router.push('/blog')}
                >
                  Blog
                </Typography>
              </Box>

              {/* Login/Sign Up */}
              <Box
                sx={{
                  flex: {md: 1.5, lg: 1},
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 1rem 0 0',
                  cursor: 'pointer',
                  height: '3rem',
                  width: '5rem',
                  borderRadius: '1rem',
                }}
              >
                <Typography
                  className='nav-action'
                  variant='medium'
                  sx={styles.navActionButton}
                  onClick={() => router.push('/blog')}
                >
                  Login
                </Typography>
                <Typography
                  className='nav-action'
                  variant='medium'
                  sx={styles.navActionButton}
                  onClick={() => router.push('/blog')}
                >
                  Register
                </Typography>
              </Box>
            </Toolbar>

            {/* Mobile Toolbar */}
            <Toolbar
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                padding: '2rem 0',
              }}
            >
              <Box
                sx={{ flex: 1, padding: '0 0 0 1rem', cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                <Image src={wd} width={200} height={40} alt='Whatsup Doc!' />
              </Box>
              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '8rem',
                  height: '3rem',
                  margin: '0 1rem 0 0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#000000',
                  background: 'transparent',
                  border: '1px solid rgba(14, 83, 148, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(14, 83, 148, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                  },
                }}
              >
                Sign up
              </Typography>

              <IconButton
                sx={{
                  color: '#838383',
                  padding: '0 1rem 0 0',
                }}
                onClick={menuOpenHandler}
                aria-label='open menu'
              >
                {menuOpen ? (
                  <CloseRoundedIcon
                    sx={{
                      fontSize: '2.5rem',
                    }}
                  />
                ) : (
                  <MenuRoundedIcon
                    sx={{
                      fontSize: '2.5rem',
                    }}
                  />
                )}
              </IconButton>
            </Toolbar>
            {/* Mobile Menu */}
            <Box
              sx={{
                display: { lg: 'none' },
                position: 'absolute',
                top: '5rem',
                width: '100%',
                height: '150vh',
                background: '#ffffff',
              }}
              className={`mobileMenu ${menuOpen}`}
            >
              <ListItem sx={{ display: 'flex', justifyContent: 'start' }}>
                <NextLink href='#' passHref>
                  <Typography
                    variant='bold'
                    sx={{
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: selectedAbout ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                    onClick={() => menuOpenHandler()}
                  >
                    Home
                  </Typography>
                </NextLink>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='#' passHref>
                  <Typography
                    variant='bold'
                    sx={{
                      // margin: 0,
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: selectedPortfolio ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                    onClick={() => menuOpenHandler()}
                  >
                    About Us
                  </Typography>
                </NextLink>
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    color: '#666666',
                    fontSize: '2rem',
                    margin: '0 5rem 0 0',
                  }}
                />
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='#' passHref>
                  <Typography
                    variant='bold'
                    sx={{
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: selectedContact ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    Plans
                  </Typography>
                </NextLink>
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    color: '#666666',
                    fontSize: '2rem',
                    margin: '0 5rem 0 0',
                  }}
                />
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'start' }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='#' passHref>
                  <Typography
                    variant='bold'
                    sx={{
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: selectedContact ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    FAQ
                  </Typography>
                </NextLink>
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'start' }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='#' passHref>
                  <Typography
                    variant='bold'
                    sx={{
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: selectedContact ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    Blog
                  </Typography>
                </NextLink>
              </ListItem>
              <ListItem>
                <div style={{ height: '5rem' }} />
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'center' }}
                onClick={() => menuOpenHandler()}
              >
                <Typography
                  variant='medium'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '8rem',
                    height: '3rem',
                    margin: '0 1rem 0 0',
                    padding: '.5rem',
                    borderRadius: '.5rem',
                    color: '#000000',
                    background: 'transparent',
                    border: '1px solid rgba(14, 83, 148, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'rgba(14, 83, 148, 1)',
                      color: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  Log in
                </Typography>
              </ListItem>
            </Box>
          </AppBar>

          {/* BODY */}
          <Box
            sx={{
              minHeight: '38rem',
            }}
          >
            {children}

          </Box>
        </ThemeProvider>
      </CssBaseline>
    </Box>
  );
};

export default Layout;
