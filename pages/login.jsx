import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import { styles } from '../utils/styles';
import wd from '../public/w-d_logo.png';
import google from '../public/google-logo.png';
import { theme } from '../components/Theme';
import { reveal_login } from '../components/Animations';

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    reveal_login();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={styles.loginContainer}>
      <Head>
        <title>{`Whatsup Doc! | Login  `}</title>
        <link rel='icon' type='image/x-icon' href='/w-d_logo_thumb.png' />
        <meta name='description' content='Login to your account'></meta>
      </Head>
      <Box sx={styles.loginTransbox}>
        <Box sx={styles.loginForm} className={`reveal_login `}>
          <form
            // onSubmit={handleSubmit(submitHandler)} className={classes.form}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              raised={true}
              sx={{
                width: { xs: '80%', md: '30%' },
                minHeight: { xs: '80%', md: '100%' },
                padding: '.5rem 1rem ',
                borderRadius: '.5rem',
              }}
            >
              <List>
                <ListItem>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    }}
                    onClick={() => router.push('/')}
                  >
                    <Image
                      src={wd}
                      width={300}
                      height={55}
                      alt='Whatsup Doc!'
                    />
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    component='h1'
                    variant='bold'
                    sx={{
                      fontWeight: '200',
                      fontSize: { xs: '1rem', md: '1.5rem' },
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Login
                  </Typography>
                </ListItem>
                <ListItem>
                  <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    rules={{
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    }}
                    render={({ field }) => (
                      <TextField
                        InputProps={{
                          style: { fontSize: '0.8rem', fontWeight: 300 },
                          startAdornment: (
                            <InputAdornment position='start'>
                              <IconButton>
                                <MailRoundedIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { fontSize: '0.8rem', fontWeight: 300 },
                        }}
                        variant='outlined'
                        fullWidth
                        id='email'
                        label='Email'
                        inputProps={{ type: 'email' }}
                        error={Boolean(errors.email)}
                        helperText={
                          errors.email
                            ? errors.email.type === 'pattern'
                              ? 'Email is not valid'
                              : 'Email is required'
                            : null
                        }
                        {...field}
                      />
                    )}
                  />
                </ListItem>
                <ListItem>
                  <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                      required: true,
                      minLength: 6,
                    }}
                    render={({ field }) => (
                      <TextField
                        variant='outlined'
                        fullWidth
                        id='password'
                        label='Password'
                        autoComplete='new-password'
                        error={Boolean(errors.password)}
                        helperText={
                          errors.password
                            ? errors.password.type === 'minLength'
                              ? 'Password is too short'
                              : 'Password is required'
                            : null
                        }
                        {...field}
                        InputProps={{
                          style: { fontSize: '0.8rem', fontWeight: 300 },
                          startAdornment: (
                            <InputAdornment position='start'>
                              <IconButton>
                                <LockRoundedIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                          type: showPassword ? 'text' : 'password',
                        }}
                        InputLabelProps={{
                          style: { fontSize: '0.8rem', fontWeight: 300 },
                        }}
                      />
                    )}
                  />
                </ListItem>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                  {loading ? (
                    <div className={classes.buttonLoading}>
                      <CircularProgress />
                    </div>
                  ) : (
                    <Button
                      fullWidth
                      variant='text'
                      color='primary'
                      type='submit'
                      sx={{ padding: 0 }}
                    >
                      <Typography
                        variant='medium'
                        component='p'
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: { xs: '.8rem', md: '1rem' },
                          color: '#ffffff',
                          backgroundColor: theme.palette.primary.main,
                          border: `1px solid ${theme.palette.primary.main}`,
                          width: '100%',
                          borderRadius: '.2rem',
                          padding: '.5rem 0',
                          transition: '0.5s all ease-out',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.primary.main}`,
                          },
                        }}
                      >
                        <LoginRoundedIcon sx={{ margin: '0 .5rem 0 0' }} />
                        Login
                      </Typography>
                    </Button>
                  )}
                </ListItem>
                <ListItem>
                  <NextLink href={`/forgot_password`} passHref>
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontSize: { xs: '.8rem', md: '1rem' },
                        fontWeight: '300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '0 1rem 0 0',
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <HelpRoundedIcon sx={{ margin: '0 .5rem 0 0' }} />
                      Forgot password?
                    </Typography>
                  </NextLink>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '50%',
                      height: '1px',
                      backgroundColor: '#cccccc',
                    }}
                  />
                  <Typography
                    variant='regular'
                    component='p'
                    sx={{
                      margin: '0 .5rem',
                      fontSize: { xs: '.8rem', md: '1rem' },
                    }}
                  >
                    OR
                  </Typography>
                  <div
                    style={{
                      width: '50%',
                      height: '1px',
                      backgroundColor: '#cccccc',
                    }}
                  />
                </ListItem>
                <ListItem>
                  <Typography
                    variant='medium'
                    component='p'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: '.8rem', md: '1rem' },
                      color: theme.palette.primary.main,
                      border: `1px solid ${theme.palette.primary.main}`,
                      width: '100%',
                      borderRadius: '.2rem',
                      padding: '.5rem 0',
                      cursor: 'pointer',
                      transition: '0.5s all ease-out',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        margin: '0 .5rem 0 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image src={google} width={25} height={25} alt='Google' />
                    </Box>
                    Login with Google
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='medium'
                    component='h2'
                    sx={{
                      fontWeight: '200',
                      fontSize: { xs: '.8rem', md: '1rem' },
                    }}
                  >
                    Don&apos;t have an account yet?&nbsp;
                  </Typography>
                  <Typography
                    variant='medium'
                    component='h2'
                    sx={{
                      fontWeight: '300',
                      fontSize: { xs: '.8rem', md: '1rem' },
                      color: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    onClick={() => router.push('/signup')}
                  >
                    Sign up
                  </Typography>
                </ListItem>
              </List>
            </Card>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
