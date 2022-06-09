import { useRouter } from 'next/router';
import Image from 'next/image';

import { AppBar, Box, Card, Grid, Toolbar, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WavesIcon from '@mui/icons-material/Waves';
import OpacityIcon from '@mui/icons-material/Opacity';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FaceIcon from '@mui/icons-material/Face';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MedicationIcon from '@mui/icons-material/Medication';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonIcon from '@mui/icons-material/Person';

import cs from '../public/chat-screen.png';
import vc from '../public/video-call.png';
import vc2 from '../public/video-call-2.png';
import ss from '../public/specialty-screen.png';
import hv from '../public/home-visit.png';
import wd from '../public/w-d_logo.png';
import Layout from '../components/Layout';
import { styles } from '../utils/styles';
import { useEffect } from 'react';
import {
  reveal_first_section,
  reveal_first_section_image,
  reveal_first_section_text,
  reveal_second_section,
  reveal_second_section_text,
  reveal_second_section_card_1,
  reveal_second_section_card_2,
  reveal_third_section,
  reveal_third_section_text,
  reveal_third_section_card_1,
  reveal_third_section_card_2,
  reveal_third_section_card_3,
  reveal_third_section_card_4,
  reveal_third_section_image,
} from '../components/Animations';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    reveal_first_section()
    reveal_first_section_image()
    reveal_first_section_text()
    
    
    window.addEventListener('scroll', () => {
      reveal_second_section()
      reveal_second_section_text()
      reveal_second_section_card_1()
      reveal_second_section_card_2()
      reveal_third_section()
      reveal_third_section_text()
      reveal_third_section_card_1()
      reveal_third_section_card_2()
      reveal_third_section_card_3()
      reveal_third_section_card_4()
  reveal_third_section_image()
    });
  }, []);

  return (
    <Layout title='Telemedicine & Public Health.'>
      <Box style={{ display: 'flex' }}>
        <Box style={{ flex: 1 }} />
        {/* Main Column Start */}
        <Box
          style={{
            flex: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem',
          }}
        >
          {/* First Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { md: 'center' },
              margin: '2rem 0',
              padding: '3rem',
              borderRadius: '2rem',
              background:
                'transparent linear-gradient(180deg,  rgba(127, 30, 123, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(127, 30, 123, 0.1) 100%)',
              opacity: 0.9,
              webkitBackdropFilter: 'blur(16px)',
              mozBackdropFilter: 'blur(16px)',
              backdropFilter: 'blur(16px)',
              boxShadow: '-2px 2px 5px 1px rgba(0,0,0,0.20)',
            }}
            className={`reveal_first_section`}
          >
            {/* First Section Image */}
            <Box className={`reveal_first_section_image`}>
              <Image
                src={vc}
                width={400}
                height={480}
                alt='Image of video call with a doctor'
              />
            </Box>
            {/* First Section Text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
              className={`reveal_first_section_text`}
            >
              <Typography
                variant='bold'
                sx={{
                  margin: '0 0 1rem 0',
                  textAlign: 'left',
                  color: '#333333',
                }}
              >
                Experience
                <br /> digital health
                <br /> at your <br />
                finger tips.
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  margin: '0 0 2rem 0',
                  textAlign: 'left',
                  color: '#333333',
                }}
              >
                No more waiting rooms. Instantly connect with <br />
                verified medical practitioners and access quality healthcare
                24/7.
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '10rem',
                  height: '3rem',
                  margin: '0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#ffffff',
                  background: 'rgba(14, 83, 148, 1)',
                  boxShadow: '-2px 2px 5px 2px rgba(0,0,0,0.40)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '1px solid rgba(14, 83, 148, 1)',
                    background: 'transparent',
                    color: 'rgba(14, 83, 148, 1)',
                  },
                }}
              >
                Get Started
              </Typography>
            </Box>
          </Box>

          {/* Second Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem 0',
              padding: '3rem',
            }}
            className={`reveal_second_section`}
          >
            {/* Second Section Text */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className={`reveal_second_section_text`}
            >
              <Typography
                variant='bold'
                sx={{
                  margin: '0 0 1rem 0',
                  color: '#0d2344',
                  fontSize: '2rem',
                }}
              >
                Thousands of doctors at your disposal, anytime.
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  margin: '0',
                  color: '#3b4e69',
                }}
              >
                Speak to a highly qualified doctor today on Whatsup Doc!&#8482;
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  margin: '0',
                  color: '#3b4e69',
                }}
              >
                No more reliance on self-medication or unprofessional health
                advice.
              </Typography>
              <Grid container spacing={2} sx={{ margin: '4rem 0' }}>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_1`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#fbe4f1',
                      }}
                    >
                      <FavoriteBorderIcon
                        sx={{ color: '#bf1c7a', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>Cardiology</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_1`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#f2d7c7',
                      }}
                    >
                      <WavesIcon sx={{ color: '#f5762c', fontSize: '2rem' }} />
                    </Box>
                    <Typography variant='medium'>Dermatology</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_1`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#e4fbe9',
                      }}
                    >
                      <OpacityIcon
                        sx={{ color: '#1cbf40', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>Endocrinology</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_1`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#e5e4fb',
                      }}
                    >
                      <FamilyRestroomIcon
                        sx={{ color: '#1f1cbf', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>
                      Family&nbsp;Medicine
                    </Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_2`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#e3f0fd',
                      }}
                    >
                      <FaceIcon sx={{ color: '#1271c9', fontSize: '2rem' }} />
                    </Box>
                    <Typography variant='medium'>Gynaecology</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_2`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#e5e4fb',
                      }}
                    >
                      <LocalHospitalIcon
                        sx={{ color: '#1f1cbf', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>Public&nbsp;Health</Typography>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_2`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#d8eded',
                      }}
                    >
                      <RemoveRedEyeIcon
                        sx={{ color: '#0cebeb', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>Ophtalmology</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={3}
                  className={`reveal_second_section_card_2`}
                >
                  <Card raised sx={styles.specialty}>
                    <Box
                      sx={styles.specialty_icon}
                      style={{
                        background: '#eee4fb',
                      }}
                    >
                      <ChildCareIcon
                        sx={{ color: '#6c28c2', fontSize: '2rem' }}
                      />
                    </Box>
                    <Typography variant='medium'>Paediatrics</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Third Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem 0',
              padding: '3rem',
              borderRadius: '2rem',
              background:
                'transparent linear-gradient(180deg,  rgba(127, 30, 123, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(127, 30, 123, 0.1) 100%)',
              opacity: 0.9,
              webkitBackdropFilter: 'blur(16px)',
              mozBackdropFilter: 'blur(16px)',
              backdropFilter: 'blur(16px)',
              boxShadow: '-2px 2px 5px 1px rgba(0,0,0,0.20)',
            }}
            className={`reveal_third_section`}
          >
            {/* Third Section Text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className={`reveal_third_section_text`}
            >
              <Typography
                variant='bold'
                sx={{
                  margin: '0 0 1rem 0',
                  color: '#0d2344',
                  fontSize: '2rem',
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  margin: '0',
                  color: '#3b4e69',
                }}
              >
                Treatment and medical assistance with cutting-edge Telemedicine
                technology
              </Typography>
              <div style={styles.divider} />
              <Typography
                variant='medium'
                sx={{
                  margin: '0',
                  color: '#3b4e69',
                }}
              >
                Comprehensive and convenient healthcare services at a low cost
              </Typography>
              <div style={styles.divider} />
              <Typography
                variant='medium'
                sx={{
                  margin: '0',
                  color: '#3b4e69',
                }}
              >
                Quality Pharmaceutical Care and Public Health services
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '5rem 0',
                }}
              >
                <Box sx={{ margin: { xs: '0', md: '0 2rem 0 0' } }}>
                  <Card
                    raised
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      borderRadius: '1rem',
                      margin: '2rem 1rem',
                    }}
                    className={`reveal_third_section_card_1`}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        margin: '0 0 1rem 0',
                      }}
                    >
                      <Box
                        sx={styles.services_icon}
                        style={{ color: '#7533c5' }}
                      >
                        <HomeIcon />
                      </Box>
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1.5rem' },
                          color: '#0d2344',
                          margin: '0 0 0 1rem',
                        }}
                      >
                        Doctor House Calls
                      </Typography>
                    </Box>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{ color: '#3c4f69', margin: '0', textAlign: 'left' }}
                    >
                      Stay on top of your health, in the comfort of your home by
                      letting us bring our verified doctor(s) to you.
                    </Typography>
                  </Card>

                  <Card
                    raised
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      borderRadius: '1rem',
                      margin: '2rem 1rem',
                    }}
                    className={`reveal_third_section_card_2`}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        margin: '0 0 1rem 0',
                      }}
                    >
                      <Box
                        sx={styles.services_icon}
                        style={{ color: '#1f1cbf' }}
                      >
                        <PhoneIphoneIcon />
                      </Box>
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1.5rem' },
                          color: '#0d2344',
                          margin: '0 0 0 1rem',
                        }}
                      >
                        Telemedicine
                      </Typography>
                    </Box>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{ color: '#3c4f69', margin: '0', textAlign: 'left' }}
                    >
                      Talk with a doctor via video call or chat from your mobile
                      device or computer anywhere.
                    </Typography>
                  </Card>

                  <Card
                    raised
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      borderRadius: '1rem',
                      margin: '2rem 1rem',
                    }}
                    className={`reveal_third_section_card_3`}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        margin: '0 0 1rem 0',
                      }}
                    >
                      <Box
                        sx={styles.services_icon}
                        style={{ color: '#12ce74' }}
                      >
                        <MedicationIcon />
                      </Box>
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1.5rem' },
                          color: '#0d2344',
                          margin: '0 0 0 1rem',
                        }}
                      >
                        Online Pharmacy
                      </Typography>
                    </Box>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{ color: '#3c4f69', margin: '0', textAlign: 'left' }}
                    >
                      Simply order for your medications from our web or mobile
                      app and have them delivered to you.
                    </Typography>
                  </Card>
                  <Card
                    raised
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      borderRadius: '1rem',
                      margin: '2rem 1rem',
                    }}
                    className={`reveal_third_section_card_4`}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        margin: '0 0 1rem 0',
                      }}
                    >
                      <Box
                        sx={styles.services_icon}
                        style={{ color: '#ffa500' }}
                      >
                        <VerifiedUserIcon />
                      </Box>
                      <Typography
                        variant='bold'
                        component='h2'
                        sx={{
                          fontSize: { xs: '1rem', md: '1.5rem' },
                          color: '#0d2344',
                          margin: '0 0 0 1rem',
                        }}
                      >
                        Health Plans
                      </Typography>
                    </Box>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{ color: '#3c4f69', margin: '0', textAlign: 'left' }}
                    >
                      Enjoy an affordable selection of health plans for
                      individuals, family, or organization.
                    </Typography>
                  </Card>
                </Box>
                <Box className={`reveal_third_section_image`}>
                  <Image
                    src={ss}
                    width={850}
                    height={1500}
                    alt='Image of a Whatsup Doc!&#8482; phone screen'
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Fourth Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '2rem 0',
            }}
          >
            {/* House Calls */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                margin: '2rem 0',
              }}
            >
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1rem',
                  color: '#838383',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                HOUSE CALLS
              </Typography>
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1.5rem',
                  color: '#111111',
                  margin: '1rem 0',
                  textAlign: 'left',
                }}
              >
                Get a doctor to visit you at home
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                Don’t stress over transportation or traffic, we will always come
                to you!
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                We ensure you and your loved ones are properly cared for by
                designing our house call services to suit your needs. Book your
                appointment today.
              </Typography>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '1rem',
                  background: '#FFF3DC',
                }}
              >
                <Typography
                  variant='bold'
                  component='h2'
                  sx={{
                    fontSize: '1rem',
                    color: '#ffa500',
                    textAlign: 'left',
                    margin: '.5rem 0',
                  }}
                >
                  Covid concerns?
                </Typography>
                <Typography
                  variant='medium'
                  component='h2'
                  sx={{
                    fontSize: '1rem',
                    color: '#485a75',
                    textAlign: 'left',
                    margin: '.5rem 0',
                  }}
                >
                  Our doctors are well equipped to visit you while taking all
                  the required preventive measures pre, during, and post-visit.
                </Typography>
              </Box>
              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '10rem',
                  height: '3rem',
                  margin: '1rem 0 0 0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#ffffff',
                  background: 'rgba(14, 83, 148, 1)',
                  boxShadow: '-2px 2px 5px 2px rgba(0,0,0,0.40)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '1px solid rgba(14, 83, 148, 1)',
                    background: 'transparent',
                    color: 'rgba(14, 83, 148, 1)',
                  },
                }}
              >
                Get Started
              </Typography>
            </Box>
            <Box sx={{ flex: 1, margin: '1rem 0' }}>
              <Box sx={{ padding: '1rem', alignItems: 'center' }}>
                <Image
                  src={hv}
                  width={400}
                  height={350}
                  alt='Image of doctor on home visit!'
                />
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '1rem 0',
            }}
          >
            {/* Telemedicine */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                margin: '2rem 0',
              }}
            >
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1rem',
                  color: '#838383',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                TELEMEDICINE
              </Typography>
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1.5rem',
                  color: '#111111',
                  margin: '1rem 0',
                  textAlign: 'left',
                }}
              >
                Talk to a doctor via video call or chat
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                No more unnecessary waiting room queues!
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                With WhatsupDoc!&#8482;, you can now interact with a licensed
                doctor online, via chat, voice call, or video call with your
                mobile device and get instant feedback and medication
                prescriptions.
              </Typography>

              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '12rem',
                  height: '3rem',
                  margin: '1rem 0 0 0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#ffffff',
                  background: 'rgba(14, 83, 148, 1)',
                  boxShadow: '-2px 2px 5px 2px rgba(0,0,0,0.40)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '1px solid rgba(14, 83, 148, 1)',
                    background: 'transparent',
                    color: 'rgba(14, 83, 148, 1)',
                  },
                }}
              >
                Talk to a doctor now
              </Typography>
            </Box>
            <Box sx={{ flex: 1, margin: '1rem 0' }}>
              <Box sx={{ padding: '1rem', alignItems: 'center' }}>
                <Image
                  src={vc2}
                  width={400}
                  height={520}
                  alt='Image of doctor on home visit!'
                />
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '1rem 0',
            }}
          >
            {/* Online Pharmacy */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                margin: '2rem 0',
              }}
            >
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1rem',
                  color: '#838383',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                ONLINE PHARMACY
              </Typography>
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1.5rem',
                  color: '#111111',
                  margin: '1rem 0',
                  textAlign: 'left',
                }}
              >
                Hassle-free prescriptions
              </Typography>

              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                Choose between delivery or pickup services for your medications.
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                Get accurate and legal prescriptions from medical experts with
                an accurate track record of your past prescriptions and sound
                analysis of your current health.
              </Typography>

              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '12rem',
                  height: '3rem',
                  margin: '1rem 0 0 0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#ffffff',
                  background: 'rgba(14, 83, 148, 1)',
                  boxShadow: '-2px 2px 5px 2px rgba(0,0,0,0.40)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '1px solid rgba(14, 83, 148, 1)',
                    background: 'transparent',
                    color: 'rgba(14, 83, 148, 1)',
                  },
                }}
              >
                Get a prescription
              </Typography>
            </Box>
            <Box sx={{ flex: 1, margin: '1rem 0' }}>
              <Box sx={{ padding: '1rem', alignItems: 'center' }}>
                <Image
                  src={cs}
                  width={400}
                  height={600}
                  alt='Image of chat screen on Whatsup Doc!'
                />
              </Box>
            </Box>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '1rem 0',
            }}
          >
            {/* Health Plans */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                margin: '2rem 0',
              }}
            >
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1rem',
                  color: '#838383',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                HEALTH PLANS
              </Typography>
              <Typography
                variant='bold'
                component='h2'
                sx={{
                  fontSize: '1.5rem',
                  color: '#111111',
                  margin: '1rem 0',
                  textAlign: 'left',
                }}
              >
                Affordable Health Plans
              </Typography>

              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                Subscribe to one of our affordable health plans today.
              </Typography>
              <Typography
                variant='medium'
                component='p'
                sx={{
                  fontSize: '1rem',
                  color: '#41526c',
                  margin: '.5rem 0',
                  textAlign: 'left',
                }}
              >
                Choose from any of our health plans for either individuals,
                family or organisation, depending on your needs.
              </Typography>
              <Typography
                variant='medium'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '12rem',
                  height: '3rem',
                  margin: '1rem 0 0 0',
                  padding: '.5rem',
                  borderRadius: '.5rem',
                  color: '#ffffff',
                  background: 'rgba(14, 83, 148, 1)',
                  boxShadow: '-2px 2px 5px 2px rgba(0,0,0,0.40)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '1px solid rgba(14, 83, 148, 1)',
                    background: 'transparent',
                    color: 'rgba(14, 83, 148, 1)',
                  },
                }}
              >
                Choose a plan
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                margin: '1rem 0',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column' },
              }}
            >
              <Card raised sx={styles.plans} style={{ marginLeft: '0' }}>
                <Box
                  sx={styles.plans_icon}
                  style={{
                    background: '#fbe4f1',
                  }}
                >
                  <PersonIcon sx={{ color: '#bf1c7a', fontSize: '2rem' }} />
                </Box>
                <Typography variant='medium'>Individual</Typography>
              </Card>
              <Card raised sx={styles.plans} style={{ marginLeft: '5rem' }}>
                <Box
                  sx={styles.plans_icon}
                  style={{
                    background: '#e4fbe9',
                  }}
                >
                  <FamilyRestroomIcon
                    sx={{ color: '#1cbf40', fontSize: '2rem' }}
                  />
                </Box>
                <Typography variant='medium'>Family</Typography>
              </Card>
              <Card raised sx={styles.plans} style={{ marginLeft: '10rem' }}>
                <Box
                  sx={styles.plans_icon}
                  style={{
                    background: '#e3f0fd',
                  }}
                >
                  <CorporateFareIcon
                    sx={{ color: '#1271c9', fontSize: '2rem' }}
                  />
                </Box>
                <Typography variant='medium'>Corporate</Typography>
              </Card>
            </Box>
          </Box>
          {/* FOOTER */}
          <AppBar
            position='static'
            elevation={0}
            sx={{
              width: '100%',
              background: 'transparent',
              borderTop: '1px solid #cccccc',
              margin: '5rem 0 0 0',
            }}
          >
            <Toolbar
              sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  padding: '20px',
                  width: '100%',
                }}
              >
                <Box
                  sx={{ flex: 1, margin: '0 0 2rem 0', cursor: 'pointer' }}
                  onClick={() => router.push('/')}
                >
                  <Image src={wd} width={300} height={55} alt='Whatsup Doc!' />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    margin: '0 0 1rem 0',
                    cursor: 'pointer',
                    color: '#000000',
                  }}
                >
                  <Box
                    sx={styles.footer_icon}
                    style={{
                      background: '#f2d7c7',
                    }}
                  >
                    <YouTubeIcon
                      sx={{ color: '#ffa500', fontSize: '2rem' }}
                      className='social'
                    />
                  </Box>
                  <Box
                    sx={styles.footer_icon}
                    style={{
                      background: '#f2d7c7',
                    }}
                  >
                    <FacebookIcon
                      sx={{ color: '#ffa500', fontSize: '2rem' }}
                      className='social'
                    />
                  </Box>
                  <Box
                    sx={styles.footer_icon}
                    style={{
                      background: '#f2d7c7',
                    }}
                  >
                    <LinkedInIcon
                      sx={{ color: '#ffa500', fontSize: '2rem' }}
                      className='social'
                    />
                  </Box>
                  <Box
                    sx={styles.footer_icon}
                    style={{
                      background: '#f2d7c7',
                    }}
                  >
                    <InstagramIcon
                      sx={{ color: '#ffa500', fontSize: '2rem' }}
                      className='social'
                    />
                  </Box>
                  <Box
                    sx={styles.footer_icon}
                    style={{
                      background: '#f2d7c7',
                    }}
                  >
                    <TwitterIcon
                      sx={{ color: '#ffa500', fontSize: '2rem' }}
                      className='social'
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                >
                  <Typography
                    variant='medium'
                    sx={{
                      color: '#000000',
                      padding: '.5rem',
                      borderRadius: '.5rem',
                    }}
                    className='nav'
                  >
                    Terms of services
                  </Typography>
                  <Typography
                    variant='medium'
                    sx={{
                      color: '#000000',
                      padding: '.5rem',
                      borderRadius: '.5rem',
                    }}
                    className='nav'
                  >
                    Privacy policy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant='medium'
                    sx={{
                      color: '#000000',
                    }}
                  >
                    Copyright 2022{' '}
                    <strong style={{ color: '#ffa500' }}>|</strong> Whatsup
                    Doc!&#8482; <strong style={{ color: '#ffa500' }}>|</strong>{' '}
                    All Rights Reserved.
                  </Typography>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Main Column End */}
        <Box style={{ flex: 1 }} />
      </Box>
    </Layout>
  );
}
