import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import thumb from '../public/w-d_logo_thumb.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import {
  AppBar,
  Box,
  Card,
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
import { apply_elevation } from './Animations';

const Layout = ({
  children,
  title,
  description,
  selectedHome,
  selectedAbout,
  selectedPlans,
  selectedFaq,
  selectedBlog
}) => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [applyElevation, setApplyElevation] = useState(false);
  const [showAboutSubMenuMobile, setShowAboutSubMenuMobile] = useState(false);
  const [showPlansSubMenuMobile, setShowPlansSubMenuMobile] = useState(false);
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [showPlansSubMenu, setShowPlansSubMenu] = useState(false);

   useEffect(() => {

     window.addEventListener('scroll', () => {
       apply_elevation(applyElevation, setApplyElevation)
       
     });
   }, []);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
    setShowAboutSubMenuMobile(false)
   setShowPlansSubMenuMobile(false)
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
            elevation={applyElevation ? 5 : 0}
            sx={{
              width: '100%',
              height: '5rem',
              background:
                'transparent linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
              opacity: 1,
              webkitBackdropFilter: 'blur(6px)',
              mozBackdropFilter: 'blur(6px)',
              backdropFilter: 'blur(6px)',
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
                  borderRight: '1px solid #0d2344',
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
                  className={`nav`}
                  variant='medium'
                  sx={styles.navButton}
                  onMouseEnter={() => setShowAboutSubMenu(true)}
                  onMouseLeave={() => setShowAboutSubMenu(false)}
                >
                  About us
                  {showAboutSubMenu ? (
                    <KeyboardArrowUpRoundedIcon
                      sx={{
                        color: '#0d2344',
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        color: '#0d2344',
                      }}
                    />
                  )}
                </Typography>

                {/* About Us Submenu Start */}
                <Box
                  sx={styles.about_submenu}
                  className={`about_submenu ${showAboutSubMenu}`}
                  onMouseEnter={() => setShowAboutSubMenu(true)}
                  onMouseLeave={() => setShowAboutSubMenu(false)}
                >
                  {/* Company menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '1.6rem',
                          left: '1.1rem',
                        }}
                      >
                        <Image
                          src={thumb}
                          width={20}
                          height={20}
                          alt='Whatsup Doc thumb'
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Our Company
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Learn our vision, mission, and what we stand for
                      </Typography>
                    </Box>
                  </ListItem>

                  {/* News menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <CampaignRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        News
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Get updates on the latest news about us
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Gallery menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <InsertPhotoRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Gallery
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Browse though our achievements in pictures
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Legal menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <GavelRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Legal
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Go through our Terms of Service and Privacy Policy
                      </Typography>
                    </Box>
                  </ListItem>
                </Box>
                {/* About Submenu End */}

                <Typography
                  className='nav'
                  variant='medium'
                  sx={styles.navButton}
                  onMouseEnter={() => setShowPlansSubMenu(true)}
                  onMouseLeave={() => setShowPlansSubMenu(false)}
                >
                  Plans
                  {showPlansSubMenu ? (
                    <KeyboardArrowUpRoundedIcon
                      sx={{
                        color: '#0d2344',
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        color: '#0d2344',
                      }}
                    />
                  )}
                </Typography>
                {/* Plans  Submenu Start */}
                <Box
                  sx={styles.plans_submenu}
                  className={`plans_submenu ${showPlansSubMenu}`}
                  onMouseEnter={() => setShowPlansSubMenu(true)}
                  onMouseLeave={() => setShowPlansSubMenu(false)}
                >
                  {/* Individual Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box sx={styles.menu_icon}>
                        <PersonRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Individual Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Affordable health plan that&apos;s right for you
                      </Typography>
                    </Box>
                  </ListItem>

                  {/* Family Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box sx={styles.menu_icon}>
                        <FamilyRestroomRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Family Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Suitable health plan for the whole family
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Corporate Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box sx={styles.menu_icon}>
                        <BusinessRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Corporate Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        The best health plan for your organization
                      </Typography>
                    </Box>
                  </ListItem>
                </Box>
                {/* Plans Submenu End */}
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
                  flex: { md: 1.5, lg: 1 },
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
                  color: '#0d2344',
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
                  color: '#0d2344',
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
                display: { md: 'none' },
                position: 'absolute',
                top: '5rem',
                width: '100%',
                height: '200vh',
                background: '#ffffff',
              }}
              className={`mobileMenu ${menuOpen}`}
            >
              <List
                className={`mobileMenuList ${menuOpen}`}
                sx={{ maxHeight: { xs: 700, sm: 700 }, overflowY: 'auto' }}
              >
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '0 0 0 0rem',
                  }}
                >
                  <NextLink href='#' passHref>
                    <Typography
                      variant='medium'
                      sx={{
                        cursor: 'pointer',
                        color: selectedHome ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
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
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '0 0 0 0rem',
                  }}
                  onClick={() => {
                    setShowAboutSubMenuMobile(!showAboutSubMenuMobile);
                    setShowPlansSubMenuMobile(false);
                  }}
                  className={`nav-about`}
                >
                  <NextLink href='#' passHref>
                    <Typography
                      variant='medium'
                      sx={{
                        cursor: 'pointer',
                        color: selectedAbout ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                      }}
                      // onClick={() => aboutMenuOpenHandler()}
                    >
                      About Us
                    </Typography>
                  </NextLink>
                  {showAboutSubMenuMobile ? (
                    <KeyboardArrowUpRoundedIcon
                      sx={{
                        color: selectedAbout ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                        fontSize: '1.5rem',
                        margin: '0 0 0 -1rem',
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        color: selectedAbout ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                        fontSize: '1.5rem',
                        margin: '0 0 0 -1rem',
                      }}
                    />
                  )}
                </ListItem>

                {/* About Us Mobile Sub Menu Start*/}
                <Box
                  sx={{
                    display: showAboutSubMenuMobile ? 'initial' : 'none',
                    left: '3rem',
                    top: '10rem',
                    width: '20rem',
                    background: '#fff',
                    borderRadius: '.5rem',
                    margin: '0',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 25px 1px rgba(0,0,0,0.10)',
                    zIndex: 1000,
                  }}
                  className={`submenu`}
                >
                  {/* Company menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '1.6rem',
                          left: '1.1rem',
                        }}
                      >
                        <Image
                          src={thumb}
                          width={20}
                          height={20}
                          alt='Whatsup Doc thumb'
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Our Company
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Learn our vision, mission, and what we stand for
                      </Typography>
                    </Box>
                  </ListItem>

                  {/* News menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <CampaignRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 0',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        News
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 3.3rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Get updates on the latest news about us
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Gallery menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <InsertPhotoRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Gallery
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 3.3rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Browse though our achievements in pictures
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Legal menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 .5rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <GavelRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Legal
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 .5rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Go through our Terms of Service and Privacy Policy.
                      </Typography>
                    </Box>
                  </ListItem>
                </Box>
                {/* About Mobile Submenu End */}

                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '0 0 0 0rem',
                  }}
                  onClick={() => {
                    setShowPlansSubMenuMobile(!showPlansSubMenuMobile);
                    setShowAboutSubMenuMobile(false);
                  }}
                  className={`nav-plans`}
                >
                  <NextLink href='#' passHref>
                    <Typography
                      variant='medium'
                      sx={{
                        cursor: 'pointer',
                        color: selectedPlans ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                      }}
                    >
                      Plans
                    </Typography>
                  </NextLink>
                  {showPlansSubMenuMobile ? (
                    <KeyboardArrowUpRoundedIcon
                      sx={{
                        color: selectedPlans ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                        fontSize: '1.5rem',
                        margin: '0 0 0 -1rem',
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        color: selectedPlans ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                        fontSize: '1.5rem',
                        margin: '0 0 0 -1rem',
                      }}
                    />
                  )}
                </ListItem>
                {/* Plans Mobile Sub Menu Start*/}
                <Box
                  sx={{
                    display: showPlansSubMenuMobile ? 'initial' : 'none',
                    left: '3rem',
                    top: '10rem',
                    width: '20rem',
                    background: '#fff',
                    borderRadius: '.5rem',
                    margin: '0',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 25px 1px rgba(0,0,0,0.10)',
                    zIndex: 1000,
                  }}
                  className={`submenu`}
                >
                  {/* Individual Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 -2rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box sx={styles.menu_icon}>
                        <PersonRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Individual Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Affordable health plan that&apos;s right for you
                      </Typography>
                    </Box>
                  </ListItem>
                  {/* Family Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 -2rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      />
                      <Box sx={styles.menu_icon}>
                        <PersonRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Family Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        Affordable health plan for the whole family
                      </Typography>
                    </Box>
                  </ListItem>

                  {/* Corporate Health Plan menu item */}
                  <ListItem sx={styles.menu_listitem} className={`menuList`}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '0 -2rem 0 0',
                      }}
                    >
                      <Box
                        sx={styles.menu_icon_bg}
                        style={{ color: '#7533c5' }}
                        className={`menuListItemIcon`}
                      ></Box>
                      <Box sx={styles.menu_icon}>
                        <BusinessRoundedIcon sx={{ color: '#ffa500' }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1rem' },
                          color: '#0d2344',
                          background: 'transparent',
                          margin: '0',
                          zIndex: 1,
                        }}
                      >
                        Corporate Health Plan
                      </Typography>
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          color: '#3c4f69',
                          margin: '0',
                          padding: '0 2rem 0 0',
                          textAlign: 'left',
                          fontSize: '.8rem',
                          background: 'transparent',
                          zIndex: 1,
                        }}
                      >
                        The best health plan for your organization
                      </Typography>
                    </Box>
                  </ListItem>
                </Box>
                {/* {Plans Mobile Submenu End */}
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '0 0 0 0rem',
                  }}
                  onClick={() => menuOpenHandler()}
                >
                  <NextLink href='#' passHref>
                    <Typography
                      variant='medium'
                      sx={{
                        cursor: 'pointer',
                        color: selectedFaq ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                      }}
                    >
                      FAQ
                    </Typography>
                  </NextLink>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '0 0 0 0rem',
                  }}
                  onClick={() => menuOpenHandler()}
                >
                  <NextLink href='#' passHref>
                    <Typography
                      variant='medium'
                      sx={{
                        cursor: 'pointer',
                        color: selectedBlog ? '#ffa500' : '#0d2344',
                        ':hover': {
                          color: '#ffa500',
                        },
                      }}
                    >
                      Blog
                    </Typography>
                  </NextLink>
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
                      margin: '0 0 2rem 0',
                      padding: '.5rem',
                      borderRadius: '.5rem',
                      color: '#0d2344',
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
              </List>
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
